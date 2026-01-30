"use client";
import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Zap } from 'lucide-react';
import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const values = [
        {
            icon: Target,
            title: "Simplicity First",
            description: "We don't build complex software that takes months to learn. We build practical tools that solve daily headaches instantly."
        },
        {
            icon: Heart,
            title: "Local Focus",
            description: "Designed specifically for the Saudi market, understanding cultural nuances and local business needs."
        },
        {
            icon: Zap,
            title: "Future-Proof",
            description: " Leveraging cutting-edge AI to ensure your business stays ahead of the curve in a rapidly evolving digital landscape."
        }
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
                    <h2 className={styles.title}>Our Philosophy</h2>
                    <p className={styles.subtitle}>
                        We believe technology should empower, not complicate.
                    </p>
                </div>

                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                            style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
                        >
                            <div className={styles.iconWrapper}>
                                <value.icon size={32} className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{value.title}</h3>
                            <p className={styles.cardDescription}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
