import React from "react";
import { ServicesSection } from "../components/ServicesSection";

export const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="bg-slate-950 py-14 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Productized services
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Fixed-scope Cloudflare packages
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Pick a package, know the scope, timeline, and cost up front. I handle
            everything from architecture to deployment so you can stay focused on
            your business.
          </p>
        </div>
      </section>

      <ServicesSection />
    </>
  );
};
