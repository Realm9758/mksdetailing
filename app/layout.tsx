import type { Metadata } from "next";
import { Anton, Courier_Prime, Fira_Sans } from "next/font/google";
import { business, footer } from "@/content/site";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const data = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-data",
  display: "swap",
});

const description = `${business.descriptor} at ${business.addressLine}, ${business.city}. ${business.rating} from ${business.reviewCount} Google reviews. Message on WhatsApp for a price.`;

export const metadata: Metadata = {
  title: `${business.name} — ${business.descriptor} in ${business.city}`,
  description,
  openGraph: {
    title: `${business.name} — ${business.descriptor} in ${business.city}`,
    description,
    type: "website",
    locale: "en_GB",
  },
  // No canonical URL, no Open Graph url and no `url` in the structured data
  // below: no domain has been agreed, and a guessed one is worse than none.
};

/**
 * AutoWash is the schema.org type for a valeting business. The rating is real
 * and captured from the Google listing, so it is published. Opening hours and
 * a site URL are not known, so neither appears. Nothing here is inferred.
 */
const schema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: business.name,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLine,
    addressLocality: business.city,
    postalCode: business.postcode,
    addressCountry: "GB",
  },
  telephone: business.phoneHref.replace("tel:", ""),
  email: business.email,
  sameAs: [business.instagram, business.tiktok],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
    bestRating: 5,
  },
};

const contract = `
  THESIS: MKS hands back a record, not an advert. This page refuses the
  detailing category's near-black hero with an orange glow, its wet supercar,
  and its Bronze/Silver/Gold tiers.

  OWN-WORLD: A security-green engine-turned field carrying security-paper
  sheets ruled in hairlines and double rules. Violet rubber-stamp ink for every
  action and every section mark. One tax-disc red, spent on the rating alone.
  Anton stamps, Fira Sans form labels, Courier Prime field values. A fact
  nobody supplied prints as a ruled blank box, never as a plausible guess.

  STORY: A stranger sees a document about a real car, drags the handle and
  watches the Audi come clean, reads 5.0 from 42 reviews, and messages WhatsApp.

  FIRST VIEWPORT: The green field. One certificate sheet centred on it. Left,
  a customer's own sentence set large in Anton above a four-row field table and
  the violet WhatsApp stamp. Right, the before/after slider running on a ruler.
  The perforated 5.0 disc punched over the sheet's right edge.

  FORM: The service record. Candidate 5 of 7 on the grounded list. Seed 7411fcb1.

  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${data.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: `<!--${contract}-->` }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
