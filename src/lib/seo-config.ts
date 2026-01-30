import { Metadata } from 'next';

export const siteConfig = {
    name: 'Walnetix',
    title: 'Walnetix - AI LABs for Saudi SMEs',
    description: 'Automate Your Busy Work. Grow Your Business. Leading software development company for Saudi SMEs building intelligent automation systems.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://walnetix.com',
    ogImage: '/images/og-image.jpg',
    locale: 'en_US',
    localeAlt: 'ar_SA', // Arabic alternate
    keywords: [
        'business automation Saudi Arabia',
        'SME automation solutions',
        'WhatsApp booking bot',
        'Saudi business software',
        'AI for Saudi businesses',
        'automation Riyadh',
        'automation Jeddah',
        'Vision 2030 technology',
        'customer management software',
        'inventory management Saudi',
    ],
};

export interface PageSEO {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    noindex?: boolean;
    canonical?: string;
}

/**
 * Generate complete metadata for a page
 */
export function generateMetadata({
    title,
    description,
    keywords = [],
    image,
    noindex = false,
    canonical,
}: PageSEO): Metadata {
    const pageTitle = title.includes('Walnetix') ? title : `${title} - Walnetix`;
    const pageImage = image || siteConfig.ogImage;
    const imageUrl = pageImage.startsWith('http')
        ? pageImage
        : `${siteConfig.url}${pageImage}`;

    return {
        title: pageTitle,
        description,
        keywords: [...siteConfig.keywords, ...keywords],
        authors: [{ name: 'Walnetix' }],
        creator: 'Walnetix',
        publisher: 'Walnetix',

        // Canonical URL
        alternates: canonical ? {
            canonical,
        } : undefined,

        // Open Graph
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            alternateLocale: [siteConfig.localeAlt],
            url: canonical || siteConfig.url,
            title: pageTitle,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        // Twitter Card
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description,
            images: [imageUrl],
            creator: '@walnetix', // Update with actual Twitter handle
        },

        // Robots
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification tags (to be filled with actual values)
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
            // yandex: 'yandex-verification-code',
            // bing: 'bing-verification-code',
        },
    };
}

/**
 * Generate canonical URL for a path
 */
export function generateCanonicalUrl(path: string): string {
    // Remove trailing slash and ensure leading slash
    const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
    return `${siteConfig.url}${cleanPath}`;
}
