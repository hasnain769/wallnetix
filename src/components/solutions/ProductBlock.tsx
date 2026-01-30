"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import styles from './ProductBlock.module.css';

interface ProductBlockProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean;
    index?: number;
}

export default function ProductBlock({
    title,
    description,
    imageSrc,
    imageAlt,
    reversed = false,
    index = 0
}: ProductBlockProps) {
    const [isVisible, setIsVisible] = useState(false);
    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={blockRef}
            className={`${styles.block} ${reversed ? styles.reversed : ''} ${isVisible ? styles.visible : ''}`}
            style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}
        >
            <div className={`${styles.content} ${isVisible ? styles.contentVisible : ''}`}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonWrapper}>
                    <Button href="/contact" variant="primary" icon>
                        Get Started
                    </Button>
                </div>
            </div>
            <div className={`${styles.visual} ${isVisible ? styles.visualVisible : ''}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
}
