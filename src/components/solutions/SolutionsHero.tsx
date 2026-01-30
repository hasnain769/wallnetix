"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './SolutionsHero.module.css';

export default function SolutionsHero() {
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
                <span className={styles.eyebrow}>Our Solutions</span>
                <h1 className={styles.title}>
                    <span className={styles.word}>Practical</span>{' '}
                    <span className={styles.word}>Solutions</span>{' '}
                    <span className={styles.word}>for</span>{' '}
                    <span className={styles.wordHighlight}>Local</span>{' '}
                    <span className={styles.wordHighlight}>Businesses</span>
                </h1>
                <p className={styles.subtitle}>
                    Streamline your operations with intelligent automation designed for Saudi SMEs
                </p>
            </div>
        </div>
    );
}
