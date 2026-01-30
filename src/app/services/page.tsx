import ServicesHero from '@/components/services/ServicesHero';
import ServicesSection from '@/components/services/ServicesSection';
import styles from './services.module.css';

export const metadata = {
    title: 'Services - Walnetix',
    description: 'AI Strategy, Automation, SEO, and more.',
};

export default function ServicesPage() {
    return (
        <main className={styles.main}>
            <ServicesHero />
            <ServicesSection showTitle={false} />
        </main>
    );
}
