"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './CaseStudiesHero.module.css';

export default function CaseStudiesHero() {
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
                <div className={styles.shapes}>
                    <div className={styles.shape1} />
                    <div className={styles.shape2} />
                    <div className={styles.shape3} />
                </div>
            </div>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>✨</span>
                    Success Stories
                </div>
                <h1 className={styles.title}>
                    Our <span className={styles.highlight}>Case Studies</span>
                </h1>
                <p className={styles.subtitle}>
                    Real results from global businesses powered by intelligent automation
                </p>
            </div>
        </div>
    );
}
