import { Compare } from "@/components/Compare";
import { Mark } from "@/components/Mark";
import { RatingDisc } from "@/components/RatingDisc";
import { Reveal } from "@/components/Reveal";
import {
  ClockIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  business,
  contact,
  entries,
  footer,
  hero,
  mapsUrl,
  record,
  reviews,
  reviewsSection,
  services,
  whatsappHref,
} from "@/content/site";

export default function Page() {
  return (
    <>
      <header className="runhead">
        <div className="wrap runhead-inner">
          <a className="runhead-id" href="#top">
            <Mark size={34} />
            <span>
              <span className="runhead-name">{business.name}</span>
              <span className="runhead-place">{business.city}</span>
            </span>
          </a>
          <a className="runhead-action" href={whatsappHref} rel="noopener">
            <WhatsAppIcon size={17} />
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        {/* ── The certificate ───────────────────────────────────────────── */}
        <section className="section certificate-section">
          <div className="wrap">
            <article className="sheet certificate">
              <div className="sheet-rosette-clip" aria-hidden="true">
                <img
                  className="sheet-rosette certificate-rosette"
                  src="/guilloche-rosette.svg"
                  alt=""
                  width={520}
                  height={520}
                />
              </div>

              <RatingDisc className="certificate-disc" size={166} />

              <div className="sheet-inner">
                <div className="dochead">
                  <div className="dochead-id">
                    <Mark size={52} />
                    <div>
                      <div className="dochead-name">{business.name}</div>
                      <div className="dochead-descriptor">{business.descriptor}</div>
                    </div>
                  </div>
                  <div className="dochead-ref">
                    <div className="label">{record.title}</div>
                    <div className="value">{record.reference}</div>
                  </div>
                </div>
                <hr className="rule-double" />

                <div className="certificate-body">
                  <div className="certificate-lede">
                    <h1 className="certificate-quote">{hero.quote}</h1>
                    <p className="certificate-attrib">
                      {hero.quoteAuthor}
                      <span aria-hidden="true"> · </span>
                      <span className="certificate-source">{hero.quoteSource}</span>
                    </p>
                  </div>

                  {/* Source order puts the exhibit second, so on a phone the
                      handle gets into the first screen under the headline. The
                      wide layout puts it back in its own column. */}
                  <div className="certificate-exhibit">
                    <Compare />
                  </div>

                  <div className="certificate-say">
                    <p className="prose certificate-statement">{hero.statement}</p>

                    <div className="certificate-actions">
                      <a className="action" href={whatsappHref} rel="noopener">
                        <WhatsAppIcon size={21} />
                        {contact.primary}
                      </a>
                      <div className="certificate-alt">
                        <a className="action-quiet" href={business.phoneHref}>
                          <PhoneIcon size={17} />
                          {business.phoneDisplay}
                        </a>
                        <a className="action-quiet" href={`mailto:${business.email}`}>
                          <MailIcon size={17} />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>

                  <dl className="certificate-fields">
                    {hero.fields.map((f) => (
                      <div key={f.label} className="certificate-field">
                        <dt className="label">{f.label}</dt>
                        <dd className="value">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── The work, as posted ───────────────────────────────────────── */}
        <section className="section on-field" id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>Two jobs, in their own words</h2>
              <p className="prose section-aside">{record.issuedNote}</p>
            </div>
            <div className="register-band" aria-hidden="true">
              <span>Register of published work</span>
              <span>{record.reference}</span>
            </div>

            <div className="entries">
              {entries.map((entry, i) => (
                <Reveal
                  key={entry.id}
                  className="entry"
                  delay={i * 90}
                  rotate={i % 2 === 0 ? "-1deg" : "1deg"}
                >
                  <figure className="entry-figure">
                    <img
                      className="entry-shot"
                      src={entry.src}
                      alt={entry.alt}
                      width={876}
                      height={1470}
                      decoding="async"
                    />
                    <figcaption className="entry-plate">
                      <dl className="entry-fields">
                        <div className="entry-field">
                          <dt className="label">Vehicle</dt>
                          <dd className="value">{entry.vehicle}</dd>
                        </div>
                        <div className="entry-field">
                          <dt className="label">Work</dt>
                          <dd className="value">{entry.work}</dd>
                        </div>
                        <div className="entry-field">
                          <dt className="label">Posted</dt>
                          <dd className="value">{entry.when}</dd>
                        </div>
                      </dl>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Endorsements ──────────────────────────────────────────────── */}
        <section className="section on-field" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <h2>{reviewsSection.heading}</h2>
              <p className="prose section-aside">{reviewsSection.note}</p>
            </div>
            <div className="register-band" aria-hidden="true">
              <span>Endorsements, verbatim</span>
              <span>{reviews.length} of {business.reviewCount}</span>
            </div>

            <div className="slips">
              {reviews.map((review, i) => (
                <Reveal
                  key={review.name}
                  className="slip-wrap"
                  delay={i * 110}
                  rotate={["-1.6deg", "1.2deg", "-0.8deg"][i]}
                >
                  <blockquote className="slip">
                    <div className="slip-stars" aria-label="Five stars">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <StarIcon key={s} size={14} />
                      ))}
                    </div>
                    <p className="slip-body">{review.body}</p>
                    <footer className="slip-by">
                      <cite>{review.name}</cite>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── The back page: schedule of work and issuing station ───────── */}
        <section className="section" id="contact">
          <div className="wrap">
            <Reveal>
              <article className="sheet backpage-sheet">
                <div className="sheet-rosette-clip" aria-hidden="true">
                  <img
                    className="sheet-rosette backpage-rosette"
                    src="/guilloche-rosette.svg"
                    alt=""
                    width={520}
                    height={520}
                  />
                </div>
                <div className="stamp backpage-stamp">{contact.stationLabel}</div>

                <div className="sheet-inner backpage">
                  <div className="backpage-col">
                    <h2 className="backpage-heading">{services.heading}</h2>
                    <ul className="schedule">
                      {services.items.map((item) => (
                        <li key={item.name} className="schedule-row">
                          <span className="value schedule-name">{item.name}</span>
                          <span className="label schedule-source">{item.source}</span>
                        </li>
                      ))}
                    </ul>
                    <dl className="fields backpage-blanks">
                      <div className="field">
                        <dt className="label">{services.blankLabel}</dt>
                        <dd className="field-blank">{services.blankNote}</dd>
                      </div>
                      <div className="field">
                        <dt className="label">{services.priceLabel}</dt>
                        <dd className="field-blank">{services.priceNote}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="backpage-col backpage-station">
                    <h2 className="backpage-heading">{contact.heading}</h2>
                    <p className="prose">{contact.body}</p>

                    <a className="action backpage-action" href={whatsappHref} rel="noopener">
                      <WhatsAppIcon size={21} />
                      {contact.primary}
                    </a>

                    <ul className="station-list">
                      <li>
                        <PinIcon size={18} />
                        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                          {business.addressLine}, {business.city} {business.postcode}
                        </a>
                      </li>
                      <li>
                        <PhoneIcon size={18} />
                        <a href={business.phoneHref}>{business.phoneDisplay}</a>
                      </li>
                      <li>
                        <MailIcon size={18} />
                        <a href={`mailto:${business.email}`}>{business.email}</a>
                      </li>
                      <li>
                        <ClockIcon size={18} />
                        <span>Closes {business.closingTime}</span>
                      </li>
                      <li>
                        <InstagramIcon size={18} />
                        <a href={business.instagram} target="_blank" rel="noopener noreferrer">
                          {business.instagramHandle}
                        </a>
                      </li>
                      <li>
                        <TikTokIcon size={18} />
                        <a href={business.tiktok} target="_blank" rel="noopener noreferrer">
                          {business.tiktokHandle}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="docfoot on-field">
        <div className="wrap docfoot-inner">
          <div className="docfoot-id">
            <Mark size={30} />
            <span>
              {business.name}
              <span className="docfoot-line">{footer.line}</span>
            </span>
          </div>
          <p className="docfoot-note">{footer.note}</p>
          <p className="value docfoot-ref">{record.reference}</p>
        </div>
      </footer>
    </>
  );
}
