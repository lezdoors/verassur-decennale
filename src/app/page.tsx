import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Guarantees } from "@/components/sections/guarantees";
import { Metiers } from "@/components/sections/metiers";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <Guarantees />
      <Metiers />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
