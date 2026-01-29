import ServicesSection from '@/components/services/ServicesSection';

export const metadata = {
    title: 'Services - Walnetix',
    description: 'AI Strategy, Automation, SEO, and more.',
};

export default function ServicesPage() {
    return (
        <main>
            <div style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: '80px 20px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--color-text)' }}>
                    Our Services
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    Transforming businesses with intelligent technology and strategic growth.
                </p>
            </div>
            <ServicesSection showTitle={false} />
        </main>
    );
}
