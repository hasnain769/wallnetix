import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesSection from '@/components/services/ServicesSection';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl } from '@/lib/seo-config';
import { generateServiceListSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './services.module.css';

export const metadata: Metadata = generateMetadata({
    title: 'Services',
    description: 'AI Strategy, Business Automation, WhatsApp Integration, SEO, and more. Comprehensive automation solutions tailored for global enterprises to boost efficiency and growth.',
    keywords: ['AI strategy', 'business automation services', 'WhatsApp business bot', 'SEO services', 'enterprise solutions'],
    canonical: generateCanonicalUrl('/services'),
});


export default function ServicesPage() {
    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Services', url: generateCanonicalUrl('/services') },
    ];

    return (
        <>
            <StructuredData
                data={[
                    generateServiceListSchema(),
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <main className={styles.main}>
                <ServicesHero />
                <ServicesSection showTitle={false} />
            </main>
        </>
    );
}
