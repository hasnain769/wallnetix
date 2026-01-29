import { LucideIcon } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Icon size={32} className={styles.icon} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
