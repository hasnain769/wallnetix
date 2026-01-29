import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
    title: 'Contact Us - Walnetix',
    description: 'Get a free consultation to automate your Saudi business.',
};

export default function Contact() {
    return (
        <main style={{
            padding: '60px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '600px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-text)' }}>
                    Let's Talk About Your Business
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                    Ready to save time? Fill out the form below for a free 15-minute consultation. We'll show you exactly how to automate your manual work.
                </p>
            </div>

            <div style={{ width: '100%', maxWidth: '500px' }}>
                <ContactForm />
            </div>
        </main>
    );
}
