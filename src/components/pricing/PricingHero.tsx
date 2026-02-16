"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './PricingHero.module.css';

export default function PricingHero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={heroRef} className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradientOrb1} />
                <div className={styles.gradientOrb2} />
            </div>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <span className={styles.eyebrow}>Transparent Pricing</span>
                <h1 className={styles.title}>
                    <span className={styles.word}>Invest</span>{' '}
                    <span className={styles.word}>in</span>{' '}
                    <span className={styles.wordHighlight}>Your</span>{' '}
                    <span className={styles.wordHighlight}>Growth</span>
                </h1>
                <p className={styles.subtitle}>
                    Clear, scalable packages for development and marketing. <br />
                    Choose the plan that fits your business stage.
                </p>
            </div>
        </div>
    );
}
