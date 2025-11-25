// src/pages/Admin.tsx
import React, { useEffect, useState } from "react";

interface ContactSubmission {
  id: number;
  created_at: string;
  name: string;
  email: string;
  business: string | null;
  service: string | null;
  message: string;
  source: string | null;
}

type Status = "loading" | "success" | "error";

export const AdminPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  async function fetchSubmissions() {
    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/admin/contacts");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to fetch submissions");
      }

      const data = await res.json();
      setSubmissions(data.submissions || []);
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  function formatDate(dateStr: string) {
    try {
      const date = new Date(dateStr);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  }

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Admin Dashboard
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Submissions
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {submissions.length} total submission{submissions.length !== 1 ? "s" : ""}
          </p>
        </div>

        {status === "loading" && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <p className="text-slate-400">Loading submissions...</p>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
            {errorMsg || "Failed to load submissions. Please try again."}
          </div>
        )}

        {status === "success" && submissions.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-8 text-center">
            <p className="text-slate-400">No submissions yet.</p>
          </div>
        )}

        {status === "success" && submissions.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 bg-slate-950/50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-300">Date</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Name</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Email</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Business</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Service</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Message</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Source</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, idx) => (
                  <tr
                    key={submission.id}
                    className={`border-b border-slate-800/50 ${
                      idx % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/10"
                    } hover:bg-slate-800/30 transition-colors`}
                  >
                    <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                      {formatDate(submission.created_at)}
                    </td>
                    <td className="px-4 py-3 text-white font-medium">
                      {submission.name}
                    </td>
                    <td className="px-4 py-3 text-emerald-400">
                      <a
                        href={`mailto:${submission.email}`}
                        className="hover:underline"
                      >
                        {submission.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {submission.business || "—"}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {submission.service || "—"}
                    </td>
                    <td className="px-4 py-3 text-slate-300 max-w-md">
                      <div className="line-clamp-2" title={submission.message}>
                        {submission.message}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-400 text-xs">
                      {submission.source || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
