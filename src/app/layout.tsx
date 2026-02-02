import { Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallButton from "@/components/common/StickyCallButton";
import StructuredData from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Walnetix' }],
  creator: 'Walnetix',
  publisher: 'Walnetix',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: [], // siteConfig.localeAlt removed
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Walnetix - Business Automation',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@walnetix',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (update with actual values when available)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA and Mobile SEO */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />

        {/* Structured Data */}
        <StructuredData
          data={[
            generateOrganizationSchema(),
            generateWebSiteSchema(),
          ]}
        />
      </head>
      <body className={font.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
