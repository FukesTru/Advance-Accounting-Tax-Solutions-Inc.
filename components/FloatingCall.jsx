import { Icon } from '@/components/Icons';
import { site } from '@/lib/site';

/** Mobile-only floating "Call Now" button, present on every page. */
export default function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call ${site.name} now at ${site.phone}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 font-display text-sm font-bold text-navy-900 shadow-lg shadow-navy/30 transition-transform hover:scale-105 lg:hidden"
    >
      <Icon name="phone" className="h-4 w-4" />
      Call Now
    </a>
  );
}
