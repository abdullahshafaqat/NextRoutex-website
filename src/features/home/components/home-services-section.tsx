"use client";

import Image from "next/image";
import { useState } from "react";
import leftDecor from "@/assets/services-decoration.png";
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



const LOGO_GREEN = "#187d76";

type ServiceKey = "consulting" | "marketing" | "banking";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
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

export function HomeServicesSection() {
  const [activeService, setActiveService] = useState<ServiceKey>("consulting");
  const featureItems = serviceFeatureMap[activeService];

  return (
    <section className="relative bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      <Image src={leftDecor} alt="" className="pointer-events-none absolute -left-1 -top-24 h-auto w-48" />

      <div className="site-container relative grid w-full grid-cols-1 gap-10 lg:grid-cols-[450px_1fr] lg:items-stretch lg:gap-10">
        <div className="relative h-full">
          <div className="absolute inset-x-4 -bottom-3 top-4 rounded-2xl bg-[#e7e7e7]" />
          <div className="relative flex h-full flex-col rounded-xl bg-white px-6 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <p className="text-2xl font-bold uppercase tracking-wider text-[#187d76]">WHAT WE DO</p>
            <h3 className="mt-4 text-[40px] font-semibold leading-[1.15] text-[#1a1f28]">
              Excellent service and
              support for you
            </h3>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={() => setActiveService("consulting")}
                className={`relative flex w-full items-center justify-between rounded-sm px-5 py-3 text-sm font-semibold transition-colors ${
                  activeService === "consulting"
                    ? "bg-[#191d29] text-white"
                    : "border border-[#d9dadd] bg-white text-[#333640]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center border ${
                      activeService === "consulting" ? "border-white/50" : "border-[#aeb4bf]"
                    }`}
                  >
                    <SquareDashed size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-[13px]">Consulting services</span>
                </div>
                <ChevronRight
                  size={16}
                  className={activeService === "consulting" ? "text-white/70" : "text-[#9499a5]"}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => setActiveService("marketing")}
                className={`relative flex w-full items-center justify-between rounded-sm px-5 py-3.5 text-[13px] font-medium transition-colors ${
                  activeService === "marketing"
                    ? "bg-[#191d29] text-white"
                    : "border border-[#d9dadd] bg-white text-[#333640]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Megaphone
                    size={17}
                    color={activeService === "marketing" ? "#ffffff" : LOGO_GREEN}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>Marketing services</span>
                </div>
                <ChevronRight
                  size={16}
                  className={activeService === "marketing" ? "text-white/70" : "text-[#9499a5]"}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => setActiveService("banking")}
                className={`relative flex w-full items-center justify-between rounded-sm px-5 py-3.5 text-[13px] font-medium transition-colors ${
                  activeService === "banking"
                    ? "bg-[#191d29] text-white"
                    : "border border-[#d9dadd] bg-white text-[#333640]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Landmark
                    size={17}
                    color={activeService === "banking" ? "#ffffff" : LOGO_GREEN}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>Banking services</span>
                </div>
                <ChevronRight
                  size={16}
                  className={activeService === "banking" ? "text-white/70" : "text-[#9499a5]"}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="grid h-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <Icon size={40} color={LOGO_GREEN} strokeWidth={1.5} aria-hidden={true} />
                <h4 className="mt-4 text-[18px] font-semibold text-[#181d28]">{item.title}</h4>
                <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-[#5f6573]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
