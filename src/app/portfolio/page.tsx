import { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import StructuredData from '@/components/seo/StructuredData';
import { getAllPortfolio } from '@/lib/portfolio';
import { generateMetadata, generateCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './portfolio.module.css';

export const metadata: Metadata = generateMetadata({
    title: 'Portfolio',
    description: 'Explore our innovative software solutions. From AI agent platforms to legal tech and agricultural trading systems.',
    keywords: ['software portfolio', 'AI platforms', 'SaaS products', 'enterprise solutions'],
    canonical: generateCanonicalUrl('/portfolio'),
});

export default function Portfolio() {
    const items = getAllPortfolio();

    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Portfolio', url: generateCanonicalUrl('/portfolio') },
    ];

    // CollectionPage schema for portfolio listing
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Walnetix Portfolio',
        description: 'Innovative software solutions built with cutting-edge technology',
        url: generateCanonicalUrl('/portfolio'),
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'SoftwareApplication',
                    name: item.title,
                    description: item.excerpt,
                    image: `${siteConfig.url}${item.image}`,
                    datePublished: item.date,
                    url: `${siteConfig.url}/portfolio/${item.slug}`,
                },
            })),
        },
    };

    return (
        <>
            <StructuredData
                data={[
                    collectionSchema,
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <main className={styles.main}>
                <PortfolioHero />
                <section className={styles.portfolio}>
                    <div className={styles.grid}>
                        {items.map((item, index) => (
                            <PortfolioCard
                                key={item.slug}
                                slug={item.slug}
                                title={item.title}
                                date={item.date}
                                description={item.excerpt}
                                imageSrc={item.image}
                                tech={item.tech}
                                index={index}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
