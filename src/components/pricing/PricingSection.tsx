"use client";
import { useState } from 'react';
import { developmentPackages, marketingPackages } from '@/data/pricing';
import PricingCard from './PricingCard';
import styles from './PricingSection.module.css';

type PricingType = 'development' | 'marketing';

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<PricingType>('development');

    const packages = activeTab === 'development' ? developmentPackages : marketingPackages;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Toggle Controls */}
                <div className={styles.toggleWrapper}>
                    <div className={styles.toggle}>
                        <button
                            className={`${styles.toggleBtn} ${activeTab === 'development' ? styles.active : ''}`}
                            onClick={() => setActiveTab('development')}
                        >
                            Development
                        </button>
                        <button
                            className={`${styles.toggleBtn} ${activeTab === 'marketing' ? styles.active : ''}`}
                            onClick={() => setActiveTab('marketing')}
                        >
                            Marketing
                        </button>
                    </div>
                </div>

                {/* Info Text */}
                <div className={styles.infoText}>
                    {activeTab === 'development'
                        ? "Build scalable software with our expert engineering teams."
                        : "Accelerate growth with AI-driven marketing and content strategies."
                    }
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {packages.map((pkg, index) => (
                        <PricingCard
                            key={pkg.id}
                            pkg={pkg}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
