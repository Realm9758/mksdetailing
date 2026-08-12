import { business, reviewsSection } from "@/content/site";

/**
 * The rating, as a tax disc.
 *
 * Every British driver knows the disc that used to sit in the windscreen: a
 * circle torn out of a sheet along its perforations, carrying the one fact
 * that proved the car was straight. MKS has exactly one number worth that
 * treatment, and it is real, so it gets the disc and nothing else on the page
 * gets the red.
 *
 * The perforated edge is a mask rather than a drawn scallop, so the bites show
 * whatever the disc happens to be lying on.
 */
export function RatingDisc({
  size = 168,
  id = "perf",
  className,
}: {
  size?: number;
  id?: string;
  className?: string;
}) {
  const holes = 46;
  const perforations = Array.from({ length: holes }, (_, i) => {
    const a = (i / holes) * Math.PI * 2;
    return { x: 100 + Math.cos(a) * 96, y: 100 + Math.sin(a) * 96 };
  });

  const label = `${business.rating} out of 5 from ${business.reviewCount} Google reviews`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      className={className}
    >
      <mask id={id}>
        <rect width="200" height="200" fill="black" />
        <circle cx="100" cy="100" r="96" fill="white" />
        {perforations.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4.6" fill="black" />
        ))}
      </mask>

      <g mask={`url(#${id})`}>
        <circle cx="100" cy="100" r="96" fill="var(--paper)" />
        <circle cx="100" cy="100" r="96" fill="none" stroke="var(--disc)" strokeWidth="13" />
      </g>

      <circle cx="100" cy="100" r="80" fill="none" stroke="var(--disc)" strokeWidth="1.5" />
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="var(--disc)"
        strokeWidth="0.75"
        strokeOpacity="0.5"
      />

      <text
        x="100"
        y="62"
        textAnchor="middle"
        fill="var(--ink-2)"
        fontFamily="var(--font-body), sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="2.4"
      >
        GOOGLE
      </text>

      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="var(--disc)"
        fontFamily="var(--font-display), sans-serif"
        fontSize="58"
        letterSpacing="-1"
      >
        {business.rating.toFixed(1)}
      </text>

      <g fill="var(--disc)" transform="translate(100 133)">
        {[-32, -16, 0, 16, 32].map((x) => (
          <path
            key={x}
            transform={`translate(${x} 0) scale(0.55)`}
            d="M0-11 3.4-3.7 11.4-2.8 5.5 2.6 7.1 10.5 0 6.6-7.1 10.5-5.5 2.6-11.4-2.8-3.4-3.7Z"
          />
        ))}
      </g>

      <text
        x="100"
        y="160"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--font-body), sans-serif"
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="1.6"
      >
        {business.reviewCount} REVIEWS
      </text>

      <title>{reviewsSection.note}</title>
    </svg>
  );
}
