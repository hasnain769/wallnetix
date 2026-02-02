"use client";
import { useEffect, useRef, useState } from 'react';
import { Microscope, BrainCircuit, Rocket } from 'lucide-react';
import styles from './ResearchSection.module.css';

export default function ResearchSection() {
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

    const projects = [
        {
            icon: Microscope,
            title: "R&D Labs",
            description: "Exploring next-gen LLM architectures optimized for multilingual logic and business context."
        },
        {
            icon: BrainCircuit,
            title: "Autonomous Agents",
            description: "Building self-correcting agent swarms capable of managing complex logistical workflows."
        },
        {
            icon: Rocket,
            title: "Innovation Hub",
            description: "Partnering with leading universities to foster AI talent and breakthrough technologies."
        }
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
                    <h2 className={styles.title}>Research & Innovation</h2>
                    <p className={styles.subtitle}>
                        Pushing the boundaries of what is possible with AI.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                            style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
                        >
                            <div className={styles.iconCircle}>
                                <project.icon size={28} />
                            </div>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDescription}>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
