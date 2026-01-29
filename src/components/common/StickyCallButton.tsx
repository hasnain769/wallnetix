import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './StickyCallButton.module.css';

export default function StickyCallButton() {
    return (
        <div className={styles.container}>
            <Link href="tel:+966500000000" className={`${styles.button} ${styles.call}`}>
                <Phone size={20} />
                <span>Call Us</span>
            </Link>
            <Link href="https://wa.me/966500000000" className={`${styles.button} ${styles.whatsapp}`}>
                <MessageCircle size={20} />
                <span>WhatsApp</span>
            </Link>
        </div>
    );
}
