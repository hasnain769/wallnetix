import { siteConfig } from './seo-config';

/**
 * Schema.org Organization structured data
 * Helps AI engines understand the business entity
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Walnetix',
        alternateName: 'Walnetix AI LABs',
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        description: siteConfig.description,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'SA',
            addressRegion: 'Riyadh', // TODO: Update with actual region
            addressLocality: 'Riyadh', // TODO: Update with actual city
            // streetAddress: 'TODO: Add street address',
            // postalCode: 'TODO: Add postal code',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            // telephone: '+966-XXX-XXX-XXXX', // TODO: Add phone
            // email: 'info@walnetix.com', // TODO: Add email
            availableLanguage: ['English', 'Arabic'],
            areaServed: 'SA',
        },
        sameAs: [
            // TODO: Add actual social media profiles
            // 'https://www.linkedin.com/company/walnetix',
            // 'https://twitter.com/walnetix',
            // 'https://www.facebook.com/walnetix',
        ],
        foundingDate: '2024', // TODO: Update with actual founding year
        areaServed: {
            '@type': 'Country',
            name: 'Saudi Arabia',
        },
    };
}

/**
 * Schema.org WebSite with SearchAction
 * Enables site search in search results
 */
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            '@type': 'Organization',
            name: 'Walnetix',
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

/**
 * Schema.org LocalBusiness
 * For geographic/local SEO in Saudi Arabia
 */
export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: 'Walnetix',
        image: `${siteConfig.url}/images/logo.png`,
        description: 'AI-powered business automation solutions for Saudi SMEs',
        url: siteConfig.url,
        telephone: '+966-XXX-XXX-XXXX', // TODO: Add phone
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'SA',
            addressRegion: 'Riyadh Province',
            addressLocality: 'Riyadh',
            // streetAddress: 'TODO',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.7136, // Riyadh center - TODO: Update with actual location
            longitude: 46.6753,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        areaServed: ['Riyadh', 'Jeddah', 'Dammam', 'Saudi Arabia'],
    };
}

/**
 * Schema.org Service for a specific service offering
 */
export function generateServiceSchema(service: {
    name: string;
    description: string;
    url: string;
    image?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: 'Walnetix',
            url: siteConfig.url,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Saudi Arabia',
        },
        serviceType: service.name,
        url: service.url,
        image: service.image || `${siteConfig.url}/images/services/${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    };
}

/**
 * Schema.org ItemList for services aggregation
 */
export function generateServiceListSchema() {
    const services = [
        {
            name: 'AI Strategy & Consulting',
            description: 'Strategic AI implementation consulting for Saudi businesses',
            url: `${siteConfig.url}/services#ai-strategy`,
        },
        {
            name: 'Business Automation',
            description: 'Custom automation solutions for workflows and operations',
            url: `${siteConfig.url}/services#automation`,
        },
        {
            name: 'WhatsApp Integration',
            description: 'Automated customer service and booking via WhatsApp',
            url: `${siteConfig.url}/services#whatsapp`,
        },
        {
            name: 'Customer Management Systems',
            description: 'CRM and customer organization solutions',
            url: `${siteConfig.url}/services#crm`,
        },
        {
            name: 'Inventory Management',
            description: 'Real-time inventory tracking and sync solutions',
            url: `${siteConfig.url}/services#inventory`,
        },
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Walnetix Services',
        description: 'Comprehensive business automation services for Saudi SMEs',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                url: service.url,
            },
        })),
    };
}

/**
 * Schema.org Product for solution offerings
 */
export function generateProductSchema(product: {
    name: string;
    description: string;
    image: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: product.name,
        description: product.description,
        image: `${siteConfig.url}${product.image}`,
        url: product.url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'SAR',
            priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '0',
                priceCurrency: 'SAR',
            },
        },
        provider: {
            '@type': 'Organization',
            name: 'Walnetix',
            url: siteConfig.url,
        },
    };
}

/**
 * Schema.org BreadcrumbList for navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Schema.org FAQPage for FAQ sections
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Schema.org Article for blog posts/case studies
 */
export function generateArticleSchema(article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: `${siteConfig.url}${article.image}`,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Organization',
            name: article.author || 'Walnetix',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Walnetix',
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
        url: article.url,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url,
        },
    };
}
