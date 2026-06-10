import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-forest text-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-l-4 border-gold pl-4 mb-6 inline-block">
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-xs">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-cream/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
