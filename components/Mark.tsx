/**
 * The MK'S DETAILING badge.
 *
 * DRAWN, NOT SUPPLIED. The only copy of the real mark available was the 90px
 * Instagram avatar: a black disc carrying a white front-elevation sports car
 * over a condensed wordmark. This redraws that car at any size so the page has
 * a crisp mark, and the wordmark is set as real text beside it rather than
 * baked in, because at header size an inset wordmark would be illegible.
 *
 * Listed under `pending` in content/site.ts. Drop in the real artwork and this
 * component is the only file that changes.
 */

export function Mark({ size = 46, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MK'S DETAILING"
      className={className}
    >
      <circle cx="60" cy="60" r="60" fill="#0c0f0b" />
      <g fill="#f4f7f1">
        {/* cabin */}
        <path d="M35 45c3-16 47-16 50 0-6-2-13-3-25-3s-19 1-25 3Z" />
        {/* body */}
        <path d="M19 50h82c2 0 3 1 3 3v10c0 3-2 5-5 5H21c-3 0-5-2-5-5V53c0-2 1-3 3-3Z" />
        {/* front splitter */}
        <path d="M13 73h94c2 0 3 1 3 3v3c0 2-1 3-3 3H13c-2 0-3-1-3-3v-3c0-2 1-3 3-3Z" />
      </g>
      <g fill="#0c0f0b">
        {/* headlight slivers, cut back out of the body */}
        <path d="M24 55h20c1 0 2 1 2 2l-1 3c0 1-1 2-2 2H24c-1 0-2-1-2-2v-3c0-1 1-2 2-2Z" />
        <path d="M76 55h20c1 0 2 1 2 2v3c0 1-1 2-2 2H77c-1 0-2-1-2-2l-1-3c0-1 1-2 2-2Z" />
        {/* grille */}
        <path d="M50 57h20c1 0 2 1 2 2v3c0 1-1 2-2 2H50c-1 0-2-1-2-2v-3c0-1 1-2 2-2Z" />
      </g>
    </svg>
  );
}
