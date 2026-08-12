"use client";

import { useId, useState } from "react";
import { exhibit } from "@/content/site";
import { CarriageIcon } from "./icons";
import styles from "./Compare.module.css";

/**
 * The inspection plate: one car, two states, one rule drawn across it.
 *
 * Accessibility is carried by a real `<input type="range">` stretched over the
 * plate at zero opacity. That is deliberate rather than lazy: it brings keyboard
 * operation, arrow and Home/End keys, the correct ARIA slider semantics and
 * touch handling for free, and it makes a click anywhere on the photograph jump
 * the handle, which is what people try first. The violet carriage is drawn
 * separately and follows the value.
 */
export function Compare() {
  const [pos, setPos] = useState(52);
  const labelId = useId();

  const valueText =
    pos <= 2
      ? `Fully ${exhibit.afterLabel.toLowerCase()}`
      : pos >= 98
        ? `Fully ${exhibit.beforeLabel.toLowerCase()}`
        : `${pos}% ${exhibit.beforeLabel.toLowerCase()}, ${100 - pos}% ${exhibit.afterLabel.toLowerCase()}`;

  return (
    <figure className={styles.plate}>
      <div className={styles.frame} style={{ "--pos": `${pos}%` } as React.CSSProperties}>
        <img
          className={styles.shot}
          src={exhibit.beforeSrc}
          alt={exhibit.beforeAlt}
          width={710}
          height={1170}
          decoding="async"
        />
        <img
          className={`${styles.shot} ${styles.after}`}
          src={exhibit.afterSrc}
          alt={exhibit.afterAlt}
          width={710}
          height={1170}
          decoding="async"
        />

        {/* The rule the carriage runs on, ticked like a document's edge scale. */}
        <div className={styles.ruler} aria-hidden="true" />

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.carriage}>
            <CarriageIcon size={20} />
          </span>
        </div>

        <span className={`${styles.tag} ${styles.tagBefore}`} aria-hidden="true">
          {exhibit.beforeLabel}
        </span>
        <span className={`${styles.tag} ${styles.tagAfter}`} aria-hidden="true">
          {exhibit.afterLabel}
        </span>

        <input
          className={styles.range}
          id={labelId}
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${exhibit.heading}. ${exhibit.control}`}
          aria-valuetext={valueText}
        />
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.control}>{exhibit.control}</span>
        <span className={styles.note}>{exhibit.note}</span>
      </figcaption>
    </figure>
  );
}
