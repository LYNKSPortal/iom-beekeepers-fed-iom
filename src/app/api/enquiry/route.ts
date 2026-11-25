import { NextResponse } from "next/server";

/**
 * Generic enquiry endpoint (contact, course applications, swarm requests).
 * Prepared for AWS backend: POST payloads are forwarded to the configured
 * backend (e.g. API Gateway -> Lambda -> SES/DynamoDB) when ENQUIRY_API_URL
 * is set. Without it, submissions are logged and accepted so the UX works
 * end-to-end in preview.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 422 });
  }

  const target = process.env.ENQUIRY_API_URL;
  if (target) {
    const res = await fetch(target, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ENQUIRY_API_KEY ? { "x-api-key": process.env.ENQUIRY_API_KEY } : {}),
      },
      body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  } else {
    console.log("[enquiry]", JSON.stringify(body));
  }

  return NextResponse.json({ ok: true });
}
