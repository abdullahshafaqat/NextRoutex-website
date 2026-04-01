"use client";

import Image from "next/image";
import Link from "next/link";

import fullLogo from "@/assets/full-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Prices & Plans", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-8 px-4 py-4">
        <Link href="/" className="relative block h-10 w-40">
          <Image
            src={fullLogo}
            alt="NextRouteX logo"
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-[17px] font-semibold text-[#3a3a3a] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center transition-colors hover:text-[#187d76]"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <button className="rounded-md bg-[#187d76] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d7377] sm:px-8 sm:text-base">
          Get Consultant
        </button>
      </div>
    </header>
  );
}
