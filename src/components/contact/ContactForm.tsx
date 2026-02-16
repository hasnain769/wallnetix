"use client";
import { useState } from 'react';
import Button from '../common/Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', message: '' });
            } else {
                throw new Error(data.error || 'Submission failed');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formStack}>
            {status === 'success' ? (
                <div className={styles.successMessage}>
                    <h3>Thank You!</h3>
                    <p>We've received your message and will get back to you shortly.</p>
                    <Button variant="secondary" onClick={() => setStatus('idle')}>Send Another</Button>
                </div>
            ) : (
                <>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Your full name"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="company" className={styles.label}>Company Name</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Your business name"
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="you@company.com"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="+966 ..."
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>How can we help?</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className={styles.textarea}
                            placeholder="Tell us about your business challenges..."
                        />
                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        className={styles.submitButton}
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>

                    {status === 'error' && (
                        <p className={styles.errorText}>Something went wrong. Please try again.</p>
                    )}
                </>
            )}
        </form>
    );
}
