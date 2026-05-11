import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPage: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: May 2025</p>

        <div className="mt-8 space-y-6 text-sm text-slate-300">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Introduction</h2>
            <p className="mt-2">
              Jordan Hayes ("Company," "we," "us," or "our") respects your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when
              you visit jordanhayes.dev or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
            <p className="mt-2">We may collect information you provide directly, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Name and email address</li>
              <li>Phone number (if provided for SMS communications)</li>
              <li>Business or organization name</li>
              <li>Project details and messages you send us</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p className="mt-3">We may automatically collect:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Device and browser information</li>
              <li>IP address and general location</li>
              <li>Pages visited and interactions with our site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. How We Use Your Information</h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your inquiries and provide services</li>
              <li>Send project updates and service-related communications</li>
              <li>Send SMS/text messages if you have opted in</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. SMS/Text Messaging Privacy</h2>
            <p className="mt-2">If you opt in to receive text messages from us:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                We will only use your phone number to send messages related to your inquiry or
                project.
              </li>
              <li>
                We do not sell, rent, or share your phone number with third parties for marketing
                purposes.
              </li>
              <li>
                Your phone number and opt-in consent are stored securely and used solely for
                communication purposes.
              </li>
              <li>
                You can opt out at any time by replying STOP. Reply HELP for assistance.
              </li>
              <li>Message and data rates may apply.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Information Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Service providers who assist in operating our business (e.g., hosting, analytics)</li>
              <li>Professional advisors as required</li>
              <li>Law enforcement when legally required</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Data Security</h2>
            <p className="mt-2">
              We implement appropriate technical and organizational measures to protect your
              information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. Data Retention</h2>
            <p className="mt-2">
              We retain your information for as long as necessary to provide services and fulfill
              the purposes described in this policy, unless a longer retention period is required
              by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Your Rights</h2>
            <p className="mt-2">Depending on your location, you may have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:admin@jordanhayes.dev" className="text-emerald-400 hover:underline">
                admin@jordanhayes.dev
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">9. Third-Party Links</h2>
            <p className="mt-2">
              Our website may contain links to third-party sites. We are not responsible for the
              privacy practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">10. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this policy from time to time. We will notify you of material changes
              by posting the new policy on this page with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">11. Contact Us</h2>
            <p className="mt-2">
              Questions about this Privacy Policy? Contact us at{" "}
              <a href="mailto:admin@jordanhayes.dev" className="text-emerald-400 hover:underline">
                admin@jordanhayes.dev
              </a>.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <p className="text-xs text-slate-400">
              See also:{" "}
              <Link to="/terms" className="text-emerald-400 hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
