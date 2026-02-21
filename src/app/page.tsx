import { ParallaxSections } from "@/components/sections/parallax-sections";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <ParallaxSections />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
