import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Cloudflare-native development
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            I build fast, lean,{" "}
            <span className="block text-emerald-400">
              infrastructure-light products.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            I’m Jordan, a developer focused on Cloudflare-based apps for small
            businesses, hospitality, and custom SaaS. Think: websites, booking
            engines, and internal tools that are fast, cheap to run, and easy to maintain.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400"
            >
              View productized services
            </Link>
            <Link
              to="/contact"
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Simple “what I do” section */}
      <section className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-emerald-300">
              What I focus on
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Small businesses and teams who need reliable
              software without a full-time engineering department.
            </p>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <h3 className="font-semibold text-white">Websites & landing pages</h3>
            <p>Marketing sites, menus, and booking pages built on Cloudflare Pages.</p>
            <h3 className="mt-4 font-semibold text-white">Booking & lead funnels</h3>
            <p>Capture leads, inquiries, and reservations with automated follow-ups.</p>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <h3 className="font-semibold text-white">Internal tools</h3>
            <p>Ticketing, guest portals, and dashboards tailored to your operations.</p>
            <h3 className="mt-4 font-semibold text-white">Low-ops infrastructure</h3>
            <p>Global, serverless architecture with minimal overhead and great performance.</p>
          </div>
        </div>
      </section>
    </>
  );
};
