// src/pages/Contact.tsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

type Status = "idle" | "submitting" | "success" | "error";

export const ContactPage: React.FC = () => {
  const [params] = useSearchParams();
  const initialService = params.get("service") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          business,
          service,
          message,
          source: "contact-page",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setBusiness("");
      setMessage("");
      // keep service populated so you still know what they clicked from
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 md:flex-row">
        {/* Left column: text */}
        <div className="md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tell me about your project.
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Share a bit about your business, what you&apos;re trying to build, and
            which service you&apos;re interested in. I&apos;ll get back to you with
            next steps, rough scope, and timeline.
          </p>

          {initialService && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                You clicked from: <span className="font-semibold">{initialService}</span>
              </span>
            </div>
          )}

          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li>• Typical response time: within 1–2 business days.</li>
            <li>• Clear, fixed-scope proposals. No surprise retainers.</li>
            <li>• Cloudflare-first solutions with low ongoing infra cost.</li>
          </ul>
        </div>

        {/* Right column: form */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm shadow-black/40"
          >
            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="Jordan Hayes"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Business / Organization (optional)
              </label>
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="South Shore Harbour Resort"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Which service are you interested in?
              </label>
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="e.g. Local Lead Booster, Boutique Hotel Web + Booking"
              />
              <p className="mt-1 text-[11px] text-slate-400">
                You can paste the package name or describe what you have in mind.
              </p>
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium text-slate-200">
                Project details
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="Tell me about your goals, timeline, budget ballpark, and any existing systems you have."
              />
            </div>

            {status === "success" && (
              <div className="mb-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
                Thanks — your message was sent. I&apos;ll follow up via email.
              </div>
            )}

            {status === "error" && (
              <div className="mb-3 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                {errorMsg || "Something went wrong. Please try again in a moment."}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            <p className="mt-2 text-[11px] text-slate-500">
              This form posts securely to a Cloudflare Worker. No spam, no selling your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
