// functions/api/admin/contacts.ts
export interface Env {
  CONTACTS_DB: D1Database;
}

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

export const onRequestGet: PagesFunction = async (context) => {
  const { env } = context as { env: Env };

  try {
    // Query all contact submissions, ordered by most recent first
    const result = await env.CONTACTS_DB.prepare(
      `SELECT id, created_at, name, email, business, service, message, source
       FROM contact_submissions
       ORDER BY created_at DESC`
    ).all();

    return new Response(JSON.stringify({
      ok: true,
      submissions: result.results || []
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Error fetching contact submissions:", err);
    return new Response(JSON.stringify({
      ok: false,
      error: "Failed to fetch contact submissions"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
