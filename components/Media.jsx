import Image from 'next/image';
import { ImagePlaceholder } from '@/components/primitives';

/**
 * Renders a photo when the image slot has a `src`, otherwise a branded
 * gradient placeholder with the same aspect ratio and the same alt text.
 * All photos are lazy-loaded unless `priority` is set (hero images).
 */
export default function Media({ image, className = '', tall = false, priority = false, sizes = '(max-width: 1024px) 100vw, 50vw' }) {
  if (!image?.src) {
    return <ImagePlaceholder label={image?.alt ?? ''} icon={image?.icon} tall={tall} className={className} />;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-navy/10 bg-navy-50 ${
        tall ? 'aspect-4/5' : 'aspect-4/3'
      } ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="object-cover"
      />
    </div>
  );
}
