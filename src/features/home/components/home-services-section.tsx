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

import leftDecor from "@/assets/10.webp";

const LOGO_GREEN = "#187d76";

type ServiceKey = "consulting" | "marketing" | "banking";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
};

const featureCopy =
  "Prevailed always tolerably discourse and loser assurance creatively coin applauded more uncommonly. Him everything trouble";

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
    <section className="relative overflow-hidden border-t border-[#ececec] bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      <Image src={leftDecor} alt="" className="pointer-events-none absolute -left-1 top-0 h-auto w-64" />

      <div className="pointer-events-none absolute -right-2 top-6 opacity-55">
        <svg width="500" height="290" viewBox="0 0 500 290" fill="none" aria-hidden="true">
          <path d="M60 18C165 18 168 84 272 84H500" stroke="#c9cbe0" strokeWidth="1" />
          <path d="M40 44C145 44 148 110 252 110H500" stroke="#c9cbe0" strokeWidth="1" />
          <path d="M22 70C127 70 130 136 234 136H500" stroke="#c9cbe0" strokeWidth="1" />
          <path d="M10 96C115 96 118 162 222 162H500" stroke="#c9cbe0" strokeWidth="1" />
          <path d="M4 122C109 122 112 188 216 188H500" stroke="#c9cbe0" strokeWidth="1" />
          <path d="M2 148C107 148 110 214 214 214H500" stroke="#c9cbe0" strokeWidth="1" />
          <path d="M0 174C105 174 108 240 212 240H500" stroke="#c9cbe0" strokeWidth="1" />
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 bg-[#f10606] [clip-path:polygon(100%_0,0_100%,100%_100%)]" />

      <div className="relative mx-auto grid w-full max-w-270 grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[380px_1fr] lg:items-start lg:gap-14 lg:px-3">
        <div className="relative">
          <div className="absolute inset-x-4 -bottom-3 top-4 bg-[#e7e7e7]" />
          <div className="relative bg-white px-6 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#3f58db]">WHAT WE DO</p>
            <h3 className="mt-4 text-[40px] font-semibold leading-[1.15] text-[#1a1f28]">
              Excellent service and
              <br />
              support for you
            </h3>

            <div className="mt-6 space-y-3">
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
                <span
                  className={`pointer-events-none absolute bottom-0 left-18 h-0 w-0 border-b-10 border-l-7 border-r-7 border-b-[#f10606] border-l-transparent border-r-transparent transition-all duration-300 ${
                    activeService === "consulting" ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute bottom-0 left-23 h-0 w-0 border-b-12 border-l-8 border-r-8 border-b-[#2f3440] border-l-transparent border-r-transparent transition-all delay-75 duration-300 ${
                    activeService === "consulting" ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
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
                <span
                  className={`pointer-events-none absolute bottom-0 left-18 h-0 w-0 border-b-10 border-l-7 border-r-7 border-b-[#f10606] border-l-transparent border-r-transparent transition-all duration-300 ${
                    activeService === "marketing" ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute bottom-0 left-23 h-0 w-0 border-b-12 border-l-8 border-r-8 border-b-[#2f3440] border-l-transparent border-r-transparent transition-all delay-75 duration-300 ${
                    activeService === "marketing" ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
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
                <span
                  className={`pointer-events-none absolute bottom-0 left-18 h-0 w-0 border-b-10 border-l-7 border-r-7 border-b-[#f10606] border-l-transparent border-r-transparent transition-all duration-300 ${
                    activeService === "banking" ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute bottom-0 left-23 h-0 w-0 border-b-12 border-l-8 border-r-8 border-b-[#2f3440] border-l-transparent border-r-transparent transition-all delay-75 duration-300 ${
                    activeService === "banking" ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-9 pt-4 sm:grid-cols-2">
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <Icon size={46} color={LOGO_GREEN} strokeWidth={2} aria-hidden={true} />
                <h4 className="mt-4 text-[24px] font-semibold text-[#181d28]">{item.title}</h4>
                <p className="mt-3 text-[15px] leading-7 text-[#5f6573]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
