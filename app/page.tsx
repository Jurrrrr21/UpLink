// import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Deliver } from '@/components/sections/Deliver';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { Pricing } from '@/components/sections/Pricing';
import { WhyThisWorks } from '@/components/sections/WhyThisWorks';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Deliver />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <WhyThisWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
