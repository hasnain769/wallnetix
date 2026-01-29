import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/Logo.png"
                                alt="Wallnetix Logo"
                                width={120}
                                height={35}
                                style={{ height: 'auto', width: 'auto' }}
                            />
                            <span className={styles.brandName}>Wallnetix</span>
                        </div>
                        <p>Empowering Saudi SMEs with automation.</p>
                    </div>
                    <div className={styles.links}>
                        <Link href="/">Home</Link>
                        <Link href="/solutions">Solutions</Link>
                        <Link href="/case-studies">Case Studies</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>© {new Date().getFullYear()} Wallnetix. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
