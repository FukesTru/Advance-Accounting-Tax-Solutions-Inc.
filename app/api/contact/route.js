import { NextResponse } from 'next/server';
import { serviceInterestOptions, site } from '@/lib/site';

/**
 * Contact form endpoint.
 *
 * Delivery is intentionally not hard-wired to a vendor. Set CONTACT_WEBHOOK_URL
 * to any endpoint that accepts a JSON POST (Zapier, Make, a CRM inbound hook,
 * an email-sending function) and submissions are forwarded there.
 *
 * TODO(client): set CONTACT_WEBHOOK_URL in the hosting environment. Until it is
 * set, this route returns 503 and the form tells the visitor to call or email
 * instead — deliberately, so no enquiry is silently dropped.
 */

export const runtime = 'nodejs';

const MAX_LENGTHS = { name: 120, email: 200, phone: 40, service: 120, message: 4000 };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const service = String(body.service ?? '').trim();
  const message = String(body.message ?? '').trim();

  const errors = {};
  if (!name) errors.name = 'Please enter your name.';
  if (!email) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
  if (!message) errors.message = 'Please tell us a little about what you need.';
  if (service && !serviceInterestOptions.includes(service)) {
    errors.service = 'Please choose an option from the list.';
  }
  Object.entries(MAX_LENGTHS).forEach(([field, limit]) => {
    const value = { name, email, phone, service, message }[field];
    if (value && value.length > limit) errors[field] = `Please keep this under ${limit} characters.`;
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    site: site.url,
    name,
    email,
    phone,
    service: service || 'Not specified',
    message,
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      {
        error: 'notConfigured',
        message: `Our contact form is not connected yet. Please call ${site.phone} or email ${site.email} and we will respond right away.`,
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded ${response.status}`);
    }
  } catch {
    return NextResponse.json(
      {
        error: 'deliveryFailed',
        message: `We could not send your message just now. Please call ${site.phone} or email ${site.email}.`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
