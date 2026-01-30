import ContactForm from '../contact/ContactForm';
import styles from './HomeContact.module.css';

export default function HomeContact() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>
                        Ready to <span className={styles.highlight}>Start?</span>
                    </h2>
                    <p className={styles.subheadline}>
                        Let's automate your business today. Fill out the form below for a free consultation.
                    </p>
                </div>

                <div className={styles.formContainer}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
