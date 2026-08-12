# MK'S DETAILING

A single-page site for MK'S DETAILING, a valeting and detailing business at
1 First Drove, Peterborough PE1 5BJ.

Next.js 16 (App Router), React 19, TypeScript. No database, no CMS, no
client-side data fetching. The whole site is static.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## The one rule

**Nothing on this site may be invented.**

This is a real business whose reputation sits on the page, and a website is the
one place a stranger checks that reputation against. Every word and every fact
lives in [`content/site.ts`](content/site.ts), and every claim in that file
traces to one of exactly three places, noted inline at the claim:

- the business's own published material (Instagram captions, its "CONTACT US"
  post, the logo badge);
- its Google Business listing (category, address, phone, rating, hours);
- a customer's own words, quoted from a Google review.

`app/page.tsx` contains no strings. A fact nobody has supplied stays an empty
string in `site.ts`, and the page prints it as a visibly blank ruled field
rather than a plausible-looking placeholder.

## What MKS still needs to send

Each of these is already wired up. Fill the matching field in `content/site.ts`
and the site picks it up with no layout change. The same list is exported as
`pending` at the foot of that file.

| Field | What is needed |
|---|---|
| `business.hours` | The real opening hours for each day. The Google listing only ever showed "closes 6 pm" for the day it was read, so that single fact is all the page claims. Supplying the week turns on a full hours table and `openingHours` in the structured data. |
| `services.items` | The full service list in their own words. Four are shown because four are all MKS has named in public. |
| prices | A price list or "from" prices, if they want them shown. The page works without one and routes every price question to WhatsApp. |
| `business.siteUrl` | The live domain, once there is one. Turns on the canonical URL, the Open Graph tags and `url` in the structured data. All three are deliberately absent rather than pointing at a guess. |
| `business.owner` | Who to ask for. No name appears anywhere in the source material, so the copy addresses the business rather than a person. |
| logo | The badge as an SVG or high-resolution PNG. The mark on the site is drawn to match, because the only copy available was a 90px Instagram avatar. |
| photography | The original photographs off the phone. Every image here came out of an Instagram screenshot, which caps them at 876px wide and costs a generation of compression. |
| before/after pair | Two frames shot from one fixed camera position. See below. |

## Images

`npm run images` rebuilds everything in `public/work/` from the four
screenshots in `source-images/`. The crops are code, not muscle memory, so they
can be redone when better sources arrive.

The before/after pair needs explaining. Both frames come from one carousel post,
one forecourt, one session, but they are **not camera-registered**: the
photographer moved between them, and phase-correlating the two proves it, since
registering the background and registering the car give different answers.

A wipe slider is only honest if the subject holds still under the handle, so
`tools/build-images.py` registers on the *car*, using two landmarks visible in
both frames (the front alloy centre and the number plate centre). That resolves
to a scale of 1.0705 and a rotation of 9.17 degrees. The result is that the car
lines up across the handle and the background does not, by about the parallax
one sidestep introduces. The caption on the page says exactly that.

Two frames shot from one spot would line up completely, through the same
pipeline, by changing four numbers.

## Structured data

`AutoWash`, with the real 5.0/42 `aggregateRating` from the Google listing.
There is deliberately no `url` and no `openingHours`, because no domain has been
agreed and the full week was never captured.

## Design

The visual world and its tokens are recorded in [`DESIGN.md`](DESIGN.md). Its
provenance, including the direction roll that chose it, is in
[`.impeccable/direction-roll.md`](.impeccable/direction-roll.md).

`tools/build-guilloche.py` draws the security-document line work in
`public/`: the tiling wave field the page sits on, and the rosette medallion on
the certificate. Both are real engine-turned curves rather than gradients.

## Deploying

Vercel, zero configuration. Once a domain exists, set `business.siteUrl` in
`content/site.ts` and the canonical URL, Open Graph tags and structured-data
`url` all appear.
