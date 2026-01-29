import Image from 'next/image';
import Button from '@/components/common/Button';

export const metadata = {
    title: 'About Us - Walnetix',
    description: 'Helping Saudi SMEs Thrive in Vision 2030.',
};

export default function About() {
    return (
        <main style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <section style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '24px', color: 'var(--color-text)' }}>
                    Helping Saudi SMEs Thrive
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                    Vision 2030 is about growing the private sector. We believe local businesses are the backbone of that growth.
                </p>
            </section>

            <section style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '60px',
                alignItems: 'center',
                marginBottom: '80px'
            }}>

                {/* We could add an image here later if needed */}

                <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                    <p style={{ marginBottom: '24px' }}>
                        Running a business is hard. Between managing customers, tracking orders, and handling finances, there’s barely any time left to actually grow.
                    </p>
                    <p style={{ marginBottom: '24px' }}>
                        <strong>Walnetix exists to change that.</strong>
                    </p>
                    <p style={{ marginBottom: '24px' }}>
                        We bring powerful, easy-to-use technology to local clinics, retailers, and service providers. Our mission is to handle the busy work—like answering missed calls or updating inventory—so you can focus on what you do best.
                    </p>
                    <p>
                        We don't build complex software that takes months to learn. We build practical tools that solve daily headaches instantly.
                    </p>
                </div>
            </section>

            <section style={{
                backgroundColor: 'var(--color-bg-secondary)',
                padding: '60px',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to modernize your business?</h2>
                <p style={{ marginBottom: '32px', color: 'var(--color-text-light)' }}>
                    Join hundreds of Saudi business owners who are automating their way to growth.
                </p>
                <Button href="/contact" variant="primary">
                    Get Started Today
                </Button>
            </section>
        </main>
    );
}
