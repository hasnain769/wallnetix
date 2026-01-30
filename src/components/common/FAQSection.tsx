'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    faqs: FAQ[];
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} aria-labelledby="faq-title">
            <div className={styles.container}>
                <h2 id="faq-title" className={styles.title}>{title}</h2>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <article
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown className={styles.icon} />
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={styles.answer}
                                role="region"
                                aria-hidden={openIndex !== index}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
