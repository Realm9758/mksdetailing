/**
 * Single source of truth for every word and every fact on this site.
 *
 * SOURCING RULE: nothing in this file may be invented.
 *
 * MKS Detailing is a real business in Peterborough with a real reputation, and
 * a website is the one place a stranger checks that reputation against. So
 * every claim below traces to one of exactly three places, noted inline:
 *
 *   - the business's own published material (its Instagram captions, its
 *     "CONTACT US" post, its logo badge);
 *   - its Google Business listing (category, address, phone, rating, hours);
 *   - a customer's own words, quoted from a Google review.
 *
 * Where a fact has not been supplied it stays empty and the UI shows the field
 * as a deliberately blank line rather than inventing a plausible-looking value.
 * See `pending` at the foot of this file for the list still outstanding.
 */

export const business = {
  // The logo badge on their Instagram avatar reads "MK'S DETAILING". The
  // Google listing spells it "Mks Detailing". The logo is theirs, so it wins.
  name: "MK'S DETAILING",
  // Google lists the category as "Valeting service"; the business's own name
  // and captions say detailing. Both, therefore, and nothing more.
  descriptor: "Valeting & detailing",
  city: "Peterborough",

  // Google Business listing.
  addressLine: "1 First Drove",
  postcode: "PE1 5BJ",
  region: "England",

  // Printed on their own "CONTACT US" post as +44 7477 206575, and again on
  // the Google listing in national form.
  phoneDisplay: "07477 206575",
  phoneHref: "tel:+447477206575",
  whatsappNumber: "447477206575",
  email: "Mksdetailingg@gmail.com",

  instagram: "https://www.instagram.com/mksdetailingg/",
  instagramHandle: "@mksdetailingg",
  // The same post lists a TikTok under the identical handle.
  tiktok: "https://www.tiktok.com/@mksdetailingg",
  tiktokHandle: "@mksdetailingg",

  // Google listing, captured 12 August 2026.
  rating: 5.0,
  reviewCount: 42,

  // NOT PUBLISHED IN FULL. The listing showed only "Open · Closes 6 pm" on the
  // day it was captured, which is one day of one week. The site says exactly
  // that much and no more; `hours` stays empty until the real week is supplied.
  closingTime: "6 pm",
  hours: [] as ReadonlyArray<{ day: string; opens: string; closes: string }>,

  // NOT CONFIRMED. No domain has been registered or agreed, so the site
  // publishes no canonical URL, no Open Graph URL and no `url` in its
  // structured data rather than asserting one it invented. Set this and all
  // three appear.
  siteUrl: "",

  // NOT SUPPLIED. No owner or staff name appears anywhere in the source
  // material, so the copy never uses one.
  owner: "",
} as const;

export const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like a price for my car.",
)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name} ${business.addressLine} ${business.postcode}`,
)}`;

/**
 * The document's own header. This site is built as a record of work, so the
 * page carries a reference the way a certificate does. It is derived from the
 * business's postcode and initials, and it is presented as this document's
 * reference, never as a licence, registration or accreditation number, because
 * MKS has published none.
 */
export const record = {
  title: "Record of work carried out",
  reference: "MKS / PE1 / 001",
  issuedNote: "Compiled from work MK'S DETAILING has published itself.",
} as const;

export const hero = {
  /**
   * The headline is a customer's sentence, not ours. It is the strongest true
   * thing available and it is quoted, attributed and repeated verbatim in the
   * reviews section below.
   */
  quote: "Got given back a brand new car.",
  quoteAuthor: "Victor Ezeugo",
  quoteSource: "Google review",
  /** Factual, from the Google category, the business name and the listing. */
  statement:
    "Valeting and detailing on First Drove, Peterborough. Every car quoted on the car.",
  /**
   * Four fields, and every one of them is written down somewhere. "Station" is
   * the business address from the Google listing; the registration is legible
   * on the car in both frames; "Maintenance clean" is the post's own caption;
   * the date is stated on the post. There is deliberately no "Result" field,
   * because no source states an outcome for this particular car and the
   * exhibit beside it is the outcome anyway.
   */
  fields: [
    { label: "Station", value: `${business.addressLine}, ${business.city}` },
    { label: "Vehicle", value: "Audi S3 · S30 ERH" },
    { label: "Work", value: "Maintenance clean" },
    { label: "Posted", value: "25 July 2026" },
  ],
} as const;

/**
 * The before/after exhibit. Both frames come from one carousel post, one
 * forecourt, one session. They are not camera-registered; `tools/build-images.py`
 * warps the first onto the second using the car's own landmarks, and the
 * caption below says so rather than pretending to a registration the source
 * material does not have.
 */
export const exhibit = {
  /**
   * Not "same afternoon": the two frames sit in one carousel, which proves one
   * post and not one afternoon. The sky differs between them because the foam
   * blows the exposure out, but that is an explanation, not a source.
   */
  heading: "The same Audi S3, before and after",
  beforeLabel: "At arrival",
  afterLabel: "At handover",
  beforeSrc: "/work/s3-before.webp",
  afterSrc: "/work/s3-after.webp",
  beforeAlt:
    "An Audi S3 covered head to toe in white snow foam on the forecourt at MKS Detailing, parked cars and houses behind it",
  afterAlt:
    "The same Audi S3 washed and dry, its midnight purple paint and black alloy wheels clean, on the same forecourt",
  note: "Two frames from one carousel on @mksdetailingg. The camera moved between them, so the car is aligned and the background is not. All that foam pulled the first frame's exposure up, and its tone has been pulled back down to match; nothing on the car itself was touched.",
  control: "Drag to compare, or use the arrow keys",
} as const;

/**
 * Every entry is a job MKS posted. The `work` line is their own caption,
 * verbatim, hashtags removed and nothing added.
 */
export const entries = [
  {
    id: "s3-forecourt",
    work: "Maintenance Detail On This Audi S3 In Midnight Purple",
    vehicle: "Audi S3",
    // Stated on the post itself.
    when: "25 July 2026",
    src: "/work/s3-forecourt.webp",
    alt: "An Audi S3 in midnight purple on black alloy wheels, clean and parked on the forecourt at MKS Detailing under a bright sky, customer cars and houses behind",
  },
  {
    id: "370z",
    work: "Nissan 370z Exterior Detail",
    vehicle: "Nissan 370z",
    // The post read "6 days ago" when the source screenshot was taken on
    // 12 August 2026, so the month is certain and the day is not. The month is
    // what gets shown.
    when: "August 2026",
    src: "/work/370z.webp",
    alt: "A black widebody Nissan 370z on white split-rim wheels, sitting low on the yard at MKS Detailing under heavy cloud",
  },
] as const;

/**
 * Verbatim, from the reviewer quotes surfaced on the Google Business listing.
 * These are Google's own pull-quotes rather than full review texts, so nothing
 * is completed, tidied or punctuated beyond what the listing showed. No dates
 * were captured, so none are shown.
 */
export const reviews = [
  {
    name: "Victor Ezeugo",
    body: "Amazing service, amazing outcome, got given back a brand new car",
  },
  {
    name: "Lokman Mahroof",
    body: "Spot on with unbeatable prices!",
  },
  {
    name: "Mohammed Faizan",
    body: "They treated my vehicle with great care and clearly take pride in their work.",
  },
] as const;

export const reviewsSection = {
  /**
   * Deliberately NOT "not one below five stars". Google rounds a displayed
   * rating to one decimal, so a 5.0 across 42 reviews is consistent with a
   * single four-star among them. The listing proves the number and the count,
   * so the number and the count are all this says.
   */
  heading: "Five point oh, across forty-two reviews",
  note: "Google Business listing, checked 12 August 2026.",
} as const;

/**
 * Only what MKS has named itself. Three come from post captions and one from
 * their own services post. There is no published menu beyond this, so the site
 * shows four lines and an honest blank rather than a fabricated list of nine.
 */
export const services = {
  heading: "Work they have named",
  items: [
    { name: "Maintenance clean", source: "post caption" },
    { name: "Maintenance detail", source: "post caption" },
    { name: "Exterior detail", source: "post caption" },
    { name: "Air compressor for carpets and trims", source: "services post" },
  ],
  blankLabel: "Full service list",
  blankNote: "Not published. Ask and they will tell you.",
  priceLabel: "Price list",
  priceNote: "None published. Every car is quoted on the car.",
} as const;

export const contact = {
  heading: "Bring it to First Drove",
  body: "Message MKS with what you drive and what you want doing, and they will come back with a price.",
  primary: "Message on WhatsApp",
  stationLabel: "Issuing station",
} as const;

export const footer = {
  line: "Valeting & detailing · Peterborough",
  note: "This page lists only work MK'S DETAILING has published. Nothing on it has been invented.",
} as const;

/**
 * Facts MKS still needs to supply. Each one is wired up already: fill the
 * matching field above and the site picks it up with no layout change.
 *
 * Nothing here is guessed at in the meantime, and no part of the page pretends
 * these exist.
 */
export const pending = [
  {
    field: "business.hours",
    what: "The real opening hours for each day of the week. The listing only ever showed 'closes 6 pm' for the day it was read, so that single fact is all the page claims. Supply the week and a full hours table and `openingHours` in the structured data both appear.",
  },
  {
    field: "services.items",
    what: "The full service list in their own words. Four are shown because four are all MKS has named in public.",
  },
  {
    field: "prices",
    what: "A price list or 'from' prices, if they want them shown. The page is built to work without one and currently routes every price question to WhatsApp.",
  },
  {
    field: "business.siteUrl",
    what: "The live domain, once there is one. Unlocks the canonical URL, the Open Graph tags and the `url` in the structured data. All three are deliberately absent until then rather than pointing at a guess.",
  },
  {
    field: "business.owner",
    what: "Who to ask for. No name appears in any of the source material, so the copy addresses the business rather than a person.",
  },
  {
    field: "logo",
    what: "The MK'S DETAILING badge as an SVG or high-resolution PNG. The mark on this site is drawn to match, because the only copy available was a 90-pixel Instagram avatar.",
  },
  {
    field: "photography",
    what: "The original photographs off the phone. Every image here was recovered from a screenshot of Instagram, which caps them at 876 pixels wide and costs a generation of compression. The originals would sharpen the whole page, the before/after most of all.",
  },
  {
    field: "exhibit",
    what: "A before and after shot from one fixed camera position. The current pair is aligned on the car itself because the photographer moved between frames; two shots from one spot would line up completely.",
  },
] as const;
