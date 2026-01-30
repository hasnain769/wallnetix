"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CaseStudyCard.module.css';

interface CaseStudyCardProps {
    slug: string;
    title: string;
    date: string;
    description: string;
    imageSrc: string;
    index?: number;
}

export default function CaseStudyCard({
    slug,
    title,
    date,
    description,
    imageSrc,
    index = 0
}: CaseStudyCardProps) {
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
            <Link href={`/case-studies/${slug}`} className={styles.link}>
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
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.date}>{date}</span>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.readMore}>
                        Read More
                        <ArrowRight size={16} className={styles.arrow} />
                    </div>
                </div>
            </Link>
        </div>
    );
}
