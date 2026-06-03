"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up. Accepts a display value like "68+", "10+", "5".
 * Parses the leading number, counts from 0 to it on scroll-in, and
 * re-appends any suffix (e.g. "+").
 */
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  const target = parseInt(String(value).replace(/\D/g, ""), 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    let raf;
    let started = false;
    const run = (start) => {
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutExpo for a punchy, decelerating count
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setDisplay(Math.round(eased * target));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          run(performance.now());
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
