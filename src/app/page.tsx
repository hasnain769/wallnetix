import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';

const TrustBar = dynamic(() => import('@/components/home/TrustBar'), { ssr: true });
const Benefits = dynamic(() => import('@/components/home/Benefits'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/services/ServicesSection'), { ssr: true });
const HomeContact = dynamic(() => import('@/components/home/HomeContact'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/common/FAQSection'), { ssr: true });
import StructuredData from '@/components/seo/StructuredData';
import { generateMetadata, generateCanonicalUrl } from '@/lib/seo-config';
import { generateServiceListSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';
import { getAllFAQs } from '@/lib/faq-data';

import { siteContent } from '@/data/site-content';

export const metadata: Metadata = generateMetadata({
  title: siteContent.seo.defaultTitle,
  description: siteContent.seo.defaultDescription,
  keywords: siteContent.seo.keywords,
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

