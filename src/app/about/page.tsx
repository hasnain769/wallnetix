import { Metadata } from 'next';
import Button from '@/components/common/Button';
import AboutHero from '@/components/about/AboutHero';
import PhilosophySection from '@/components/about/PhilosophySection';
import VisionSection from '@/components/about/VisionSection';
import ResearchSection from '@/components/about/ResearchSection';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl } from '@/lib/seo-config';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
    title: 'About Us',
    description: 'Helping businesses thrive through digital transformation. Walnetix provides cutting-edge AI and automation solutions to transform enterprises worldwide.',
    keywords: ['business transformation', 'AI company', 'enterprise automation solutions'],
    canonical: generateCanonicalUrl('/about'),
});


export default function About() {
    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'About Us', url: generateCanonicalUrl('/about') },
    ];

    return (
        <>
            <StructuredData
                data={[
                    generateLocalBusinessSchema(),
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <main>
                <AboutHero />
                <PhilosophySection />
                <VisionSection />
                <ResearchSection />

                {/* CTA Section - keeping generic clean style matching others */}
                <section style={{
                    padding: '100px 20px',
                    textAlign: 'center',
                    background: 'white'
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '20px',
                            fontWeight: '800',
                            color: 'var(--color-text)'
                        }}>
                            Ready to modernize your business?
                        </h2>
                        <p style={{
                            marginBottom: '40px',
                            color: 'var(--color-text-light)',
                            fontSize: '1.2rem'
                        }}>
                            Join hundreds of business owners who are automating their way to growth.
                        </p>
                        <Button href="/contact" variant="primary">
                            Get Started Today
                        </Button>
                    </div>
                </section>
            </main>
        </>
    );
}
