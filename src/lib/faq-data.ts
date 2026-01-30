/**
 * FAQ Data for Answer Engine Optimization (AEO)
 * Structured Q&A content that helps AI models provide accurate answers
 * about Walnetix services to users querying LLMs and search engines.
 */

export interface FAQ {
    question: string;
    answer: string;
    category?: string;
}

export const faqs: FAQ[] = [
    // Services & Offerings
    {
        question: 'What services does Walnetix provide for Saudi businesses?',
        answer: 'Walnetix provides AI-powered automation solutions for Saudi SMEs including WhatsApp booking bots that handle customer appointments 24/7, customer and order management systems to replace messy spreadsheets, and inventory sync tools that integrate with Salla and Zid e-commerce platforms. We also offer AI strategy consulting, workflow automation, and SEO services tailored for the Saudi market.',
        category: 'services',
    },
    {
        question: 'How does the WhatsApp booking automation work?',
        answer: 'Our WhatsApp Booking Bot automatically handles customer inquiries and appointment bookings through WhatsApp. When a customer messages your business, the bot can answer common questions about pricing and services, check your calendar availability in real-time, book appointments without double-booking, and send confirmation messages. It works 24/7, even when you\'re sleeping, connecting directly to your calendar system.',
        category: 'solutions',
    },
    {
        question: 'What e-commerce platforms does Walnetix integrate with?',
        answer: 'Walnetix integrates seamlessly with popular Saudi e-commerce platforms including Salla and Zid. Our Inventory & Sales Sync solution automatically updates stock levels when sales happen online or in-store, preventing overselling and keeping all your channels in sync.',
        category: 'solutions',
    },
    // Pricing & Getting Started
    {
        question: 'How much does business automation cost in Saudi Arabia?',
        answer: 'Walnetix offers customized automation solutions with pricing based on your specific business needs. We provide free consultations to understand your requirements and show you exactly how automation can save you time and money. Contact us through our website to schedule a free consultation and get a personalized quote.',
        category: 'pricing',
    },
    {
        question: 'How do I get started with Walnetix?',
        answer: 'Getting started is easy: Fill out our contact form for a free consultation. Our team will analyze your current workflows, identify automation opportunities, and show you exactly how to eliminate manual work. There\'s no obligation, and you\'ll get a clear understanding of how we can help your Saudi business grow.',
        category: 'getting-started',
    },
    // Location & Target Market
    {
        question: 'Does Walnetix serve businesses in Riyadh, Jeddah, and Dammam?',
        answer: 'Yes! Walnetix serves SMEs across Saudi Arabia, with a strong presence in Riyadh, Jeddah, and Dammam. Our cloud-based solutions work for businesses anywhere in the Kingdom, and we\'re committed to helping Saudi businesses thrive under Vision 2030.',
        category: 'location',
    },
    {
        question: 'Why should Saudi SMEs choose Walnetix for automation?',
        answer: 'Walnetix is specifically designed for Saudi SMEs, understanding local business challenges and Vision 2030 goals. We offer Arabic and English support, integrate with local platforms like Salla and Zid, and provide solutions that work with Saudi business practices. Our team has deep experience helping businesses in Riyadh, Jeddah, and Dammam automate their operations.',
        category: 'about',
    },
    // Technical Questions
    {
        question: 'Is my business data secure with Walnetix?',
        answer: 'Yes, data security is our priority. We use industry-standard encryption, secure cloud infrastructure, and follow best practices for data protection. Your customer information and business data are protected with the same level of security used by major enterprises.',
        category: 'security',
    },
];

export function getFAQsByCategory(category: string): FAQ[] {
    return faqs.filter(faq => faq.category === category);
}

export function getAllFAQs(): FAQ[] {
    return faqs;
}
