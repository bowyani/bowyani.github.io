import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
