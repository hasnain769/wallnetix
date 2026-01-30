"use client";
import { Lightbulb, Cpu, Handshake, TrendingUp, Share2, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

export default function ServicesSection({ showTitle = true }: { showTitle?: boolean }) {
    const services = [
        {
            icon: Lightbulb,
            title: 'AI Strategy Consulting',
            description: 'We craft a tailored AI roadmap aligned with your business goals, ensuring strategic, scalable implementation.'
        },
        {
            icon: Cpu,
            title: 'Intelligent Automation Systems',
            description: 'We deploy advanced AI solutions to streamline workflows, reduce costs, and boost operational efficiency.'
        },
        {
            icon: Handshake,
            title: 'Ongoing Support',
            description: 'Receive continuous support and system refinement to keep your AI tools performing at their best.'
        },
        {
            icon: TrendingUp,
            title: 'SEO & Digital Marketing',
            description: 'Boost your online visibility and drive organic traffic with data-driven SEO strategies and targeted digital campaigns.'
        },
        {
            icon: Share2,
            title: 'Agentic Workflows Design',
            description: 'We design and implement intelligent workflows that adapt to your business needs, enhancing productivity and decision-making.'
        },
        {
            icon: BarChart3,
            title: 'Predictive Business Intelligence',
            description: 'Leverage AI to analyze data patterns and predict future trends, empowering informed decision-making.'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {showTitle && (
                    <div className={styles.header}>
                        <h2 className={styles.headline}>
                            Our <span className={styles.highlight}>Services</span>
                        </h2>
                        <p className={styles.subheadline}>Comprehensive AI and digital solutions to power your growth.</p>
                    </div>
                )}
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
