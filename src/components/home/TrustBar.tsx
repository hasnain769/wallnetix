import { Building2, Stethoscope, ShoppingBag } from 'lucide-react';
import styles from './TrustBar.module.css';

export default function TrustBar() {
    const logos = [
        { icon: Stethoscope, name: 'Al-Amal Dental', type: 'Clinic' },
        { icon: Building2, name: 'Riyadh Estates', type: 'Real Estate' },
        { icon: ShoppingBag, name: 'Golden Oud', type: 'Retail' },
    ];

    return (
        <section className={styles.trustBar}>
            <div className={styles.container}>
                <p className={styles.label}>Trusted by growing businesses in KSA</p>
                <div className={styles.logos}>
                    {logos.map((logo) => (
                        <div key={logo.name} className={styles.logoItem}>
                            <logo.icon size={24} className={styles.icon} />
                            <div className={styles.logoText}>
                                <span className={styles.name}>{logo.name}</span>
                                <span className={styles.type}>{logo.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
