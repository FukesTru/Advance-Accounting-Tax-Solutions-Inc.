import Link from 'next/link';
import { Icon } from '@/components/Icons';

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({ id, tone = 'white', className = '', children }) {
  const tones = {
    white: 'bg-white',
    shell: 'bg-shell',
    navyTint: 'bg-navy-50',
    navy: 'bg-navy text-white',
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, onDark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] ${
        onDark ? 'text-gold' : 'text-gold-700'
      }`}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, intro, onDark = false, align = 'left', as = 'h2' }) {
  const Tag = as;
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={`mt-4 text-3xl leading-tight sm:text-4xl ${onDark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </Tag>
      {intro ? (
        <p className={`mt-5 text-[1.05rem] leading-relaxed ${onDark ? 'text-navy-100' : 'text-slate-body'}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-display text-sm font-bold tracking-wide transition-all duration-200';

const buttonVariants = {
  gold: `${buttonBase} bg-gold text-navy-900 shadow-sm hover:bg-gold-600 hover:text-white hover:shadow-md`,
  navy: `${buttonBase} bg-navy text-white shadow-sm hover:bg-navy-600 hover:shadow-md`,
  outline: `${buttonBase} border-2 border-navy/20 bg-white text-navy hover:border-navy hover:bg-navy hover:text-white`,
  outlineLight: `${buttonBase} border-2 border-white/40 text-white hover:border-white hover:bg-white hover:text-navy`,
};

export function Button({ href, variant = 'gold', className = '', children, ...rest }) {
  const classes = `${buttonVariants[variant]} ${className}`;
  if (href && (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:'))) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export function TextLink({ href, children, onDark = false, className = '' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-display text-sm font-bold ${
        onDark ? 'text-gold hover:text-gold-200' : 'text-navy hover:text-gold-700'
      } ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}

/** Bulleted list with gold check marks — used for "What We Do" / "Who This Is For". */
export function CheckList({ items, columns = 1, onDark = false }) {
  return (
    <ul
      className={`grid gap-x-8 gap-y-4 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
    >
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : item.title} className="flex gap-3">
          <span
            aria-hidden="true"
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              onDark ? 'bg-gold/20 text-gold' : 'bg-gold-50 text-gold-700'
            }`}
          >
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          {typeof item === 'string' ? (
            <span className={onDark ? 'text-navy-100' : 'text-slate-body'}>{item}</span>
          ) : (
            <span>
              <strong className={`block font-display text-[0.95rem] ${onDark ? 'text-white' : 'text-navy'}`}>
                {item.title}
              </strong>
              <span className={`text-sm leading-relaxed ${onDark ? 'text-navy-100' : 'text-slate-body'}`}>
                {item.text}
              </span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Decorative gradient panel standing in for photography. */
export function ImagePlaceholder({
  label,
  className = '',
  icon = 'users',
  tall = false,
  ratioClass,
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-2xl border border-navy/10 bg-linear-to-br from-navy via-navy-600 to-navy-900 ${
        ratioClass ?? (tall ? 'aspect-4/5' : 'aspect-4/3')
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
          <Icon name={icon} className="h-7 w-7" />
        </span>
        <span className="max-w-[16rem] text-xs font-semibold uppercase tracking-[0.15em] text-navy-100">
          {label}
        </span>
      </div>
    </div>
  );
}
