import Image from 'next/image';

/**
 * Person avatar: the photo when one exists, otherwise a styled monogram.
 *
 * Two of the three team members have no headshot yet. A monogram reads as a
 * deliberate design choice; the generic gradient placeholder used for scenery
 * would read as a missing image where a face is expected.
 */
export default function Avatar({ image, initials, name, size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-12 w-12 text-sm',
    md: 'h-20 w-20 text-lg',
    lg: 'h-32 w-32 text-2xl',
  };
  const px = { sm: 48, md: 80, lg: 128 }[size];

  if (image?.src) {
    return (
      <span
        className={`relative block shrink-0 overflow-hidden rounded-full border-2 border-white bg-navy-50 shadow-sm ${sizes[size]} ${className}`}
      >
        <Image
          src={image.src}
          alt={name ? `${name}, ${image.alt ?? ''}`.trim() : image.alt}
          fill
          sizes={`${px}px`}
          className="object-cover object-top"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-navy to-navy-600 font-display font-bold tracking-wide text-gold shadow-sm ${sizes[size]} ${className}`}
    >
      {initials}
    </span>
  );
}
