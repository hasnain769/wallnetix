import SuccessCard from '@/components/case-studies/SuccessCard';

export const metadata = {
    title: 'Success Stories - Wallnetix',
    description: 'See how Saudi SMEs are growing with Wallnetix automation.',
};

export default function CaseStudies() {
    const cases = [
        {
            businessType: 'Local Dental Clinic',
            location: 'Riyadh',
            problem: 'Receptionist was overwhelmed with calls and missed 30% of new patient inquiries.',
            solution: 'Wallnetix installed a WhatsApp auto-booking agent.',
            result: 'Missed calls dropped to zero. Bookings increased by 40% in the first month.'
        },
        {
            businessType: 'Real Estate Broker',
            location: 'Dammam',
            problem: 'Lost track of potential buyers because leads were scattered across WhatsApp, SMS, and Excel.',
            solution: 'Implemented the Customer & Order Organizer to centralize all leads.',
            result: 'Follow-up time reduced by 50%. Closed 3 more deals in the first quarter.'
        },
        {
            businessType: 'Fashion Retailer',
            location: 'Jeddah',
            problem: 'Online stock on Salla didn\'t match in-store inventory, leading to cancelled orders.',
            solution: 'Deployed Inventory & Sales Sync to connect physical store POS with Salla.',
            result: 'Eliminated stock discrepancies. Online sales grew by 25% due to accurate availability.'
        }
    ];

    return (
        <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-text)' }}>
                    Success Stories
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                    Real results from Saudi businesses just like yours.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px'
            }}>
                {cases.map((study, index) => (
                    <SuccessCard key={index} {...study} />
                ))}
            </div>
        </main>
    );
}
