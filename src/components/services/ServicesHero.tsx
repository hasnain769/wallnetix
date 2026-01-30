"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
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
                <div className={styles.grid} />
                <div className={styles.gradientOverlay} />
            </div>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    What We Offer
                </div>
                <h1 className={styles.title}>
                    Our <span className={styles.highlight}>Services</span>
                </h1>
                <p className={styles.subtitle}>
                    Transforming businesses with intelligent technology and strategic growth
                </p>
            </div>
        </div>
    );
}
