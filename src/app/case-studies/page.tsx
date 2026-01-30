import { Metadata } from 'next';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import StructuredData from '@/components/seo/StructuredData';
import { getAllCaseStudies } from '@/lib/caseStudies';
import { generateMetadata, generateCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './case-studies.module.css';

export const metadata: Metadata = generateMetadata({
    title: 'Case Studies',
    description: 'See how Saudi SMEs are growing with Walnetix automation. Real success stories from businesses in Riyadh, Jeddah, and Dammam.',
    keywords: ['Saudi business success stories', 'automation case studies', 'SME transformation Saudi Arabia'],
    canonical: generateCanonicalUrl('/case-studies'),
});

export default function CaseStudies() {
    const studies = getAllCaseStudies();

    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Case Studies', url: generateCanonicalUrl('/case-studies') },
    ];

    // CollectionPage schema for case studies listing
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Walnetix Case Studies',
        description: 'Success stories from Saudi SMEs using Walnetix automation solutions',
        url: generateCanonicalUrl('/case-studies'),
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: studies.map((study, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'Article',
                    headline: study.title,
                    description: study.excerpt,
                    image: `${siteConfig.url}${study.image}`,
                    datePublished: study.date,
                    url: `${siteConfig.url}/case-studies/${study.slug}`,
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
                <CaseStudiesHero />
                <section className={styles.cases}>
                    <div className={styles.grid}>
                        {studies.map((study, index) => (
                            <CaseStudyCard
                                key={study.slug}
                                slug={study.slug}
                                title={study.title}
                                date={study.date}
                                description={study.excerpt}
                                imageSrc={study.image}
                                index={index}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
