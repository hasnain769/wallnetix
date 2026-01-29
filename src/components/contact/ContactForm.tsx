"use client";
import React, { useState } from 'react';
import Button from '../common/Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        phone: '',
        automationGoal: 'Customer Service'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.successMessage}>
                <h3>Thank you!</h3>
                <p>We've received your request. One of our automation experts will contact you shortly via WhatsApp.</p>
                <Button onClick={() => setSubmitted(false)} variant="secondary" className={styles.resetBtn}>
                    Send another request
                </Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Abdullah Al-Saud"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="businessName">Business Name</label>
                <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Al-Amal Clinic"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="phone">Phone Number (WhatsApp)</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 050 123 4567"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="automationGoal">What do you want to automate?</label>
                <select
                    id="automationGoal"
                    name="automationGoal"
                    value={formData.automationGoal}
                    onChange={handleChange}
                >
                    <option value="Customer Service">Customer Service (Auto-Replies)</option>
                    <option value="Bookings">Bookings & Appointments</option>
                    <option value="Data Organization">Data Organization</option>
                    <option value="Inventory">Inventory Sync</option>
                </select>
            </div>

            <Button type="submit" variant="primary" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
            </Button>
        </form>
    );
}
