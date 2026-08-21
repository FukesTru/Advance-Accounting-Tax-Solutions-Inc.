import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCall from '@/components/FloatingCall';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// No `weight` — that pulls the variable font (one file covering 200–800)
// instead of three separate static instances.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Accountant & Tax Advisor in Fort Myers & Naples, FL | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    'CPA-led tax planning, accounting, and fractional CFO services for individuals and businesses in Fort Myers & Naples, FL. Free consultation — call today.',
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.name,
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport = {
  themeColor: '#0B2545',
  width: 'device-width',
  initialScale: 1,
};

// A configured GA4 property looks like G-XXXXXXXXXX with real characters; the
// shipped placeholder is all X.
const analyticsEnabled = /^G-[A-Z0-9]+$/.test(site.gaMeasurementId) && !/^G-X+$/.test(site.gaMeasurementId);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <noscript>
          {/* Belt and braces alongside the `scripting: none` rule in globals.css. */}
          <style>{`.fade-up{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-white">
        {/*
          Analytics only mounts once a real measurement ID is configured — the
          placeholder ID would otherwise cost every visitor a third-party
          request that reports nowhere. `lazyOnload` keeps the tag off the
          critical path so it cannot affect LCP or interaction readiness.
          TODO(client): set gaMeasurementId in lib/site.js.
        */}
        {analyticsEnabled ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaMeasurementId}');`}
            </Script>
          </>
        ) : null}

        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCall />

        {/*
          LeadConnector chat widget. `lazyOnload` deliberately: it mounts a
          floating launcher, not page content, so it must not compete with the
          hero for bandwidth or delay interaction readiness. It takes the
          bottom-right corner, which is why FloatingCall now sits bottom-left.
        */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a75c96eb0aa0f92825cb840"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
