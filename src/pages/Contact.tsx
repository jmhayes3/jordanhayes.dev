import React, { useState } from "react";
import { Link } from "react-router-dom";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Format phone number as user types (US format: (XXX) XXX-XXXX)
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  // Extract digits only for validation and submission
  const getPhoneDigits = (): string => phone.replace(/\D/g, "");

  const isValidPhone = (): boolean => {
    const digits = getPhoneDigits();
    return digits.length === 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (phone && !isValidPhone()) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit US phone number.");
      return;
    }

    if (phone && !smsConsent) {
      setStatus("error");
      setErrorMessage("Please consent to receive SMS messages if providing a phone number.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: getPhoneDigits(),
          message,
          smsConsent,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSmsConsent(false);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Get in touch
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Have a project in mind? Fill out the form below and I'll get back to you
          within 1-2 business days.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <h2 className="text-lg font-semibold text-emerald-400">
              Message sent!
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Thanks for reaching out. I'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                Name <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email <span className="text-emerald-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone (optional) */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                Phone number{" "}
                <span className="text-slate-500">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="(555) 123-4567"
                maxLength={14}
              />
              <p className="mt-1 text-xs text-slate-500">
                US numbers only. Format: (XXX) XXX-XXXX
              </p>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                Message <span className="text-emerald-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* SMS Consent - A2P 10DLC Compliant */}
            {phone && (
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900"
                  />
                  <label htmlFor="smsConsent" className="text-xs text-slate-300">
                    I agree to receive SMS/text messages from Jordan Hayes regarding my
                    inquiry and project updates. Message frequency varies (typically 1-5
                    messages/month). Reply STOP to opt out, HELP for help. Message and
                    data rates may apply.{" "}
                    <Link to="/terms" className="text-emerald-400 hover:underline">
                      Terms
                    </Link>{" "}
                    &{" "}
                    <Link to="/privacy" className="text-emerald-400 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
              </div>
            )}

            {/* Error message */}
            {status === "error" && errorMessage && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                <p className="text-sm text-red-400">{errorMessage}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>

            {/* Additional disclosures */}
            <p className="text-center text-xs text-slate-500">
              By submitting this form, you agree to our{" "}
              <Link to="/terms" className="text-emerald-400 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-emerald-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
