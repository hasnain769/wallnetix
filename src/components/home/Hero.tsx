"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import styles from './Hero.module.css';
import { siteContent } from '@/data/site-content';

export default function Hero() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasTriggered = useRef(false);

    // Mark as mounted after hydration
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Detect screen size - only after mount to avoid hydration mismatch
    useEffect(() => {
        if (!hasMounted) return;

        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [hasMounted]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!heroRef.current) return;
            const heroRect = heroRef.current.getBoundingClientRect();

            // Check if hero is visible
            const heroAtTop = heroRect.top > -100 && heroRect.top < 100;

            if (heroAtTop) {
                // Scrolling DOWN - trigger animation
                if (e.deltaY > 0 && !hasTriggered.current && !videoEnded) {
                    e.preventDefault();
                    hasTriggered.current = true;
                    setIsAnimating(true);

                    // Start video
                    if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                    }

                    // Unlock scroll after 1 second (when video is fully expanded)
                    // On small screens, unlock faster since there's no expansion animation
                    setTimeout(() => {
                        setVideoEnded(true);
                    }, isLargeScreen ? 1000 : 500);
                }

                // Block scroll during initial animation
                if (isAnimating && !videoEnded) {
                    e.preventDefault();
                }
            }

            // Scrolling UP when back at hero - reverse animation
            if (e.deltaY < 0 && heroAtTop && videoEnded) {
                setIsAnimating(false);
                setVideoEnded(false);
                hasTriggered.current = false;
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [isAnimating, videoEnded, isLargeScreen]);

    // Touch event handling for mobile
    useEffect(() => {
        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!heroRef.current) return;
            const heroRect = heroRef.current.getBoundingClientRect();
            const heroAtTop = heroRect.top > -100 && heroRect.top < 100;

            const touchCurrentY = e.touches[0].clientY;
            const deltaY = touchStartY - touchCurrentY; // Positive = scrolling down

            if (heroAtTop && deltaY > 30 && !hasTriggered.current && !videoEnded) {
                hasTriggered.current = true;
                setIsAnimating(true);

                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(() => {
                        // Autoplay blocked - still show animation
                    });
                }

                setTimeout(() => {
                    setVideoEnded(true);
                }, isLargeScreen ? 1000 : 500);
            }

            // Scrolling UP - reverse
            if (heroAtTop && deltaY < -30 && videoEnded) {
                setIsAnimating(false);
                setVideoEnded(false);
                hasTriggered.current = false;
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isAnimating, videoEnded, isLargeScreen]);

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    // On large screens: apply full animation (text hides, video expands)
    // On small/medium screens: only show video, no layout changes
    const shouldHideContent = isAnimating && isLargeScreen;
    const shouldExpandMedia = isAnimating && isLargeScreen;

    return (
        <section ref={heroRef} className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.shape1} />
                <div className={styles.shape2} />
                <div className={styles.shape3} />
            </div>
            <div className={styles.heroInner}>
                {/* Text content - only hides on large screens */}
                <div className={`${styles.content} ${shouldHideContent ? styles.contentHidden : ''}`}>
                    <h1 className={styles.headline}>
                        {siteContent.hero.headline} <br />
                        <span className={styles.highlight}>{siteContent.hero.highlight}</span>
                    </h1>
                    <p className={styles.subheadline}>
                        {siteContent.hero.subheadline}
                    </p>
                    <div className={styles.actions}>
                        <Button href="/contact" variant="primary" icon>
                            {siteContent.global.consultationCta}
                        </Button>
                        <Button href="/solutions" variant="brand-green">
                            {siteContent.global.worksCta}
                        </Button>
                    </div>
                    <p className={styles.trustText}>
                        {siteContent.global.trustText}
                    </p>
                </div>

                {/* Media container - only expands on large screens */}
                <div className={`${styles.mediaContainer} ${shouldExpandMedia ? styles.mediaExpanded : ''}`}>
                    {/* Static Image - hides when video plays on any screen */}
                    <Image
                        src="/images/hero_v4.jpg"
                        alt="Walnetix Automation"
                        fill
                        priority
                        className={`${styles.heroImage} ${isAnimating ? styles.hidden : ''}`}
                    />

                    {/* Video - shows when animating on any screen */}
                    <video
                        ref={videoRef}
                        src="hero-video.mp4"
                        muted
                        playsInline
                        preload="auto"
                        onEnded={handleVideoEnded}
                        className={`${styles.heroVideo} ${isAnimating ? styles.visible : ''}`}
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            {!isAnimating && (
                <div className={styles.scrollIndicator}>
                    <span>Scroll to explore</span>
                    <div className={styles.scrollArrow}>↓</div>
                </div>
            )}
        </section>
    );
}
