// functions/api/contact.ts
// For TypeScript, you can add workers types in devDependencies:
//   npm install -D @cloudflare/workers-types
// and add `/// <reference types="@cloudflare/workers-types" />` at the top.

export interface Env {
  CONTACTS_DB: D1Database;
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  EMAIL_TO?: string;
}

export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;

  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return jsonResponse({ ok: false, error: "Invalid content type" }, 400);
    }

    const data = await request.json<{
      name?: string;
      email?: string;
      business?: string;
      service?: string;
      message?: string;
      source?: string;
    }>();

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();
    const business = (data.business || "").trim();
    const service = (data.service || "").trim();
    const source = (data.source || "").trim();

    if (!name || !email || !message) {
      return jsonResponse(
        { ok: false, error: "Name, email, and message are required." },
        400
      );
    }

    // Basic log (shows up in Cloudflare logs)
    console.log("Contact submission:", {
      name,
      email,
      business,
      service,
      source,
      messageSnippet: message.slice(0, 120),
    });

    // 1) Write to D1
    try {
      await env.CONTACTS_DB.prepare(
        `INSERT INTO contact_submissions
        (name, email, business, service, message, source)
        VALUES (?, ?, ?, ?, ?, ?)`
      )
        .bind(name, email, business, service, message, source)
        .run();
    } catch (dbErr) {
      console.error("D1 insert error:", dbErr);
      // We still continue to try sending an email, but report failure to client
      return jsonResponse(
        { ok: false, error: "Error saving your message. Please try again." },
        500
      );
    }

    // TODO: Wire this into whatever you want:
    // Option A: send email via an email provider API
    // Option B: write to a D1 database or KV
    // Option C: post to a Slack/Discord webhook

    // Example stub for email via a hypothetical EMAIL_WEBHOOK_URL env var:
    // if (env.EMAIL_WEBHOOK_URL) {
    //   await fetch(env.EMAIL_WEBHOOK_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       type: "contact_form",
    //       name,
    //       email,
    //       business,
    //       service,
    //       message,
    //       source,
    //       receivedAt: new Date().toISOString(),
    //     }),
    //   }).catch((err) => {
    //     console.error("Error sending email webhook", err);
    //   });
    // }

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return jsonResponse(
      { ok: false, error: "Unexpected error processing your request." },
      500
    );
  }
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
