import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Benefits from '@/components/home/Benefits';
import ServicesSection from '@/components/services/ServicesSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <Benefits />
    </main>
  );
}
