import { Metadata } from 'next';
import ProductBlock from '@/components/solutions/ProductBlock';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './solutions.module.css';

export const metadata: Metadata = generateMetadata({
    title: 'Our Solutions',
    description: 'Practical automation tools for Saudi businesses: WhatsApp Booking Bots, Customer Organization Systems, and Inventory Sync. Transform your operations today.',
    keywords: ['WhatsApp booking bot Saudi', 'customer management Saudi', 'inventory sync Salla Zid', 'business automation tools'],
    canonical: generateCanonicalUrl('/solutions'),
});

export default function Solutions() {
    const solutions = [
        {
            title: 'WhatsApp Booking Bot',
            description: 'Let customers book appointments or ask prices automatically on WhatsApp, even when you\'re asleep. Connects directly to your calendar so you never double-book.',
            imageSrc: '/images/hero.png',
            imageAlt: 'WhatsApp Booking Bot Interface',
        },
        {
            title: 'Customer & Order Organizer',
            description: 'Stop using messy Excel sheets. See all your customer info and orders in one clean, simple place. Know exactly who paid and who is pending.',
            imageSrc: '/images/dashboard.png',
            imageAlt: 'Customer Dashboard on iPad',
            reversed: true,
        },
        {
            title: 'Inventory & Sales Sync',
            description: 'For retailers: Automatically update your stock levels when a sale happens online or in-store. Integrates seamlessly with Salla and Zid.',
            imageSrc: '/images/inventory.png',
            imageAlt: 'Inventory Management on Laptop',
        },
    ];

    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Solutions', url: generateCanonicalUrl('/solutions') },
    ];

    // Generate product schemas for each solution
    const productSchemas = solutions.map(solution =>
        generateProductSchema({
            name: solution.title,
            description: solution.description,
            image: solution.imageSrc,
            url: `${siteConfig.url}/solutions#${solution.title.toLowerCase().replace(/\s+/g, '-')}`,
        })
    );

    return (
        <>
            <StructuredData
                data={[
                    ...productSchemas,
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <main className={styles.main}>
                <SolutionsHero />
                <section className={styles.solutions}>
                    {solutions.map((solution, index) => (
                        <ProductBlock key={index} {...solution} index={index} />
                    ))}
                </section>
            </main>
        </>
    );
}
