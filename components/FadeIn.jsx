'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered fade-up. Uses IntersectionObserver so it costs nothing
 * until the element approaches the viewport, and it degrades to
 * "already visible" when JS or IntersectionObserver is unavailable.
 */
export default function FadeIn({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    observer.observe(node);

    // Safety net: a hash jump or an instant scroll can skip past a section
    // without the observer ever seeing it intersect, which would leave the
    // content permanently invisible. Reveal anything still hidden after a beat.
    const fallback = setTimeout(() => setVisible(true), 4000);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
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
