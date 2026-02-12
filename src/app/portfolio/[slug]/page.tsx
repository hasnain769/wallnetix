import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPortfolio, getPortfolioBySlug } from '@/lib/portfolio';
import PortfolioDetail from '@/components/portfolio/PortfolioDetail';
import StructuredData from '@/components/seo/StructuredData';
import { generateCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const items = getAllPortfolio();
    return items.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const item = getPortfolioBySlug(slug);

    if (!item) {
        return { title: 'Portfolio Item Not Found' };
    }

    const canonicalUrl = generateCanonicalUrl(`/portfolio/${slug}`);

    return {
        title: item.title,
        description: item.excerpt,
        keywords: ['portfolio', 'software solution', 'SaaS product', item.title],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'article',
            title: `${item.title} - Walnetix Portfolio`,
            description: item.excerpt,
            url: canonicalUrl,
            siteName: siteConfig.name,
            images: [
                {
                    url: `${siteConfig.url}${item.image}`,
                    width: 1200,
                    height: 630,
                    alt: item.title,
                },
            ],
            publishedTime: item.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${item.title} - Walnetix Portfolio`,
            description: item.excerpt,
            images: [`${siteConfig.url}${item.image}`],
        },
    };
}

export default async function PortfolioItemPage({ params }: PageProps) {
    const { slug } = await params;
    const item = getPortfolioBySlug(slug);

    if (!item) {
        notFound();
    }

    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Portfolio', url: generateCanonicalUrl('/portfolio') },
        { name: item.title, url: generateCanonicalUrl(`/portfolio/${slug}`) },
    ];

    // SoftwareApplication schema for portfolio items
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: item.title,
        description: item.excerpt,
        image: `${siteConfig.url}${item.image}`,
        datePublished: item.date,
        url: generateCanonicalUrl(`/portfolio/${slug}`),
        author: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
        },
        applicationCategory: 'BusinessApplication',
    };

    return (
        <>
            <StructuredData
                data={[
                    softwareSchema,
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <PortfolioDetail item={item} />
        </>
    );
}
