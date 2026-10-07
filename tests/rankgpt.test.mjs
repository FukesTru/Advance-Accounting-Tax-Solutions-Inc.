import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  guessContentType,
  isAuthorized,
  normalizeSlug,
  parseWebhookPayload,
  rewriteUrls,
  safeFilename,
  secretsMatch,
  storagePath,
} from '../lib/rankgpt.js';

const SECRET = 'correct-horse-battery-staple';

function headers(init) {
  return new Headers(init);
}

const validArticle = () => ({
  event: 'article.published',
  id: 'art_123',
  title: 'LLC vs. S-Corp in Florida',
  slug: 'LLC-vs-S-Corp-Florida',
  meta_description: 'Which entity is right for your business?',
  content_html: '<p>Body <img src="https://cdn.rankgpt.test/a/inline.png"></p>',
  content_markdown: 'Body ![](https://cdn.rankgpt.test/a/inline.png)',
  hero_image_url: 'https://cdn.rankgpt.test/a/hero.jpg',
  hero_image_alt: 'Office desk',
  images: [
    { url: 'https://cdn.rankgpt.test/a/hero.jpg', alt: 'Office desk', filename: 'hero.jpg', is_hero: true },
    { url: 'https://cdn.rankgpt.test/a/inline.png', alt: 'Chart', filename: 'inline.png', is_hero: false },
  ],
  language: 'en',
  status: 'publish',
  published_at: '2026-10-07T12:00:00Z',
});

describe('secretsMatch', () => {
  it('accepts an identical secret', () => assert.equal(secretsMatch(SECRET, SECRET), true));
  it('rejects a different secret of the same length', () =>
    assert.equal(secretsMatch('correct-horse-battery-stapl3', SECRET), false));
  it('rejects a different length', () => assert.equal(secretsMatch('short', SECRET), false));
  it('rejects an empty expected secret', () => assert.equal(secretsMatch('', ''), false));
  it('rejects non-strings', () => assert.equal(secretsMatch(undefined, SECRET), false));
});

describe('isAuthorized', () => {
  it('accepts Authorization: Bearer', () =>
    assert.equal(isAuthorized(headers({ authorization: `Bearer ${SECRET}` }), SECRET), true));
  it('accepts a lower-case bearer scheme', () =>
    assert.equal(isAuthorized(headers({ authorization: `bearer ${SECRET}` }), SECRET), true));
  it('accepts X-API-Key', () => assert.equal(isAuthorized(headers({ 'x-api-key': SECRET }), SECRET), true));
  it('rejects a wrong bearer token', () =>
    assert.equal(isAuthorized(headers({ authorization: 'Bearer nope' }), SECRET), false));
  it('rejects a wrong api key even when a bearer header is also wrong', () =>
    assert.equal(isAuthorized(headers({ authorization: 'Bearer nope', 'x-api-key': 'nope' }), SECRET), false));
  it('rejects a non-bearer Authorization header', () =>
    assert.equal(isAuthorized(headers({ authorization: `Basic ${SECRET}` }), SECRET), false));
  it('rejects a request with no credentials', () => assert.equal(isAuthorized(headers(), SECRET), false));
});

describe('parseWebhookPayload', () => {
  it('treats the test event as save-nothing', () => {
    assert.deepEqual(parseWebhookPayload({ event: 'test', junk: true }), { ok: true, value: { event: 'test' } });
  });

  it('normalises a valid article', () => {
    const result = parseWebhookPayload(validArticle());
    assert.equal(result.ok, true);
    const { value } = result;
    assert.equal(value.slug, 'llc-vs-s-corp-florida');
    assert.equal(value.published_at, '2026-10-07T12:00:00.000Z');
    assert.equal(value.language, 'en');
    assert.equal(value.images.length, 2);
    assert.deepEqual(value.images[0], {
      url: 'https://cdn.rankgpt.test/a/hero.jpg',
      filename: 'hero.jpg',
      alt: 'Office desk',
      is_hero: true,
    });
  });

  it('defaults optional fields', () => {
    const body = validArticle();
    delete body.meta_description;
    delete body.content_markdown;
    delete body.hero_image_url;
    delete body.hero_image_alt;
    delete body.images;
    delete body.language;
    const { ok, value } = parseWebhookPayload(body);
    assert.equal(ok, true);
    assert.equal(value.meta_description, null);
    assert.equal(value.content_markdown, '');
    assert.equal(value.hero_image_url, null);
    assert.deepEqual(value.images, []);
    assert.equal(value.language, 'en');
  });

  it('adds the hero to the image list when RankGPT left it out', () => {
    const body = validArticle();
    body.images = body.images.slice(1);
    const { value } = parseWebhookPayload(body);
    assert.equal(value.images.length, 2);
    assert.equal(value.images[0].url, 'https://cdn.rankgpt.test/a/hero.jpg');
    assert.equal(value.images[0].filename, 'hero.jpg');
    assert.equal(value.images[0].is_hero, true);
  });

  it('drops duplicate image URLs', () => {
    const body = validArticle();
    body.images.push({ ...body.images[1] });
    assert.equal(parseWebhookPayload(body).value.images.length, 2);
  });

  it('accepts other article events', () => {
    assert.equal(parseWebhookPayload({ ...validArticle(), event: 'article.updated' }).ok, true);
  });

  const rejects = (label, mutate, fragment) =>
    it(`rejects ${label}`, () => {
      const body = validArticle();
      mutate(body);
      const result = parseWebhookPayload(body);
      assert.equal(result.ok, false, `expected rejection for ${label}`);
      assert.match(result.error, fragment);
    });

  it('rejects a non-object body', () => {
    assert.equal(parseWebhookPayload(null).ok, false);
    assert.equal(parseWebhookPayload([]).ok, false);
    assert.equal(parseWebhookPayload('x').ok, false);
  });
  rejects('a missing event', (b) => delete b.event, /"event"/);
  rejects('a missing id', (b) => delete b.id, /"id"/);
  rejects('a blank title', (b) => (b.title = '  '), /"title"/);
  rejects('a slug with a slash', (b) => (b.slug = 'a/b'), /"slug"/);
  rejects('a slug with spaces', (b) => (b.slug = 'two words'), /"slug"/);
  rejects('missing html', (b) => delete b.content_html, /"content_html"/);
  rejects('a non-string markdown', (b) => (b.content_markdown = 5), /"content_markdown"/);
  rejects('an unknown status', (b) => (b.status = 'live'), /"status"/);
  rejects('an unparseable date', (b) => (b.published_at = 'yesterday'), /"published_at"/);
  rejects('a non-http hero', (b) => (b.hero_image_url = 'ftp://x/y.jpg'), /"hero_image_url"/);
  rejects('a non-array images field', (b) => (b.images = {}), /"images"/);
  rejects('an image without a URL', (b) => (b.images[1] = { filename: 'x.png' }), /images\[1\]\.url/);
  rejects('an image with a javascript: URL', (b) => (b.images[1].url = 'javascript:alert(1)'), /images\[1\]\.url/);
});

describe('normalizeSlug', () => {
  it('lower-cases and trims', () => assert.equal(normalizeSlug('  Hello-World '), 'hello-world'));
  it('keeps unicode letters', () => assert.equal(normalizeSlug('impuestos-españa'), 'impuestos-españa'));
  it('rejects dot segments', () => {
    assert.equal(normalizeSlug('.'), null);
    assert.equal(normalizeSlug('..'), null);
  });
  it('rejects query and fragment characters', () => {
    assert.equal(normalizeSlug('a?b'), null);
    assert.equal(normalizeSlug('a#b'), null);
    assert.equal(normalizeSlug('a%20b'), null);
  });
});

describe('safeFilename', () => {
  it('keeps a plain filename', () => assert.equal(safeFilename('hero.jpg', 'https://x/y'), 'hero.jpg'));
  it('strips directories and traversal', () =>
    assert.equal(safeFilename('../../etc/passwd', 'https://x/y'), 'passwd'));
  it('strips query strings', () => assert.equal(safeFilename('a.png?v=2', 'https://x/y'), 'a.png'));
  it('replaces unsafe characters', () =>
    assert.equal(safeFilename('my photo (1).JPG', 'https://x/y'), 'my-photo-1-.JPG'));
  it('strips accents and non-ascii', () => assert.equal(safeFilename('café.png', 'https://x/y'), 'cafe.png'));
  it('falls back to the URL path', () =>
    assert.equal(safeFilename(undefined, 'https://cdn.test/images/pic%20one.webp?x=1'), 'pic-one.webp'));
  it('falls back to a positional name', () => assert.equal(safeFilename('', 'https://cdn.test/', 2), 'image-3'));
  it('caps the length but keeps the extension', () => {
    const name = safeFilename(`${'a'.repeat(300)}.jpeg`, 'https://x/y');
    assert.equal(name.length, 150);
    assert.ok(name.endsWith('.jpeg'));
  });
});

describe('storagePath', () => {
  it('namespaces files under a sanitised article id', () => {
    assert.equal(storagePath('art_123', 'hero.jpg'), 'art_123/hero.jpg');
    assert.equal(storagePath('../weird id/', 'hero.jpg'), 'weird-id/hero.jpg');
  });
});

describe('guessContentType', () => {
  it('prefers the extension', () => assert.equal(guessContentType('a.webp', 'text/plain'), 'image/webp'));
  it('falls back to the declared type', () =>
    assert.equal(guessContentType('noext', 'image/png; charset=binary'), 'image/png'));
  it('ignores a generic declared type', () =>
    assert.equal(guessContentType('noext', 'application/octet-stream'), 'application/octet-stream'));
});

describe('rewriteUrls', () => {
  const map = new Map([
    ['https://cdn.rankgpt.test/a/hero.jpg', 'https://proj.supabase.co/storage/v1/object/public/blog-images/art_123/hero.jpg'],
    ['https://cdn.rankgpt.test/a/hero.jpg?w=800', 'https://proj.supabase.co/storage/v1/object/public/blog-images/art_123/hero-800.jpg'],
    ['https://cdn.rankgpt.test/q?a=1&b=2', 'https://proj.supabase.co/storage/v1/object/public/blog-images/art_123/q.png'],
  ]);

  it('replaces every occurrence', () => {
    const out = rewriteUrls(
      '<img src="https://cdn.rankgpt.test/a/hero.jpg"> and again https://cdn.rankgpt.test/a/hero.jpg',
      map
    );
    assert.equal(out.includes('cdn.rankgpt.test'), false);
    assert.equal(out.split('art_123/hero.jpg').length, 3);
  });

  it('rewrites the longer URL before its prefix', () => {
    const out = rewriteUrls('https://cdn.rankgpt.test/a/hero.jpg?w=800', map);
    assert.equal(out, 'https://proj.supabase.co/storage/v1/object/public/blog-images/art_123/hero-800.jpg');
  });

  it('also rewrites the HTML-escaped form of a URL with an ampersand', () => {
    const out = rewriteUrls('<img src="https://cdn.rankgpt.test/q?a=1&amp;b=2">', map);
    assert.equal(out, '<img src="https://proj.supabase.co/storage/v1/object/public/blog-images/art_123/q.png">');
  });

  it('passes non-strings through', () => {
    assert.equal(rewriteUrls(null, map), null);
    assert.equal(rewriteUrls('', map), '');
  });
});
