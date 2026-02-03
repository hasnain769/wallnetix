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
            streetAddress: 'AL nasr road, Al masani district',
            addressLocality: 'Riyadh',
            postalCode: '14714',
            addressCountry: 'SA',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+966-55-873-6888',
            contactType: 'Customer Service',
            email: 'Contact@walnetix.com',
            availableLanguage: ['English', 'Arabic'],
            areaServed: 'World',
        },
        sameAs: [
            'https://www.linkedin.com/company/walnetix/',
            'https://www.instagram.com/walnetix',
            'https://www.tiktok.com/@walnetix',
            'https://www.facebook.com/Walnetix/',
        ],
        foundingDate: '2024',
        areaServed: {
            '@type': 'Country',
            name: 'Worldwide',
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
        description: 'AI-powered business automation solutions for global enterprises',
        url: siteConfig.url,
        telephone: '+966-55-873-6888',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'AL nasr road, Al masani district',
            addressLocality: 'Riyadh',
            postalCode: '14714',
            addressCountry: 'SA',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.57736445987006,
            longitude: 46.73979325434708,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        areaServed: ['Worldwide'],
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
            name: 'Worldwide',
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
            description: 'Strategic AI implementation consulting for global businesses',
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
        description: 'Comprehensive business automation services for global enterprises',
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
            priceCurrency: 'USD',
            priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '0',
                priceCurrency: 'USD',
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
