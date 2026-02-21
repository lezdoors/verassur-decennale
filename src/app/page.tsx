import { ParallaxSections } from "@/components/sections/parallax-sections";
import { TestimonialsGrid } from "@/components/sections/testimonials-grid";
import { FAQPremium } from "@/components/sections/faq-premium";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <ParallaxSections />
      <TestimonialsGrid />
      <FAQPremium />
      <FinalCTA />
    </>
  );
}
