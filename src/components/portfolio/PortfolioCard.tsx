"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './PortfolioCard.module.css';

interface PortfolioCardProps {
    slug: string;
    title: string;
    date: string;
    description: string;
    imageSrc: string;
    tech?: string;
    index?: number;
}

export default function PortfolioCard({
    slug,
    title,
    date,
    description,
    imageSrc,
    tech,
    index = 0
}: PortfolioCardProps) {
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
            style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
        >
            <Link href={`/portfolio/${slug}`} className={styles.link}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                    <span className={styles.date}>{date}</span>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.viewProject}>
                        View Project
                        <ArrowRight size={16} className={styles.arrow} />
                    </div>
                </div>
            </Link>
        </div>
    );
}
