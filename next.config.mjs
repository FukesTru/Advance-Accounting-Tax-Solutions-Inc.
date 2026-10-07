// Blog images are served from the Supabase Storage bucket the RankGPT webhook
// copies them into. next/image needs that origin allow-listed; derive it from
// SUPABASE_URL (which must therefore be set at build time too) so a
// self-hosted or custom-domain project works as well as *.supabase.co.
const supabaseOrigin = (() => {
  try {
    if (!process.env.SUPABASE_URL) return null;
    const url = new URL(process.env.SUPABASE_URL);
    return {
      protocol: url.protocol.replace(':', ''),
      hostname: url.hostname,
      ...(url.port ? { port: url.port } : {}),
      pathname: '/storage/v1/object/public/**',
    };
  } catch {
    return null;
  }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    // AVIF first, WebP as the fallback — typically 30–50% smaller than the
    // source JPEGs at the same perceived quality.
    formats: ['image/avif', 'image/webp'],
    // Trim the default breakpoint set to the widths this layout actually
    // requests, so fewer variants are generated and cached.
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // Allow-listed so image slots can be switched to hosted photography
    // without further config changes.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: '**.supabase.co', pathname: '/storage/v1/object/public/**' },
      ...(supabaseOrigin ? [supabaseOrigin] : []),
    ],
  },

  async headers() {
    return [
      {
        // Photography and the logo are content-stable; let browsers and the
        // CDN hold them for a year. Next already does this for /_next/static.
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
