import { ParallaxSections } from "@/components/sections/parallax-sections";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQPremium } from "@/components/sections/faq-premium";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <ParallaxSections />
      <Testimonials />
      <FAQPremium />
      <FinalCTA />
    </>
  );
}
