import sanitizeHtml from 'sanitize-html';

/**
 * Sanitises article HTML delivered by RankGPT before it is rendered with
 * dangerouslySetInnerHTML. The policy keeps ordinary long-form markup
 * (headings, lists, tables, images, links, code) and drops scripts, event
 * handlers, inline styles, iframes and non-http(s) URLs.
 */
const policy = {
  allowedTags: [
    ...sanitizeHtml.defaults.allowedTags.filter((tag) => tag !== 'h1'),
    'img',
    'figure',
    'figcaption',
    'picture',
    'source',
    'details',
    'summary',
  ],
  // sanitize-html treats nothing as a void tag unless told; `source` is one.
  selfClosing: [...sanitizeHtml.defaults.selfClosing, 'source'],
  allowedAttributes: {
    a: ['href', 'name', 'target', 'rel', 'title', 'hreflang'],
    img: ['src', 'srcset', 'sizes', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
    source: ['srcset', 'sizes', 'type', 'media'],
    td: ['colspan', 'rowspan'],
    th: ['colspan', 'rowspan', 'scope'],
    ol: ['start', 'reversed', 'type'],
    time: ['datetime'],
    abbr: ['title'],
    details: ['open'],
    // Anchors for in-article navigation (tables of contents link to headings).
    h2: ['id'],
    h3: ['id'],
    h4: ['id'],
    h5: ['id'],
    h6: ['id'],
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesByTag: { img: ['http', 'https'], source: ['http', 'https'] },
  allowProtocolRelative: false,
  disallowedTagsMode: 'discard',
  transformTags: {
    // The page already renders the title as its only <h1>.
    h1: 'h2',
    a: (tagName, attribs) => {
      const next = { ...attribs };
      if (next.target === '_blank') {
        const rel = new Set((next.rel ?? '').split(/\s+/).filter(Boolean));
        rel.add('noopener');
        rel.add('noreferrer');
        next.rel = [...rel].join(' ');
      }
      return { tagName, attribs: next };
    },
    img: (tagName, attribs) => ({
      tagName,
      attribs: {
        ...attribs,
        loading: attribs.loading ?? 'lazy',
        decoding: attribs.decoding ?? 'async',
      },
    }),
  },
  // An image whose src was stripped (data: URI, javascript:, …) is just an
  // empty box; drop the tag rather than render it.
  exclusiveFilter: (frame) =>
    (frame.tag === 'img' || frame.tag === 'source') && !frame.attribs.src && !frame.attribs.srcset,
};

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Drops an inline copy of the hero image so it is not shown twice — the page
 * renders the hero itself above the body. Runs on sanitised output, whose
 * attribute quoting and escaping are normalised, so the patterns are reliable.
 */
export function stripHeroImage(html, heroImageUrl) {
  if (!html || !heroImageUrl) return html;
  const candidates = new Set([heroImageUrl, heroImageUrl.replaceAll('&', '&amp;')]);
  let output = html;
  for (const url of candidates) {
    const src = `src="${escapeRegExp(url)}"`;
    const img = `<img\\b[^>]*\\s${src}[^>]*>`;
    output = output
      .replace(new RegExp(`<figure>(?:(?!</figure>)[\\s\\S])*?${img}(?:(?!</figure>)[\\s\\S])*?</figure>`, 'gi'), '')
      .replace(new RegExp(`<p>\\s*${img}\\s*</p>`, 'gi'), '')
      .replace(new RegExp(img, 'gi'), '');
  }
  return output;
}

/**
 * @param {string} html            Raw article body from RankGPT.
 * @param {{ heroImageUrl?: string | null }} [options]
 */
export function sanitizeArticleHtml(html, { heroImageUrl = null } = {}) {
  if (typeof html !== 'string') return '';
  return stripHeroImage(sanitizeHtml(html, policy), heroImageUrl).trim();
}
