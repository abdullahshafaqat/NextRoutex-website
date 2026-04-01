"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import contactImage from "@/assets/contact1.png";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeFooter } from "@/features/home/components/home-footer";

import { ContactHero } from "./contact-hero";

function ContactSection() {
  return (
    <section className="bg-white py-16 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#1a1d29]">Contact Information</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d7377]">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1d29]">Hotline</h3>
                  <p className="text-sm text-gray-500">+4733378901</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d7377]">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1d29]">Our Location</h3>
                  <p className="text-sm text-gray-500">55 Main Street, The Grand Avenue 2nd Block,<br />New York City</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1d29]">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1d29]">Official Email</h3>
                  <p className="text-sm text-gray-500">info@egrul.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wide text-[#0d7377]">HAVE QUESTIONS?</p>
              <h3 className="mt-2 text-2xl font-bold text-[#1a1d29]">Send us a Message</h3>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:ring-2 focus:ring-[#0d7377]/20"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:ring-2 focus:ring-[#0d7377]/20"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:ring-2 focus:ring-[#0d7377]/20"
                  />
                </div>
                <textarea
                  placeholder="Tell Us About Project *"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#0d7377] focus:bg-white focus:ring-2 focus:ring-[#0d7377]/20"
                />

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#0d7377] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a5c5e] cursor-pointer"
                >
                  <Send size={16} />
                  Get In Touch
                </button>
              </form>
            </div>

            <div className="absolute -right-4 bottom-0 hidden h-80 w-64 lg:block xl:-right-70">
              <Image
                src={contactImage}
                alt="Contact"
                fill
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactHero />
      <ContactSection />
      <HomeFooter />
    </>
  );
}
