import type { NavigationItem } from "@/types/navigation";

export const siteConfig = {
  name: "Next Route Website",
  description: "A structured Next.js 16 frontend architecture.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Docs", href: "https://nextjs.org/docs" },
  ] satisfies NavigationItem[],
} as const;
