"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  Briefcase,
  BriefcaseBusiness,
  ChevronRight,
  HandCoins,
  Landmark,
  Megaphone,
  Network,
  PiggyBank,
  SquareDashed,
  Store,
} from "lucide-react";

import leftDecor from "@/assets/services-decoration.png";
import services1 from "@/assets/services1.jpg";
import services2 from "@/assets/services2.jpg";
import services3 from "@/assets/services3.jpg";
import testimonialImage from "@/assets/team-member-1.webp";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeFooter } from "@/features/home/components/home-footer";

import { ServicesHero } from "./services-hero";

const LOGO_GREEN = "#187d76";

type ServiceKey = "consulting" | "marketing" | "banking";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
};

const featureCopy =
  "Prevailed always tolerably discourse and loser assurance creatively coin applauded more uncommonly. Him everything trouble settled. Lead supported projection and strategic planning through focused market insight and dependable advisory execution.";

const serviceFeatureMap: Record<ServiceKey, FeatureItem[]> = {
  consulting: [
    { title: "Investment Planning", description: featureCopy, icon: HandCoins },
    { title: "Markets Research", description: featureCopy, icon: BarChart3 },
    { title: "Consultancy & Advice", description: featureCopy, icon: Network },
    { title: "Business Planning", description: featureCopy, icon: BriefcaseBusiness },
  ],
  marketing: [
    { title: "Strategy & Planning", description: featureCopy, icon: Briefcase },
    { title: "Online Business", description: featureCopy, icon: Store },
    { title: "Saving & Investments", description: featureCopy, icon: PiggyBank },
    { title: "Markets Research", description: featureCopy, icon: BarChart3 },
  ],
  banking: [
    { title: "Financial Services", description: featureCopy, icon: Landmark },
    { title: "Corporate Banking", description: featureCopy, icon: BriefcaseBusiness },
    { title: "Treasury Management", description: featureCopy, icon: HandCoins },
    { title: "Risk Assessment", description: featureCopy, icon: BarChart3 },
  ],
};

function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceKey>("consulting");
  const featureItems = serviceFeatureMap[activeService];

  return (
    <section className="relative bg-[#f9f9f9] py-16 sm:py-20 lg:py-24">
      <div className="site-container relative">
        <div className="text-center">
          <p className="text-xl font-bold uppercase tracking-wide text-[#0d7377]">
            WHAT WE DO
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#1a1d29] sm:text-4xl lg:text-[42px]">
            Services We&apos;re offering
          </h2>
          <span className="mx-auto mt-4 block h-0.5 w-12 bg-[#0d7377]" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={services1}
                alt="Commercial Funds"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#0d7377] to-[#0a5c5e] px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Commercial Funds</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-gray-600">
                Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.
              </p>
              <a href="#" className="group/link mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#0d7377] transition-colors hover:text-[#0a5c5e]">
                READ MORE
                <span className="h-0.5 w-12 bg-[#0d7377] transition-all duration-300 group-hover/link:w-16 group-hover/link:bg-[#0a5c5e]" />
              </a>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={services2}
                alt="Markets Research"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#0d7377] to-[#0a5c5e] px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3v18h18" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Markets Research</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-gray-600">
                Technic indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.
              </p>
              <a href="#" className="group/link mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#0d7377] transition-colors hover:text-[#0a5c5e]">
                READ MORE
                <span className="h-0.5 w-12 bg-[#0d7377] transition-all duration-300 group-hover/link:w-16 group-hover/link:bg-[#0a5c5e]" />
              </a>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={services3}
                alt="Saving & Investments"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#0d7377] to-[#0a5c5e] px-5 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Saving & Investments</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-gray-600">
                Librarian indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.
              </p>
              <a href="#" className="group/link mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#0d7377] transition-colors hover:text-[#0a5c5e]">
                READ MORE
                <span className="h-0.5 w-12 bg-[#0d7377] transition-all duration-300 group-hover/link:w-16 group-hover/link:bg-[#0a5c5e]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#0d7377]" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80">
                <Image
                  src={testimonialImage}
                  alt="Testimonial"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-2 top-8">
                <svg className="h-12 w-12 text-[#0d7377]" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M45 10 L50 15 L45 20" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M40 5 L48 8 L42 12" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-[#0d7377] text-[#0d7377]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              The best service ever
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              &ldquo;Targeting consultation discover apartments. Indulgence off
              under folly death wrote cause her way spite. Plan upon yet way
              get cold spot its week. Almost do am or limits hearts. Resolve
              parties but why she shewing. She sang know now always
              remembering to the point.&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-6">
              <svg className="h-10 w-10 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <p className="font-bold text-[#1a1a2e]">Matthew J. Wyman</p>
                <p className="text-sm text-gray-500">Senior Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <ServicesHero />
      <ServicesSection />
      <TestimonialSection />
      <HomeFooter />
    </>
  );
}
