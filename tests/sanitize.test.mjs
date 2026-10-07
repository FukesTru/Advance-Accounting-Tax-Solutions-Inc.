import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { sanitizeArticleHtml, stripHeroImage } from '../lib/sanitize.js';

describe('sanitizeArticleHtml', () => {
  it('removes scripts, event handlers and inline styles', () => {
    const out = sanitizeArticleHtml(
      '<p onclick="x()" style="color:red">Hi</p><script>alert(1)</script><img src="x.png" onerror="alert(1)">'
    );
    assert.equal(out, '<p>Hi</p><img src="x.png" loading="lazy" decoding="async" />');
  });

  it('keeps long-form markup', () => {
    const html =
      '<h2 id="intro">Intro</h2><p>Text <strong>bold</strong> <a href="https://example.com">link</a></p><ul><li>one</li></ul><table><tr><th>a</th><td>b</td></tr></table><figure><img src="https://cdn/i.png" alt="x" width="10" height="5"><figcaption>cap</figcaption></figure><pre><code>x</code></pre>';
    const out = sanitizeArticleHtml(html);
    for (const needle of ['<h2 id="intro">', '<strong>', '<a href="https://example.com">', '<ul>', '<table>', '<figure>', '<figcaption>', '<pre>', 'width="10"']) {
      assert.ok(out.includes(needle), `missing ${needle} in ${out}`);
    }
  });

  it('demotes h1 to h2 so the page keeps a single h1', () => {
    assert.equal(sanitizeArticleHtml('<h1>Title</h1>'), '<h2>Title</h2>');
  });

  it('drops javascript: and data: URLs', () => {
    assert.equal(sanitizeArticleHtml('<a href="javascript:alert(1)">x</a>'), '<a>x</a>');
    assert.equal(sanitizeArticleHtml('<img src="data:image/png;base64,AAAA">'), '');
  });

  it('drops iframes and style blocks', () => {
    assert.equal(sanitizeArticleHtml('<iframe src="https://x"></iframe><style>p{}</style><p>ok</p>'), '<p>ok</p>');
  });

  it('adds rel="noopener noreferrer" to links that open a new tab', () => {
    assert.equal(
      sanitizeArticleHtml('<a href="https://x" target="_blank">x</a>'),
      '<a href="https://x" target="_blank" rel="noopener noreferrer">x</a>'
    );
  });

  it('removes an inline copy of the hero image, including its figure', () => {
    const hero = 'https://proj.supabase.co/storage/v1/object/public/blog-images/a/hero.jpg';
    const html = `<figure><img src="${hero}" alt="hero"><figcaption>Hero</figcaption></figure><p>Body</p><p><img src="${hero}"></p><img src="https://proj.supabase.co/other.png">`;
    const out = sanitizeArticleHtml(html, { heroImageUrl: hero });
    assert.equal(out, '<p>Body</p><img src="https://proj.supabase.co/other.png" loading="lazy" decoding="async" />');
  });

  it('matches a hero URL containing an ampersand in its escaped form', () => {
    const hero = 'https://cdn/h.jpg?a=1&b=2';
    const out = stripHeroImage('<p><img src="https://cdn/h.jpg?a=1&amp;b=2" /></p><p>x</p>', hero);
    assert.equal(out, '<p>x</p>');
  });

  it('returns an empty string for non-strings', () => {
    assert.equal(sanitizeArticleHtml(null), '');
    assert.equal(sanitizeArticleHtml(undefined), '');
  });
});
