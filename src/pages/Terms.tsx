import React from "react";
import { Link } from "react-router-dom";

export const TermsPage: React.FC = () => {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: May 2025</p>

        <div className="mt-8 space-y-6 text-sm text-slate-300">
          <div>
            <h2 className="text-lg font-semibold text-white">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or using jordanhayes.dev and any services provided by Jordan Hayes
              ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. Services</h2>
            <p className="mt-2">
              We provide software development, consulting, and related digital services for
              businesses. All services are provided on a project basis with scope and pricing
              agreed upon in writing before work begins.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. SMS/Text Messaging Terms</h2>
            <p className="mt-2">
              By providing your phone number and opting in to receive text messages from us,
              you agree to the following:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Consent:</strong> You consent to receive SMS/text messages from Jordan Hayes
                regarding your inquiry, project updates, and service-related communications.
              </li>
              <li>
                <strong>Message Frequency:</strong> Message frequency varies based on your
                interactions and project status. Typically, you may receive 1-5 messages per month.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out at any time by replying STOP to any
                message. After opting out, you will receive one confirmation message and no
                further texts.
              </li>
              <li>
                <strong>Help:</strong> For help, reply HELP to any message or email{" "}
                <a href="mailto:admin@jordanhayes.dev" className="text-emerald-400 hover:underline">
                  admin@jordanhayes.dev
                </a>.
              </li>
              <li>
                <strong>Costs:</strong> Message and data rates may apply. Check with your carrier
                for details about your text messaging plan.
              </li>
              <li>
                <strong>Carriers:</strong> Carriers are not liable for delayed or undelivered
                messages.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. User Responsibilities</h2>
            <p className="mt-2">
              You agree to provide accurate information when communicating with us and to use
              our services only for lawful purposes. You are responsible for maintaining the
              confidentiality of any credentials or access we provide to you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. Intellectual Property</h2>
            <p className="mt-2">
              Unless otherwise agreed in writing, all code, designs, and deliverables created
              for you become your property upon full payment. We retain the right to use
              generalized techniques and knowledge gained during projects.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, we shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of
              our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. Privacy</h2>
            <p className="mt-2">
              Your use of our services is also governed by our{" "}
              <Link to="/privacy" className="text-emerald-400 hover:underline">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Changes to Terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of our services after
              changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">9. Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email us at{" "}
              <a href="mailto:admin@jordanhayes.dev" className="text-emerald-400 hover:underline">
                admin@jordanhayes.dev
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
