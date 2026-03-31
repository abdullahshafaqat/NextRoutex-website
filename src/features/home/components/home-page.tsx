import { HomeHero } from "@/features/home/components/home-hero";
import { HomeConsultingSection } from "@/features/home/components/home-consulting-section";
import { HomeCtaSection } from "@/features/home/components/home-cta-section";
import { HomeFooter } from "@/features/home/components/home-footer";
import { HomeInnovationSection } from "@/features/home/components/home-innovation-section";
import { HomePartnersSection } from "@/features/home/components/home-partners-section";
import { HomeProcessSection } from "@/features/home/components/home-process-section";
import { HomeProjectsSection } from "@/features/home/components/home-projects-section";
import { HomeServicesSection } from "@/features/home/components/home-services-section";
import { HomeTeamSection } from "@/features/home/components/home-team-section";
import { HomeTestimonialSection } from "@/features/home/components/home-testimonial-section";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeConsultingSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <HomeInnovationSection />
      <HomePartnersSection />
      <HomeTeamSection />
      <HomeProjectsSection />
      <HomeCtaSection />
      <HomeTestimonialSection />
      <HomeFooter />
    </>
  );
}
