"use client";
import { Check } from 'lucide-react';
import Button from '../common/Button';
import { PricingPackage } from '@/data/pricing';
import styles from './PricingCard.module.css';

interface PricingCardProps {
    pkg: PricingPackage;
    index: number;
}

export default function PricingCard({ pkg, index }: PricingCardProps) {
    return (
        <div
            className={`${styles.card} ${pkg.highlight ? styles.highlight : ''}`}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
        >
            {pkg.highlight && <div className={styles.badge}>Most Popular</div>}

            <div className={styles.header}>
                <h3 className={styles.title}>{pkg.title}</h3>
                <p className={styles.subtitle}>{pkg.subtitle}</p>
            </div>

            <div className={styles.priceContainer}>
                <div className={styles.price}>{pkg.price}</div>
                {pkg.period && <div className={styles.period}>{pkg.period}</div>}
            </div>

            <p className={styles.description}>{pkg.description}</p>

            <div className={styles.features}>
                {pkg.features.map((feature, i) => (
                    <div key={i} className={styles.featureItem}>
                        <Check size={18} className={styles.checkIcon} />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <Button
                    href={pkg.ctaLink}
                    variant={pkg.highlight ? 'primary' : 'outline'}
                    fullWidth
                    className={styles.ctaButton}
                >
                    {pkg.ctaText}
                </Button>
            </div>
        </div>
    );
}
