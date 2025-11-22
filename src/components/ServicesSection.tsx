import React from "react";
import { services, ServiceOffering, PricePoint } from "../data/services";

const categoryLabel: Record<ServiceOffering["category"], string> = {
  local_business: "Local Business",
  hospitality: "Hospitality",
  ag_food: "Ag & Food"
};

const tierLabel: Record<ServiceOffering["tier"], string> = {
  starter: "Starter",
  core: "Core",
  pro: "Pro",
  enterprise: "Enterprise"
};

function formatPrice(p: PricePoint): string {
  const base = `$${p.amountUSD.toLocaleString()}`;
  if (p.frequency === "one_time") return base;
  if (p.frequency === "monthly") return `${base}/mo`;
  if (p.frequency === "annual") return `${base}/yr`;
  return base;
}

function getPrimaryPrice(prices: PricePoint[]): PricePoint | undefined {
  // Prefer one-time; otherwise first price
  return prices.find(p => p.frequency === "one_time") ?? prices[0];
}

function getRecurringPrice(prices: PricePoint[]): PricePoint | undefined {
  return prices.find(p => p.frequency === "monthly" || p.frequency === "annual");
}

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Productized Services
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Fixed-scope, Cloudflare-powered offerings for local businesses and hospitality.
              Clear deliverables, transparent pricing, fast turnaround.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 ring-1 ring-slate-700/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>Built on Cloudflare · Fully managed</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(service => {
            const primary = getPrimaryPrice(service.pricing);
            const recurring = getRecurringPrice(service.pricing);

            const isHighlight = service.id === "local-lead-booster"; // your "Most Popular"

            return (
              <article
                key={service.id}
                className={[
                  "flex h-full flex-col rounded-2xl border p-6 shadow-sm backdrop-blur",
                  isHighlight
                    ? "border-emerald-500/70 bg-slate-900 shadow-md shadow-emerald-500/30"
                    : "border-slate-800 bg-slate-900/60 shadow-black/40"
                ].join(" ")}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
                      {categoryLabel[service.category]} · {tierLabel[service.tier]}
                    </p>
                  </div>

                  <span
                    className={[
                      "rounded-full px-3 py-1 text-xs font-medium",
                      isHighlight
                        ? "bg-emerald-600/20 text-emerald-300"
                        : "bg-slate-800 text-slate-200"
                    ].join(" ")}
                  >
                    {isHighlight ? "Most Popular" : categoryLabel[service.category]}
                  </span>
                </div>

                <p className="mb-4 text-sm text-slate-300">{service.summary}</p>

                <ul className="mb-6 space-y-2 text-sm text-slate-200">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-slate-800 pt-4">
                  {primary && (
                    <div className="mb-3 flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-white">
                        {formatPrice(primary)}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-slate-400">
                        {primary.label}
                      </span>
                    </div>
                  )}

                  {recurring && (
                    <div className="mb-4 text-sm text-slate-300">
                      <span className="font-medium text-emerald-300">
                        {formatPrice(recurring)}
                      </span>
                      {recurring.notes && <span> · {recurring.notes}</span>}
                    </div>
                  )}

                  <button
                    className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    onClick={() => {
                      // You can swap this for navigation to a contact form or pre-filled inquiry URL
                      window.location.href = `/contact?service=${encodeURIComponent(service.slug)}`;
                    }}
                  >
                    {service.ctaLabel}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
