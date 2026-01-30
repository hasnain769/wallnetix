import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Benefits from '@/components/home/Benefits';
import ServicesSection from '@/components/services/ServicesSection';
import HomeContact from '@/components/home/HomeContact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <Benefits />
      <HomeContact />
    </main>
  );
}
