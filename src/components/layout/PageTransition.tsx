"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return <>{children}</>;
}
