import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Benefits from '@/components/home/Benefits';
import ServicesSection from '@/components/services/ServicesSection';
import HomeContact from '@/components/home/HomeContact';
import FAQSection from '@/components/common/FAQSection';
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl } from '@/lib/seo-config';
import { generateServiceListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';
import { getAllFAQs } from '@/lib/faq-data';

export const metadata: Metadata = generateMetadata({
  title: 'Walnetix - AI LABs for Saudi SMEs',
  description: 'Automate Your Busy Work. Grow Your Business. Leading software development company for Saudi SMEs building intelligent automation systems for bookings, inventory, and customer management.',
  keywords: ['business automation Saudi Arabia', 'AI automation Riyadh', 'WhatsApp booking bot', 'SME automation solutions'],
  canonical: generateCanonicalUrl('/'),
});

export default function Home() {
  const breadcrumbs = [
    { name: 'Home', url: generateCanonicalUrl('/') },
  ];

  const faqs = getAllFAQs();

  return (
    <>
      <StructuredData
        data={[
          generateServiceListSchema(),
          generateBreadcrumbSchema(breadcrumbs),
          generateFAQSchema(faqs),
        ]}
      />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <Benefits />
        <FAQSection faqs={faqs} />
        <HomeContact />
      </main>
    </>
  );
}

