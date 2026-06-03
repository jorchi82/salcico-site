"use client";

import { useState } from "react";
import styles from "../app/contact/contact.module.css";

const DIVISIONS = [
  "Oil & Gas",
  "Maintenance",
  "Logistics",
  "Supplies",
  "Green",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Prototype: compose a mailto so the form is fully functional with no backend.
    const subject = encodeURIComponent(
      `Quote request — ${data.division || "General"} — ${data.company || data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nDivision: ${data.division}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:ventas@salcico.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Full name</span>
          <input name="name" type="text" required placeholder="Jane Doe" />
        </label>
        <label className={styles.field}>
          <span>Company</span>
          <input name="company" type="text" placeholder="Acme Energy" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" required placeholder="jane@acme.com" />
        </label>
        <label className={styles.field}>
          <span>Phone</span>
          <input name="phone" type="tel" placeholder="+52 ..." />
        </label>
      </div>

      <label className={styles.field}>
        <span>Division of interest</span>
        <select name="division" defaultValue="">
          <option value="" disabled>
            Select a division…
          </option>
          {DIVISIONS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>What do you need supplied, maintained or delivered?</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your requirement, timeline and location…"
        />
      </label>

      <button type="submit" className={styles.submit}>
        {sent ? "Opening your email…" : "Send request →"}
      </button>
      <p className={styles.note}>
        Or write us directly at{" "}
        <a href="mailto:ventas@salcico.com">ventas@salcico.com</a>. Our teams
        typically reply within minutes.
      </p>
    </form>
  );
}
