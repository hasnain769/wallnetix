"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './VisionSection.module.css';

export default function VisionSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                    <h2 className={styles.title}>Vision for the Future</h2>
                    <p className={styles.text}>
                        We envision a world where businesses operate autonomously, driven by intelligent agents that handle the mundane, allowing humans to focus on creativity and strategy.
                    </p>
                    <p className={styles.text}>
                        Our goal is to be the catalyst for this transformation in the Middle East, building the infrastructure for the next generation of AI-native enterprises.
                    </p>
                </div>
                <div className={`${styles.visual} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.blob1} />
                    <div className={styles.blob2} />
                    <div className={styles.glassCard}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>2030</span>
                            <span className={styles.statLabel}>Vision Alignment</span>
                        </div>
                        <div className={styles.divider} />
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Autonomous Ops</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
