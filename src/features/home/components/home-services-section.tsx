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
  Lock,
  Route,
  PiggyBank,
  ShieldCheck,
  Store,
  UserCog,
  Users,
  Truck,
} from "lucide-react";



const LOGO_GREEN = "#187d76";

type ServiceKey = "consulting" | "marketing" | "banking";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
};

const serviceFeatureMap: Record<ServiceKey, FeatureItem[]> = {
  consulting: [
    {
      title: "Multi User",
      description:
        "Enable secure access for admins and multiple employees with role-based permissions, so each user can only use the modules and data assigned to their job.",
      icon: Lock,
    },
    {
      title: "Client Management",
      description:
        "Store and manage customer profiles with full create, update, and delete flows, giving your team one clean client record for operations.",
      icon: Users,
    },
    {
      title: "Driver Management",
      description:
        "Register drivers, maintain profile details, and track license validity and status to keep dispatch planning accurate and compliant.",
      icon: UserCog,
    },
    {
      title: "Vehicle Fleet Records",
      description:
        "Manage vehicle specifications, availability, and maintenance state in one place so fleet data stays current for daily assignments.",
      icon: Truck,
    },
  ],
  marketing: [
    {
      title: "Tour & Trip Planning",
      description:
        "Create tours, assign drivers and vehicles, and track status from planned to completed, forming the operational core of Logenix.",
      icon: Route,
    },
    {
      title: "Tour Expense & Deductions",
      description:
        "Record expenses, penalties, and deductions against each tour for transparent trip-level costing and faster financial reconciliation.",
      icon: PiggyBank,
    },
    {
      title: "Tour Damage Tracking",
      description:
        "Capture incident and damage records by tour with category and cost details, helping teams document issues and control loss.",
      icon: ShieldCheck,
    },
    {
      title: "Operations Visibility",
      description:
        "View trip progress and key operational data in one workflow so dispatch, accounts, and managers can coordinate decisions quickly.",
      icon: BriefcaseBusiness,
    },
  ],
  banking: [
    {
      title: "Vehicle Maintenance",
      description:
        "Schedule services and repairs, track maintenance history per vehicle, and monitor costs to reduce downtime across the fleet.",
      icon: Briefcase,
    },
    {
      title: "Financial Ledger",
      description:
        "Maintain ledger entries for income and expenses with detailed records that support accounting, audits, and monthly reporting.",
      icon: Landmark,
    },
    {
      title: "Service History Reports",
      description:
        "Review historical maintenance, trip deductions, and damage trends to improve planning and prevent repeated operational issues.",
      icon: Store,
    },
    {
      title: "Management Dashboard",
      description:
        "Use high-level logistics and finance insights to monitor business health and make data-backed decisions for growth.",
      icon: BarChart3,
    },
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
          <div className="absolute inset-x-4 -bottom-3 top-4 rounded-[5px] bg-[#e7e7e7]" />
          <div className="relative flex h-full flex-col rounded-[5px] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <p className="text-2xl font-bold uppercase tracking-wider text-[#187d76]">WHAT WE DO</p>
            <h3 className="mt-4 text-[40px] font-semibold leading-[1.15] text-[#1a1f28]">
              Core services for
              modern fleet operations
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
                    <Lock size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-[13px]">Core management</span>
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
                  <Route
                    size={17}
                    color={activeService === "marketing" ? "#ffffff" : LOGO_GREEN}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>Trips and operations</span>
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
                  <HandCoins
                    size={17}
                    color={activeService === "banking" ? "#ffffff" : LOGO_GREEN}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span>Finance and upkeep</span>
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

        <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-[5px] border border-[#dfe3e8] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#eef8f6]">
                  <Icon size={28} color={LOGO_GREEN} strokeWidth={1.7} aria-hidden={true} />
                </div>
                <h4 className="mt-3 text-[18px] font-semibold leading-tight text-[#181d28]">{item.title}</h4>
                <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[#5f6573]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
