"use client";

import { Check, X } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { HomeFooter } from "@/features/home/components/home-footer";

import { PricingHero } from "./pricing-hero";

const plans = [
  {
    name: "Premium Plan",
    description: "Increased processing power with multiple sites, storage.",
    price: "29",
    priceLabel: "/Monthly",
    features: [
      { text: "1,300 Keywords", included: true },
      { text: "SEO Optimized", included: true },
      { text: "Live Support", included: true },
    ],
    highlighted: false,
  },
  {
    name: "Advanced Plan",
    description: "Target is processing power with multiple sites, storage.",
    price: "58",
    priceLabel: "/Monthly",
    features: [
      { text: "Increase traffic 130%", included: true },
      { text: "BackLink analysis", included: true },
      { text: "10 Free Optimization", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Business Plan",
    description: "Mentioning processing power with multiple sites, storage.",
    price: "89",
    priceLabel: "/Monthly",
    features: [
      { text: "Increase traffic 130%", included: true },
      { text: "BackLink analysis", included: true },
      { text: "Organic traffic 215%", included: true },
      { text: "10 Free Optimization", included: true },
      { text: "Live Support", included: true },
    ],
    highlighted: true,
  },
];

function PricingPlansSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative flex flex-col rounded-lg border border-gray-200 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] p-6 transition-all duration-300 hover:border-[#0d7377] hover:shadow-lg"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[#1a1d29]">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500 transition-colors duration-300 group-hover:text-[#0d7377]">{plan.description}</p>
              </div>

              <div className="my-4 h-px bg-gray-200 transition-colors duration-300 group-hover:bg-[#0d7377]" />

              <div className="mb-6 flex items-end gap-1">
                {plan.price === "Free" ? (
                  <span className="text-4xl font-bold text-[#1a1d29] transition-colors duration-300 group-hover:text-[#0d7377]">
                    {plan.price}
                  </span>
                ) : (
                  <>
                    <span className="text-xl font-bold text-[#1a1d29] transition-colors duration-300 group-hover:text-[#0d7377]">$</span>
                    <span className="text-4xl font-bold text-[#1a1d29] transition-colors duration-300 group-hover:text-[#0d7377]">
                      {plan.price}
                    </span>
                  </>
                )}
                {plan.priceLabel && (
                  <span className="mb-2 text-sm text-gray-500">{plan.priceLabel}</span>
                )}
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check size={16} className="text-[#1a1d29]" />
                    ) : (
                      <X size={16} className="text-gray-400" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-md bg-[#1a1d29] py-3 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-[#0d7377]">
                Purchase Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPage() {
  return (
    <>
      <SiteHeader />
      <PricingHero />
      <PricingPlansSection />
      <HomeFooter />
    </>
  );
}
