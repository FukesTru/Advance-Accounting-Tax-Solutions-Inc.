'use client';

import { useState } from 'react';

/**
 * FAQ accordion. Uses real buttons + aria-expanded so it is keyboard and
 * screen-reader friendly; the answers stay in the DOM for crawlers.
 */
export default function FAQ({ faqs, onDark = false }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-navy/10 overflow-hidden rounded-xl border border-navy/10 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-[1rem] font-bold text-navy transition-colors hover:bg-navy-50 sm:px-6"
              >
                {faq.q}
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-700 transition-transform duration-200 ${
                    isOpen ? 'rotate-45 bg-gold-50' : ''
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-6"
            >
              <p className="max-w-3xl leading-relaxed text-slate-body">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
