"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './PrivacyPolicyHero.module.css';

export default function PrivacyPolicyHero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section ref={heroRef} className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />
            </div>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.badge}>
                    Legal & Compliance
                </div>
                <h1 className={styles.title}>
                    Privacy <span className={styles.highlight}>Policy</span>
                </h1>
                <p className={styles.subtitle}>
                    How Walnetix collects, uses, and protects your personal information and data privacy rights.
                </p>
            </div>
        </section>
    );
}
