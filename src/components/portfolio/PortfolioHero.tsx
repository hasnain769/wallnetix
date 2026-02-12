"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './PortfolioHero.module.css';

export default function PortfolioHero() {
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
                    {/* <span className={styles.badgeIcon}>🚀</span> */}
                    Our Work
                </div>
                <h1 className={styles.title}>
                    Our <span className={styles.highlight}>Portfolio</span>
                </h1>
                <p className={styles.subtitle}>
                    Innovative solutions built with cutting-edge technology for modern businesses
                </p>
            </div>
        </div>
    );
}
