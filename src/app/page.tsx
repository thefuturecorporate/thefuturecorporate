import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GrowthSection from "@/components/GrowthSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import RandomGallery from "@/components/RandomGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ClientsSection />
      <AboutSection />
      <GrowthSection />
      <TestimonialsSection />
      <RandomGallery
        count={4}
        title="Glimpses"
        subtitle="From training rooms to boardrooms — transforming businesses across India"
        className="bg-white border-t"
      />
      <CTASection />
    </>
  );
}
