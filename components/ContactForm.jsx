'use client';

import { useState } from 'react';
import { serviceInterestOptions, site } from '@/lib/site';

const initial = { name: '', email: '', phone: '', service: '', message: '', company: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [statusMessage, setStatusMessage] = useState('');

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) next.message = 'Please tell us a little about what you need.';
    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('sent');
        setValues(initial);
        setStatusMessage(
          `Thank you — your message is on its way. ${site.responseTime} If it is urgent, call ${site.phone}.`
        );
        return;
      }

      if (data.errors) {
        setErrors(data.errors);
        setStatus('idle');
        return;
      }

      setStatus('error');
      setStatusMessage(
        data.message ??
          `Something went wrong sending your message. Please call ${site.phone} or email ${site.email}.`
      );
    } catch {
      setStatus('error');
      setStatusMessage(
        `We could not reach the server. Please call ${site.phone} or email ${site.email}.`
      );
    }
  }

  const fieldClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-[0.95rem] text-charcoal transition-colors placeholder:text-slate-body/60 focus:border-navy ${
      errors[field] ? 'border-red-600' : 'border-navy/20'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-display text-sm font-semibold text-navy">
            Name <span className="text-gold-700">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass('name')}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-display text-sm font-semibold text-navy">
            Email <span className="text-gold-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass('email')}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block font-display text-sm font-semibold text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            className={fieldClass('phone')}
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block font-display text-sm font-semibold text-navy">
            Service interested in
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={update('service')}
            className={fieldClass('service')}
          >
            <option value="">Select a service…</option>
            {serviceInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-display text-sm font-semibold text-navy">
          How can we help? <span className="text-gold-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="A sentence or two about your situation is plenty to start."
          className={fieldClass('message')}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update('company')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center rounded-lg bg-gold px-6 py-3.5 font-display text-sm font-bold text-navy-900 transition-colors hover:bg-gold-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm">
        {status === 'sent' ? (
          <span className="block rounded-lg border border-green-700/30 bg-green-50 p-4 text-green-900">
            {statusMessage}
          </span>
        ) : null}
        {status === 'error' ? (
          <span className="block rounded-lg border border-red-700/30 bg-red-50 p-4 text-red-900">
            {statusMessage}
          </span>
        ) : null}
      </p>

      <p className="text-xs leading-relaxed text-slate-body">
        Please do not send Social Security numbers, bank details, or tax documents through this
        form — once you are a client, everything sensitive goes through our secure portal. See our{' '}
        <a href="/privacy-policy" className="underline hover:text-navy">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
