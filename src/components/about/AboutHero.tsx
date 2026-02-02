"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
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
                    Who We Are
                </div>
                <h1 className={styles.title}>
                    Helping Businesses <br />
                    <span className={styles.highlight}>Thrive in the Digital Age</span>
                </h1>
                <p className={styles.subtitle}>
                    We believe local businesses are the backbone of growth. We are Walnetix—the architects of intelligent automation for the modern era.
                </p>
            </div>
        </section>
    );
}
