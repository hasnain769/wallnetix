import { Metadata } from 'next';
import PricingHero from '@/components/pricing/PricingHero';
import PricingSection from '@/components/pricing/PricingSection';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl } from '@/lib/seo-config';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
    title: 'Pricing & Packages',
    description: 'Transparent pricing for software development and AI marketing. Choose from LaunchPad, Retainers, or Custom Enterprise solutions.',
    keywords: ['software pricing', 'marketing packages', 'development retainer', 'SaaS pricing', 'AI marketing cost'],
    canonical: generateCanonicalUrl('/pricing'),
});

export default function Pricing() {
    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Pricing', url: generateCanonicalUrl('/pricing') },
    ];

    return (
        <>
            <StructuredData
                data={[
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <main>
                <PricingHero />
                <PricingSection />
            </main>
        </>
    );
}
