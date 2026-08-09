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

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        {/* GA4 placeholder — TODO(client): swap gaMeasurementId in lib/site.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaMeasurementId}');`}
        </Script>

        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}
