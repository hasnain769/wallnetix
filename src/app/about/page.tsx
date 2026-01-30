import Button from '@/components/common/Button';
import AboutHero from '@/components/about/AboutHero';
import PhilosophySection from '@/components/about/PhilosophySection';
import VisionSection from '@/components/about/VisionSection';
import ResearchSection from '@/components/about/ResearchSection';

export const metadata = {
    title: 'About Us - Walnetix',
    description: 'Helping Saudi SMEs Thrive in Vision 2030.',
};

export default function About() {
    return (
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
                        Join hundreds of Saudi business owners who are automating their way to growth.
                    </p>
                    <Button href="/contact" variant="primary">
                        Get Started Today
                    </Button>
                </div>
            </section>
        </main>
    );
}
