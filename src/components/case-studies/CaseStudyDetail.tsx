"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowLeft, Play } from 'lucide-react';
import { CaseStudy } from '@/lib/caseStudies'; // Import from lib
import styles from './CaseStudyDetail.module.css';

interface CaseStudyDetailProps {
    study: CaseStudy;
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [demoVisible, setDemoVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const demoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        const demoObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDemoVisible(true);
                    demoObserver.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (demoRef.current) {
            demoObserver.observe(demoRef.current);
        }

        return () => demoObserver.disconnect();
    }, []);

    return (
        <main className={styles.main}>
            {/* Load external script if present */}
            {study.scriptSrc && (
                <Script
                    src={study.scriptSrc}
                    strategy="lazyOnload"
                />
            )}

            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroBackground}>
                    {/* Fallback image if null, though our parser returns empty string if missing */}
                    {study.image && (
                        <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className={styles.heroImage}
                            priority
                        />
                    )}
                    <div className={styles.heroOverlay} />
                </div>

                <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
                    <Link href="/case-studies" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        Back to Case Studies
                    </Link>
                    <span className={styles.date}>{study.date}</span>
                    <h1 className={styles.title}>{study.title}</h1>
                    <p className={styles.description}>{study.excerpt}</p>
                </div>
            </div>

            {/* Content Section */}
            <div ref={contentRef} className={styles.content}>
                <div className={styles.container}>
                    {/* Overview (using excerpt or first paragraph if we had it, but challenge covers it mostly) */}

                    {/* Challenge */}
                    {study.challenge && (
                        <section className={`${styles.section} ${isVisible ? styles.sectionVisible : ''}`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
                            <h2 className={styles.sectionTitle}>The Challenge</h2>
                            <div className={styles.challengeBox}>
                                <p className={styles.text}>{study.challenge}</p>
                            </div>
                        </section>
                    )}

                    {/* Solution */}
                    {study.solution && (
                        <section className={`${styles.section} ${isVisible ? styles.sectionVisible : ''}`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
                            <h2 className={styles.sectionTitle}>Our Solution</h2>
                            <p className={styles.text}>{study.solution}</p>
                        </section>
                    )}

                    {/* Results */}
                    {study.results && (
                        <section className={`${styles.section} ${isVisible ? styles.sectionVisible : ''}`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
                            <h2 className={styles.sectionTitle}>Results</h2>
                            <div className={styles.resultsBox}>
                                <p className={styles.text}>{study.results}</p>
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Demo Section */}
            {study.demoContent && (
                <div ref={demoRef} className={`${styles.demoSection} ${demoVisible ? styles.demoVisible : ''}`}>
                    <div className={styles.container}>
                        <h2 className={styles.demoTitle}>
                            <Play size={28} className={styles.playIcon} />
                            See It In Action
                        </h2>

                        <div className={styles.demoWrapper}>
                            {/* Render Raw HTML for Demo (IFrames, custom widgets) */}
                            <div
                                className={styles.demoContent}
                                dangerouslySetInnerHTML={{ __html: study.demoContent }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className={styles.cta}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
                    <p className={styles.ctaText}>Get similar results for your company with our intelligent automation solutions.</p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Get Started Today
                    </Link>
                </div>
            </div>
        </main>
    );
}
