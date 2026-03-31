import type { CSSProperties } from "react";

import { HomePage } from "@/features/home/components/home-page";

export function HomeView() {
  const pageLayoutStyle = {
    "--site-container-max": "1520px",
    "--site-container-padding": "clamp(16px, 2vw, 24px)",
  } as CSSProperties;

  return (
    <main className="w-full" style={pageLayoutStyle}>
      <HomePage />
    </main>
  );
}
