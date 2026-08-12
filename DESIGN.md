---
name: MK'S DETAILING
description: A vehicle service record, not an advert: security-paper sheets laid on an engine-turned green field.
colors:
  fen: "#0a3a2b"
  fen-deep: "#062a1f"
  fen-pale: "#a9c4b4"
  paper: "#e8efe2"
  paper-2: "#dde6d5"
  paper-3: "#cfdbc6"
  rule: "#9fb494"
  rule-hard: "#2c3a26"
  ink: "#10160f"
  ink-2: "#46523f"
  stamp: "#57318f"
  stamp-deep: "#3f2269"
  stamp-wash: "rgba(87, 49, 143, 0.12)"
  disc: "#b8342a"
typography:
  display:
    fontFamily: "Anton, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 6.4vw, 4.9rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Anton, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4.6vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Anton, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 2.6vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.045em"
  body:
    fontFamily: "Fira Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.075rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Fira Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
  value:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "0.005em"
    fontFeature: "tabular-nums"
rounded:
  trim: "2px"
spacing:
  step: "0.35rem"
  gutter: "clamp(1rem, 4vw, 2.75rem)"
  sheet-inner: "clamp(1.5rem, 4vw, 3.25rem)"
  section: "clamp(3rem, 9vw, 6.5rem)"
  measure: "74rem"
components:
  action:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.trim}"
    padding: "0.95rem 1.5rem"
  action-hover:
    backgroundColor: "{colors.stamp-deep}"
    textColor: "{colors.paper}"
  action-quiet:
    textColor: "{colors.ink}"
    padding: "0.55rem 0"
  action-quiet-hover:
    textColor: "{colors.stamp}"
  stamp:
    backgroundColor: "{colors.stamp-wash}"
    textColor: "{colors.stamp}"
    typography: "{typography.title}"
    rounded: "{rounded.trim}"
    padding: "0.5rem 0.95rem"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.trim}"
    padding: "{spacing.sheet-inner}"
  plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.trim}"
    padding: "1rem 1.25rem"
  slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.trim}"
    padding: "1.4rem 1.5rem 1.25rem"
  field-blank:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink-2}"
    padding: "0.5rem 0.7rem"
  runhead-action:
    textColor: "{colors.paper}"
    rounded: "{rounded.trim}"
    padding: "0.5rem 0.9rem"
  runhead-action-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.fen-deep}"
---

# Design System: MK'S DETAILING

## Overview

**Creative North Star: "The Service Record"**

The whole site is one vehicle document. Security-paper sheets, green-cast rather than cream, lie on an engine-turned security-green field; each sheet is ruled with hairlines and closed with a double rule; every fact on it is set as a form field with a Fira Sans label above a Courier Prime value. Actions are not buttons in the software sense, they are rubber stamps pressed onto the paper in violet ink. One number on the page is treated as evidence rather than as copy, and it gets a perforated tax disc punched over the sheet's corner.

The density is a form's density: tight rows, hairline separators, no decorative whitespace between related facts, generous air only between sections. The paper is the light surface and the field is the dark one, so every surface change is also an ink change. Two utility classes, `.on-paper` and `.on-field`, carry that switch, and any surface that contradicts its context has to reset its own ink.

Confirmed rejections, inherited from the direction contract and honoured in the build: no near-black hero with an orange glow, no wet supercar beauty shot, no Bronze/Silver/Gold tier cards. The photography is the business's own posted work, printed flat inside register-marked frames rather than lit like an advert.

**Key Characteristics:**
- Security-green ground, green-cast paper; no cream, no grey, no pure black
- Every fact is a definition list: label above value, hairline below
- Violet is the only action colour; red is only ever evidence
- 2px trim radius everywhere, because a certificate is trimmed, not rounded
- A fact nobody supplied prints as a ruled blank box, never as a plausible guess
- One authored motion on the page: a stamp landing

## Colors

A single security-document palette: one green ground in three depths, one green-cast paper in three tones, two inks, one stamp violet, one disc red. Nothing on the page falls outside it except the drawn brand badge, which carries its own two mark-local values.

### Primary
- **Stamp Violet** (`{colors.stamp}`): rubber-stamp ink. It carries every action (the WhatsApp stamp, the quiet phone and email links on hover), every applied mark (the issuing-station stamp, the compare divider and carriage), the review attribution, the schedule source tags, the station-list icons, the focus ring and the selection highlight. Nothing decorative takes it.
- **Stamp Violet Deep** (`{colors.stamp-deep}`): the pressed state of the primary action only.
- **Stamp Wash** (`{colors.stamp-wash}`): the 12% ink bleed inside an outlined stamp.

### Secondary
- **Tax-Disc Red** (`{colors.disc}`): the rating evidence and nothing else. It draws the perforated 5.0 disc (ring, inner rules, numeral, star row, and the review count's neighbours) and the five-star row on the endorsement slips. Both are the same fact, the Google rating, printed twice. It never touches an action, a heading, a border or a hover state.

### Neutral
- **Security Green** (`{colors.fen}`): the field the sheets lie on, printed with the guilloche tile at 240px and dimmed by a fixed radial vignette so the engine-turning never competes with the paper.
- **Field Deep** (`{colors.fen-deep}`): the running header, the document footer, the page's edges.
- **Field Pale** (`{colors.fen-pale}`): secondary text on the green. It is tinted from the ground, not a neutral grey.
- **Security Paper** (`{colors.paper}`): every sheet, plate and slip; also the text colour on the field.
- **Paper Inset** (`{colors.paper-2}`): alternating form rows and inset panels.
- **Blank-Field Paper** (`{colors.paper-3}`): the tone an unfilled field is printed in, and the perforated stub dash down a slip's left edge.
- **Hairline Rule** (`{colors.rule}`): the single stroke every form row, trim border and column divider is ruled with.
- **Heavy Rule** (`{colors.rule-hard}`): the 2px rule that closes a document header, and the plate frame.
- **Document Ink** (`{colors.ink}`): what the form is printed in, on paper.
- **Secondary Ink** (`{colors.ink-2}`): field labels, prose on paper, blank-box copy.

### Named Rules
**The One Red Rule.** Red is evidence, never emphasis. It appears only where the Google rating is being printed: the tax disc and the star rows that repeat it. If a new surface wants red for a heading, a price, a badge or an alert, the answer is stamp violet or ink.

**The Stamp-Only Action Rule.** Violet marks actions and applications. If an element is not something a person can press, or something that was pressed onto the document, it does not get violet.

**The Green-Cast Rule.** Paper here is green-cast (`{colors.paper}`), never cream, and pale text on the field (`{colors.fen-pale}`) is tinted from the ground rather than desaturated to grey. Introducing a neutral warm white or a true grey breaks the security-paper stock.

**The Context Ink Rule.** A paper surface sitting inside an `.on-field` section must reset its own label ink to `{colors.ink-2}`. Inherited pale ink lands at 1.9:1 on paper. `.on-field .entry-plate .label` and `.on-field .backpage-stamp` exist for exactly this reason and any new paper-on-field component needs the same reset.

## Typography

**Display Font:** Anton (400 only, with ui-sans-serif fallback)
**Body Font:** Fira Sans (400 / 500 / 600)
**Label/Mono Font:** Courier Prime (400 / 700)

**Character:** Anton is the stamped voice: one weight, condensed, set tight and used for headlines, business name, stamps and actions. Fira Sans is the printed form's voice: labels in small uppercase with wide tracking, and all running prose. Courier Prime is the typewriter that filled the form in, used for every value a person or a listing supplied, with tabular numerals so columns of figures line up.

### Hierarchy
- **Display** (Anton 400, `{typography.display.fontSize}`, line-height 0.98, tracking -0.02em): the customer's own sentence on the certificate. One per page, capped at 15ch so it breaks into stacked lines.
- **Headline** (Anton 400, `{typography.headline.fontSize}`): section headings on the field, in paper ink. The back page's own headings run smaller (clamp 1.5rem to 2.15rem) in document ink.
- **Title** (Anton 400, `{typography.title.fontSize}`, tracking +0.045em): the business name in the document header, running header and footer, plus stamp and action lettering (uppercase, tracking 0.075em to 0.1em).
- **Body** (Fira Sans 400, `{typography.body.fontSize}`, line-height 1.62): running prose, capped at 66ch, 42ch for the section aside, 52ch for the footer note.
- **Label** (Fira Sans 600, `{typography.label.fontSize}`, tracking 0.14em, uppercase): the name of a box. Also used at 0.63rem to 0.72rem with tracking 0.15em to 0.18em for the running-header locality, descriptor, register band, plate tags and footer line.
- **Value** (Courier Prime 400, `{typography.value.fontSize}`, tabular numerals): what someone wrote in the box. Every fact traceable to a source is set in it.

### Named Rules
**The Label-Above-Value Rule.** A fact is a `dt` label in Fira Sans small caps over a `dd` value in Courier Prime. Facts are never set as sentences with bold lead-ins, and never as body text with a colon.

**The Three-Voice Rule.** Anton stamps, Fira Sans labels and prose, Courier Prime values. A fourth family, a second display weight, or Anton used for body copy all break the document.

**The Reset Rule.** `dl, dt, dd { margin: 0 }` is load-bearing, not housekeeping. Every field on the page is a definition list, and the browser's 40px `dd` indent would break every field row on the site.

## Layout

One measure governs the page: `.wrap` is `min(100% - 2 * {spacing.gutter}, {spacing.measure})`, so the sheet is 74rem at most and the gutter breathes from 1rem to 2.75rem. Sections pad `{spacing.section}` on the block axis. `--step` (0.35rem) is the small rhythm unit used for header padding; everything else steps in clamps tied to viewport width rather than to a fixed scale.

Breakpoints, all in rem and all content-derived: **46rem** (the certificate field strip goes four across and the document reference right-aligns), **52rem** (work entries become a 12-column overlap and the review slips become three columns), **58rem** (the back page splits into two ruled columns and the footer goes three across), **62rem** (the certificate splits into a lede/exhibit two-column layout and the disc moves to the sheet's corner).

The certificate's wide grid is `minmax(0, 1.1fr) minmax(20rem, 0.9fr)` with named areas (`lede` / `say` / `fields` beside a row-spanning `exhibit`) and **`grid-template-rows: auto auto 1fr`**. That row sizing is deliberate: a row-spanning item forces the rows it spans to sum to its height, and with `auto` rows the surplus distributes into the middle of the form, opening a hole between the attribution and the statement. `1fr` on the last row sends every surplus pixel to the foot, where a form ending short is correct.

Work entries overlap rather than sit in a grid: the photograph takes columns 1 to 9 and the paper plate takes 8 to 13 with a 2.5rem bottom offset, mirrored on even entries. Review slips sit on staggered top margins (0, 2.25rem, 0.75rem) so the row reads as loose slips rather than a card row. Source order on the certificate puts the exhibit second so the slider reaches the first phone screen under the headline; the wide layout puts it back in its column.

## Elevation & Depth

Depth is document depth: paper casts a shadow onto the green field, and nothing on paper casts a shadow onto paper. Two shadow tokens only, both soft, dark-green-tinted and downward, plus one violet shadow that belongs to the primary action because a stamp sits proud of the sheet. Overlap and rotation, not blur, do most of the layering work: the disc overhangs the sheet's trimmed corner, the issuing stamp straddles the sheet's bottom trim rule, plates overlap photographs.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1.5rem 3.5rem rgba(3, 20, 14, 0.42), 0 0.25rem 0.75rem rgba(3, 20, 14, 0.3)`): a full sheet or a photograph laid on the field.
- **Lift** (`box-shadow: 0 0.75rem 1.75rem rgba(3, 20, 14, 0.28)`): a small paper object on the field: plate, slip, compare frame.
- **Stamp press** (`box-shadow: 0 0.4rem 1rem rgba(63, 34, 105, 0.28)`, rising to `0 0.7rem 1.5rem / 0.34` on hover, collapsing to `0 0.15rem 0.4rem / 0.4` on press): the primary action only.
- **Disc** (`filter: drop-shadow(0 0.55rem 1.1rem rgba(6, 20, 14, 0.3))`): the perforated rating disc, drop-shadowed so the perforations cast through.

### Named Rules
**The Paper-on-Field Rule.** Shadows are cast onto the green only. A component sitting on paper gets a rule, a tone change, or an inset border instead.

**The One Entrance Rule.** Motion is a stamp landing: from `scale(1.045)`, 1 to 1.6 degrees off square and 1.5px out of focus, settling over 0.42s opacity and 0.62s transform on `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 90 to 110ms per sibling. The pre-state is set by script only, never rendered by the server, so the page reads with JavaScript off, and `prefers-reduced-motion` cancels it entirely. Only content below the first viewport uses it. Hover and press transitions run 0.16s to 0.18s on the same easing.

## Shapes

**Corners:** 2px, everywhere and only. A certificate is trimmed, not rounded. There is no radius scale; a component wanting 8px or a pill is out of the world.

**Borders are the primary structural device.** The hairline (`1px solid {colors.rule}`) rules every field row, column divider and trim border. The double rule that closes a document header is a 2px `{colors.rule-hard}` top border with a 1px hairline 3px below it. Sheets carry two nested trim borders drawn as pseudo-elements at 0.55rem and 0.8rem inset, the outer at full hairline and the inner at 45% of it.

**Rotation is a material property.** Stamps sit at -1.6 to -3.2 degrees, the disc at -7 degrees, entrance elements at plus or minus 1 to 1.6 degrees. Nothing rotates more than that, and rotation is only ever applied to something that was pressed or placed by hand.

**Guilloche** is generated, not sourced: `tools/build-guilloche.py` produces the 240px repeating field tile and the rosette medallion. Rosettes sit at 17% opacity in `multiply` blend, clipped by their own wrapper so the sheet stays free to let the disc overhang.

**Icons** are one set on a 24-unit grid: line icons at 1.75 stroke with round caps and joins; WhatsApp, TikTok and the star are filled glyphs because those marks are filled. No icon font, no third-party icon package.

## Components

### Actions (buttons)
- **Shape:** trimmed corners (2px), 2px violet border.
- **Primary (`.action`):** stamp violet fill, paper lettering, Anton uppercase at clamp(1rem, 2.4vw, 1.15rem) with 0.075em tracking, padding 0.95rem 1.5rem, leading icon at 21px.
- **Hover / Active:** hover deepens to stamp-deep, lifts 1px and rotates -0.8deg with a larger violet shadow; active drops 1px, squares to 0deg and collapses the shadow. It presses.
- **Quiet (`.action-quiet`):** no fill, ink text with a hairline underline border; hover turns both text and rule violet. On the field it inverts to paper text over a 40% pale rule, hovering to white.
- **Running-header action:** outlined in paper at 1.5px, inverting to a paper fill with field-deep text on hover.

### Stamps
- **Style:** 2px violet border, 12% violet wash, violet Anton uppercase, rotated -1.6 to -3.2 degrees.
- **Applied stamps** (the issuing station) take an opaque paper background and their own small shadow, and are positioned to straddle the sheet's edge rather than sit inside it.

### Sheets / Plates / Slips
- **Sheet:** paper ground, sheet shadow, 2px trim, two nested trim borders, padding `{spacing.sheet-inner}`, optional clipped rosette.
- **Plate** (a caption on a photograph): paper, lift shadow, 1rem 1.25rem, overlapping the image by 5 of 12 columns.
- **Slip** (an endorsement): paper, lift shadow, a dashed `{colors.paper-3}` stub rule down the left inset edge, red star row on top, body, then a hairline-topped attribution in violet small caps.

### Fields
- **Filled field:** `.field` is a two-column grid (label column `minmax(7.5rem, 10rem)`, value column `1fr`), baseline-aligned, 0.62rem block padding, hairline bottom, hairline top on the first row.
- **Blank field (`.field-blank`):** the signature component. A fact nobody supplied prints as a ruled slot in `{colors.paper-3}` with hairlines above and below, a writing line drawn across the top of the box by a pseudo-element, and a plain-Fira note at 0.82rem in secondary ink saying what is missing. It is load-bearing, not a utility: the project's sourcing rule depends on an absent fact looking deliberate.

### Navigation
- **Running header:** sticky at top, field-deep ground, hairline bottom at 22% pale, badge plus business name in Anton with the locality below in a small tracked label, and the WhatsApp action outlined in paper on the right. There is no nav list; the document has one action.
- **Register band:** the ruled ledger head above a field section. Uppercase Fira 600 at 0.7rem, tracking 0.16em, 2px top border at 55% paper and 1px bottom at 30%, with the document reference at the right in Courier Prime. It is what ties a section on the green back to the document.

### Compare plate (signature)
A photograph mounted as an inspection exhibit: 4/5 aspect on phones, 9/10 on wide, ink ground, heavy-rule border, lift shadow. A ruler strip of paper ticks runs across the top edge. The divider is a 2px violet line with a 1px paper halo; the carriage is a 2.5rem violet square with a paper border carrying the two-arrow icon. The control is a real `input[type=range]` stretched invisibly over the whole frame, so the plate works with a keyboard, and the frame shows the focus ring via `:focus-within`. Corner tags read AT ARRIVAL and AT HANDOVER in tracked uppercase over a 72% ink wash.

### Rating disc (signature)
The rating printed as a British tax disc: a 200-unit SVG whose perforated edge is a mask of 46 punched circles, not a drawn scallop, so the bites show whatever the disc is lying on. Paper ground, 13-unit disc-red ring, two fine inner rules, GOOGLE in tracked Fira, the numeral in Anton at 58 units, a five-star row and the review count. It hangs off the sheet's corner at -7 degrees, and it is the only place the red is spent at size.

### Brand badge
A drawn SVG on a 120-unit circle: a front-elevation car in near-white on a near-black disc, with the wordmark set beside it as real text rather than baked into the artwork, so it stays legible at 30px. Its two colours are mark-local and are not palette tokens; if real artwork arrives, `components/Mark.tsx` is the only file that changes.

## Do's and Don'ts

### Do:
- **Do** print every fact as a label-over-value definition list, Fira Sans 600 uppercase over Courier Prime.
- **Do** use `.field-blank` when a fact has not been supplied. A ruled, tinted slot with a stated reason beats a plausible guess.
- **Do** reset label ink to `{colors.ink-2}` on any paper surface placed inside an `.on-field` section.
- **Do** keep every corner at 2px and let hairline rules, not radius or fills, do the structural work.
- **Do** let applied objects overhang: the disc off the sheet's corner, the stamp across the trim rule, the plate over the photograph.
- **Do** cast shadows only from paper onto the green field.
- **Do** set the entrance pre-state from script only, and cancel the entrance under `prefers-reduced-motion`.
- **Do** draw new icons on the 24-unit grid at 1.75 stroke with round caps and joins.

### Don't:
- **Don't** spend `{colors.disc}` on anything that is not the Google rating. Not on actions, alerts, prices, headings or hovers.
- **Don't** give violet to anything that is not an action or an applied mark.
- **Don't** substitute a cream paper or a neutral grey for the green-cast paper and field-tinted pale.
- **Don't** introduce a fourth typeface, a second Anton weight, or Anton in running copy.
- **Don't** add a radius scale, a pill, or a rounded card. The document is trimmed.
- **Don't** add a second entrance animation, a parallax, or a hover lift on anything that is not the primary action.
- **Don't** let a row-spanning grid item share surplus height across `auto` rows; size the final row `1fr` so a form ends short instead of splitting open.
- **Don't** invent a fact to fill a field, and don't remove a blank field to make a section look complete.
