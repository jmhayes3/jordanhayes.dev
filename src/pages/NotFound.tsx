// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-950 px-4">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          This page drifted off the edge of the map.
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          The URL you entered doesn&apos;t exist. It might have moved, or it never
          existed in the first place. Let&apos;s get you back to something useful.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400"
          >
            Go to homepage
          </Link>
          <Link
            to="/services"
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
};
