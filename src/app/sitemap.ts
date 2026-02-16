import { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/caseStudies';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://walnetix.com';

import { getAllPortfolio } from '@/lib/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
    const caseStudies = getAllCaseStudies();
    const portfolioItems = getAllPortfolio();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/solutions`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/case-studies`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // Dynamic case study pages
    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${BASE_URL}/case-studies/${study.slug}`,
        lastModified: study.date ? new Date(study.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Dynamic portfolio pages
    const portfolioPages: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
        url: `${BASE_URL}/portfolio/${item.slug}`,
        lastModified: item.date ? new Date(item.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...caseStudyPages, ...portfolioPages];
}
