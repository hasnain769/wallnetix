import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl, siteConfig } from '@/lib/seo-config';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import styles from './contact.module.css';

export const metadata: Metadata = generateMetadata({
    title: 'Contact Us',
    description: 'Get a free consultation to automate your business. Fill out our form and our team will show you how to streamline your operations with AI.',
    keywords: ['free consultation', 'business automation consultation', 'contact Walnetix'],
    canonical: generateCanonicalUrl('/contact'),
});

export default function Contact() {
    const breadcrumbs = [
        { name: 'Home', url: generateCanonicalUrl('/') },
        { name: 'Contact Us', url: generateCanonicalUrl('/contact') },
    ];

    // ContactPage schema
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Walnetix',
        description: 'Get a free consultation for business automation solutions',
        url: generateCanonicalUrl('/contact'),
        mainEntity: {
            '@type': 'Organization',
            name: 'Walnetix',
            url: siteConfig.url,
        },
    };

    return (
        <>
            <StructuredData
                data={[
                    contactPageSchema,
                    generateBreadcrumbSchema(breadcrumbs),
                ]}
            />
            <main className={styles.page}>
                <div className={styles.background}>
                    <div className={styles.shape1} />
                    <div className={styles.shape2} />
                    <div className={styles.shape3} />
                </div>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            Let's Talk About <br />
                            <span className={styles.highlight}>Your Business</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Ready to save time? Fill out the form below for a free consultation. We'll show you exactly how to automate your manual work.
                        </p>
                    </div>

                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>
                </div>
            </main>
        </>
    );
}
