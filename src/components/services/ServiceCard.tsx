"use client";
import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
        >
            <div className={styles.iconWrapper}>
                <Icon size={32} className={styles.icon} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.shine} />
        </div>
    );
}
