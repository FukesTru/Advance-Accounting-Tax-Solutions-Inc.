'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * One IntersectionObserver for the whole page.
 *
 * A typical page mounts 15–30 FadeIn sections. Giving each its own observer
 * meant that many separate observation loops on the main thread for no benefit
 * — they all watch for the same threshold. This shares a single instance and
 * dispatches to per-element callbacks.
 */
let sharedObserver = null;
const callbacks = new WeakMap();

function observe(node, onVisible) {
  if (typeof IntersectionObserver === 'undefined') {
    onVisible();
    return () => {};
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          callbacks.delete(entry.target);
          sharedObserver.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
  }

  callbacks.set(node, onVisible);
  sharedObserver.observe(node);

  return () => {
    callbacks.delete(node);
    sharedObserver?.unobserve(node);
  };
}

/**
 * Scroll-triggered fade-up. Degrades to "already visible" when JavaScript or
 * IntersectionObserver is unavailable, and honours prefers-reduced-motion via
 * CSS in globals.css.
 */
export default function FadeIn({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const unobserve = observe(node, () => setVisible(true));

    // Safety net: a hash jump or an instant scroll can skip past a section
    // without the observer ever seeing it intersect, which would leave the
    // content permanently invisible. Reveal anything still hidden after a beat.
    const fallback = setTimeout(() => setVisible(true), 4000);

    return () => {
      clearTimeout(fallback);
      unobserve();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`fade-up ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
