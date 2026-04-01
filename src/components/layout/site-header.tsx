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
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex h-10 w-40 items-center">
          <Image
            src={fullLogo}
            alt="NextRouteX logo"
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden h-full items-center gap-6 text-[16px] font-semibold text-[#3a3a3a] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex h-full items-center transition-colors hover:text-[#0d7377]"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <button className="rounded-md bg-[#0d7377] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0a5c5e]">
          Get Consultant
        </button>
      </div>
    </header>
  );
}
