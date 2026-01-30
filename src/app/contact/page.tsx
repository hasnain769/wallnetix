import ContactForm from '@/components/contact/ContactForm';
import styles from './contact.module.css';

export const metadata = {
    title: 'Contact Us - Walnetix',
    description: 'Get a free consultation to automate your Saudi business.',
};

export default function Contact() {
    return (
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
    );
}
