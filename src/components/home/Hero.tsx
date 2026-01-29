import Image from 'next/image';
import Button from '../common/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        More Sales. Less Admin. <br />
                        <span className={styles.highlight}>24/7.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        The leading software development company for Saudi SMEs. We build intelligent systems to handle bookings, inventory, and customer chats automatically.
                    </p>
                    <div className={styles.actions}>
                        <Button href="/contact" variant="primary" icon>
                            Get a Free Consultation
                        </Button>
                        <Button href="/solutions" variant="brand-green">
                            See How It Works
                        </Button>
                    </div>
                    <p className={styles.trustText}>
                        Trusted by growing businesses across Riyadh, Jeddah, and Dammam.
                    </p>
                </div>
                <div className={styles.visual}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/hero_v4.png"
                            alt="Wallnetix Automation in a Medical Clinic"
                            width={600}
                            height={600}
                            priority
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
