import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoTicker from '@/components/LogoTicker';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-cyan-500/30">
      <Preloader />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
