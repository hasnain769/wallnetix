import { MessageSquare, Clock, Zap } from 'lucide-react';
import styles from './Benefits.module.css';

export default function Benefits() {
    const benefits = [
        {
            icon: MessageSquare,
            title: 'Instant Lead Capture',
            description: 'Never miss a customer again. Our 24/7 WhatsApp agent replies instantly to secure booking and orders.'
        },
        {
            icon: Clock,
            title: 'Zero Data Entry',
            description: 'Say goodbye to messy Excel sheets. Your orders, bookings, and customer data sync automatically.'
        },
        {
            icon: Zap,
            title: 'Revenue on Autopilot',
            description: 'Turn inquiries into confirmed sales while you sleep. Watch your business grow without the busy work.'
        },
    ];

    return (
        <section className={styles.benefits}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>Stop Wasting Time on Manual Tasks.</h2>
                    <p className={styles.subheadline}>Focus on growing your business, not admin work.</p>
                </div>
                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <benefit.icon size={32} className={styles.icon} />
                            </div>
                            <h3 className={styles.title}>{benefit.title}</h3>
                            <p className={styles.description}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
