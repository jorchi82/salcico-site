"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Divisions", href: "/#divisions" },
  { label: "Reach", href: "/#reach" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.pill : ""}`}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo} aria-label="SALCICO home">
          {/* Two logos crossfade: white over dark sections, dark on the light pill */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-salcico.svg"
            alt="SALCICO"
            className={`${styles.logoImg} ${styles.logoLight}`}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-salcico-dark.svg"
            alt=""
            aria-hidden="true"
            className={`${styles.logoImg} ${styles.logoDark}`}
          />
        </a>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="/contact" className={styles.cta}>
          Get a Quote
        </a>
      </nav>
    </header>
  );
}
