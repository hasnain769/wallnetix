"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '@/lib/portfolio';
import styles from './PortfolioDetail.module.css';

interface PortfolioDetailProps {
    item: PortfolioItem;
}

export default function PortfolioDetail({ item }: PortfolioDetailProps) {
    const [isVisible, setIsVisible] = useState(false);
    const detailRef = useRef<HTMLDivElement>(null);

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

        if (detailRef.current) {
            observer.observe(detailRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Parse overview (content after --- and before first ##, excluding the ## Overview line itself)
    const overviewMatch = item.content.match(/^([\s\S]*?)(?=\n## )/);
    let overview = overviewMatch ? overviewMatch[1].trim() : '';

    // If overview starts with "## Overview", extract content after it
    const overviewHeaderMatch = overview.match(/^##\s+Overview\s*\n([\s\S]*)/);
    if (overviewHeaderMatch) {
        overview = overviewHeaderMatch[1].trim();
    }

    // Parse tech stack items
    const techItems = item.tech
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim());

    // Parse features
    const featureItems = item.features
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim());

    // Parse links
    const linkItems = item.links
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => {
            const match = line.match(/\*\*(.+?)\*\*:\s*(?:\[(.+?)\]\((.+?)\)|(.+))/);
            if (match) {
                return {
                    label: match[1],
                    text: match[2] || match[4],
                    url: match[3] || null
                };
            }
            return null;
        })
        .filter(Boolean);

    return (
        <div ref={detailRef} className={styles.detail}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <Link href="/portfolio" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </Link>
            </div>

            {/* Hero Section */}
            <div className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.excerpt}>{item.excerpt}</p>
                    <span className={styles.date}>{item.date}</span>
                </div>

                {/* Image Gallery Showcase */}
                {item.gallery && item.gallery.length > 1 ? (
                    <div className={styles.gallery}>
                        <div className={styles.mainImage}>
                            <Image
                                src={item.gallery[0]}
                                alt={`${item.title} - Main View`}
                                width={1200}
                                height={700}
                                className={styles.image}
                                priority
                            />
                        </div>
                        <div className={styles.galleryGrid}>
                            {item.gallery.slice(1).map((img, idx) => (
                                <div key={idx} className={styles.galleryItem}>
                                    <Image
                                        src={img}
                                        alt={`${item.title} - View ${idx + 2}`}
                                        width={600}
                                        height={400}
                                        className={styles.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.heroImage}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={800}
                            height={500}
                            className={styles.image}
                            priority
                        />
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Overview */}
                {overview && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <div className={styles.textContent}>
                            {overview.split('\n\n').map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </section>
                )}

                {/* Tech Stack */}
                {techItems.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Tech Stack</h2>
                        <div className={styles.techGrid}>
                            {techItems.map((tech, idx) => {
                                const match = tech.match(/\*\*(.+?)\*\*:\s*(.+)/);
                                if (match) {
                                    return (
                                        <div key={idx} className={styles.techItem}>
                                            <strong>{match[1]}</strong>
                                            <span>{match[2]}</span>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </section>
                )}

                {/* Key Features */}
                {featureItems.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Key Features</h2>
                        <ul className={styles.featureList}>
                            {featureItems.map((feature, idx) => {
                                const match = feature.match(/\*\*(.+?)\*\*:\s*(.+)/);
                                if (match) {
                                    return (
                                        <li key={idx}>
                                            <strong>{match[1]}</strong>: {match[2]}
                                        </li>
                                    );
                                }
                                return <li key={idx}>{feature}</li>;
                            })}
                        </ul>
                    </section>
                )}

                {/* Links */}
                {linkItems.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Links</h2>
                        <div className={styles.linkList}>
                            {linkItems.map((link: any, idx) => (
                                <div key={idx} className={styles.linkItem}>
                                    <strong>{link.label}:</strong>{' '}
                                    {link.url ? (
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.externalLink}
                                        >
                                            {link.text}
                                            <ExternalLink size={14} />
                                        </a>
                                    ) : (
                                        <span>{link.text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
