import { HomeHero } from "@/features/home/components/home-hero";
import { HomeConsultingSection } from "@/features/home/components/home-consulting-section";
import { HomeInnovationSection } from "@/features/home/components/home-innovation-section";
import { HomeProcessSection } from "@/features/home/components/home-process-section";
import { HomeServicesSection } from "@/features/home/components/home-services-section";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeConsultingSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <HomeInnovationSection />
    </>
  );
}
