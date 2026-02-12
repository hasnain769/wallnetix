import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import styles from './Footer.module.css';
import { siteContent } from '@/data/site-content';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: Brand */}
                    <div className={styles.col}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/Logo.png"
                                alt="Walnetix Logo"
                                width={180}
                                height={105}
                                style={{ height: 'auto', width: 'auto' }}
                            />
                        </div>
                        <p className={styles.tagline}>{siteContent.global.tagline}</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.col}>
                        <h3 className={styles.heading}>Company</h3>
                        <div className={styles.links}>
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/solutions">Solutions</Link>
                            <Link href="/case-studies">Case Studies</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className={styles.col}>
                        <h3 className={styles.heading}>Contact</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <MapPin size={18} className={styles.icon} />
                                <span>
                                    AN nasr road, Al masani district<br />
                                    Riyadh 14714, Saudi Arabia
                                </span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={18} className={styles.icon} />
                                <a href="tel:+966558736888">+966 55 873 6888</a>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={18} className={styles.icon} />
                                <a href="mailto:Contact@walnetix.com">Contact@walnetix.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Socials */}
                    <div className={styles.col}>
                        <h3 className={styles.heading}>Connect</h3>
                        <div className={styles.socials}>
                            <a href="https://www.linkedin.com/company/walnetix/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/walnetix?igsh=Nzc0cHJobjBwZHVl&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/Walnetix/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            {/* TikTok Icon (SVG) usually not in Lucide default set, using a generic video icon or svg if needed, but for now assuming user wants these specific links. I'll use a link wrapper. */}
                            <a href="https://www.tiktok.com/@walnetix?_r=1&_t=ZN-93YkAgEfeyM" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                            <a href="https://wa.me/966558736888" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Walnetix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
