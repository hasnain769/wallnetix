import ProductBlock from '@/components/solutions/ProductBlock';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import styles from './solutions.module.css';

export const metadata = {
    title: 'Solutions - Walnetix',
    description: 'Practical tools for Saudi businesses: WhatsApp Booking, Customer Organization, and Inventory Sync.',
};

export default function Solutions() {
    const solutions = [
        {
            title: 'WhatsApp Booking Bot',
            description: 'Let customers book appointments or ask prices automatically on WhatsApp, even when you\'re asleep. Connects directly to your calendar so you never double-book.',
            imageSrc: '/images/hero.png',
            imageAlt: 'WhatsApp Booking Bot Interface',
        },
        {
            title: 'Customer & Order Organizer',
            description: 'Stop using messy Excel sheets. See all your customer info and orders in one clean, simple place. Know exactly who paid and who is pending.',
            imageSrc: '/images/dashboard.png',
            imageAlt: 'Customer Dashboard on iPad',
            reversed: true,
        },
        {
            title: 'Inventory & Sales Sync',
            description: 'For retailers: Automatically update your stock levels when a sale happens online or in-store. Integrates seamlessly with Salla and Zid.',
            imageSrc: '/images/inventory.png',
            imageAlt: 'Inventory Management on Laptop',
        },
    ];

    return (
        <main className={styles.main}>
            <SolutionsHero />
            <section className={styles.solutions}>
                {solutions.map((solution, index) => (
                    <ProductBlock key={index} {...solution} index={index} />
                ))}
            </section>
        </main>
    );
}
