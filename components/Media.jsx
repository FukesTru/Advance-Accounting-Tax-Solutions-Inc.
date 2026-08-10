import Image from 'next/image';
import { ImagePlaceholder } from '@/components/primitives';

const aspects = {
  '4/3': 'aspect-4/3',
  '4/5': 'aspect-4/5',
  square: 'aspect-square',
};

/**
 * Renders a photo when the image slot resolves to a `src`, otherwise a branded
 * gradient placeholder with the same aspect ratio and the same alt text.
 * All photos are lazy-loaded unless `priority` is set (hero images).
 *
 * `tall` is shorthand for the 4:5 portrait ratio; a slot's own `aspect` wins,
 * so a square source photo is never letterboxed into a mismatched frame.
 */
export default function Media({
  image,
  className = '',
  tall = false,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
}) {
  const ratio = aspects[image?.aspect] ?? (tall ? aspects['4/5'] : aspects['4/3']);

  if (!image?.src) {
    return (
      <ImagePlaceholder
        label={image?.alt ?? ''}
        icon={image?.icon}
        ratioClass={ratio}
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-navy/10 bg-navy-50 ${ratio} ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="object-cover object-top"
      />
    </div>
  );
}
