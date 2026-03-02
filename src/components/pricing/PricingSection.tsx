"use client";
import { useState } from 'react';
import { developmentPackages, marketingPackages, agencyPackages, agencyAddOns } from '@/data/pricing';
import PricingCard from './PricingCard';
import styles from './PricingSection.module.css';

type PricingType = 'agency' | 'development' | 'marketing';
type Currency = 'USD' | 'SAR';

const formatPriceStr = (str: string, currency: Currency) => {
    if (currency === 'USD') return str;

    // Replace all USD dollar amounts with SAR equivalent (1 USD = 3.75 SAR)
    return str.replace(/\$(\d+(?:,\d+)?)/g, (match, numStr) => {
        const num = parseInt(numStr.replace(/,/g, ''), 10);
        let sarValue = num * 3.75;

        // Premium rounding: round to nearest 50 for large numbers, nearest 10 for smaller
        if (sarValue >= 1000) {
            sarValue = Math.round(sarValue / 50) * 50;
        } else {
            sarValue = Math.round(sarValue / 10) * 10;
        }

        return `${sarValue.toLocaleString()} SAR`;
    }).replace('USD', 'SAR');
};

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<PricingType>('agency');
    const [currency, setCurrency] = useState<Currency>('USD');

    const packages = activeTab === 'agency'
        ? agencyPackages
        : activeTab === 'development'
            ? developmentPackages
            : marketingPackages;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header Controls: Currency and Package Tabs */}
                <div className={styles.controlsHeader}>
                    {/* Currency Toggle */}
                    <div className={styles.currencyToggle}>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'USD' ? styles.activeCurrency : ''}`}
                            onClick={() => setCurrency('USD')}
                        >
                            USD
                        </button>
                        <button
                            className={`${styles.currencyBtn} ${currency === 'SAR' ? styles.activeCurrency : ''}`}
                            onClick={() => setCurrency('SAR')}
                        >
                            SAR
                        </button>
                    </div>

                    {/* Package Type Toggle */}
                    <div className={styles.toggleWrapper}>
                        <div className={styles.toggle}>
                            <button
                                className={`${styles.toggleBtn} ${activeTab === 'agency' ? styles.active : ''}`}
                                onClick={() => setActiveTab('agency')}
                            >
                                Agency
                            </button>
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
                </div>

                {/* Info Text */}
                <div className={styles.infoText}>
                    {activeTab === 'agency'
                        ? "Comprehensive automation and marketing packages for local dominance."
                        : activeTab === 'development'
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
                            currency={currency}
                            formatPrice={formatPriceStr}
                        />
                    ))}
                </div>

                {/* Add-Ons Section */}
                {activeTab === 'agency' && (
                    <div className={styles.addOnsWrapper}>
                        <h3 className={styles.addOnsTitle}>Optional Add-Ons</h3>
                        <div className={styles.addOnsGrid}>
                            {agencyAddOns.map((addon, index) => (
                                <div key={index} className={styles.addOnCard}>
                                    <h4>{addon.title}</h4>
                                    <div className={styles.addOnPrice}>
                                        {formatPriceStr(addon.price, currency)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
