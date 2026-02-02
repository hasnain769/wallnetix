import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { siteContent } from '@/data/site-content';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/Logo.png"
                                alt="Walnetix Logo"
                                width={230}
                                height={135}
                                style={{ height: 'auto', width: 'auto' }}
                            />
                            {/* <span className={styles.brandName}>Walnetix</span> */}
                        </div>
                        <p>{siteContent.global.tagline}</p>
                    </div>
                    <div className={styles.links}>
                        <Link href="/">Home</Link>
                        <Link href="/solutions">Solutions</Link>
                        <Link href="/case-studies">Case Studies</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} Walnetix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
