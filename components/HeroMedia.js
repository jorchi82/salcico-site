"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../app/page.module.css";

export default function HeroMedia() {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Respect reduced-motion: skip the video, hold the poster.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setEnded(true);
      return;
    }

    const onEnded = () => setEnded(true);
    const onError = () => setEnded(true); // assets missing → hold the poster

    v.addEventListener("ended", onEnded);
    v.addEventListener("error", onError, true);

    // Kick off playback. The video is visible from the start (showing its
    // poster frame while it buffers), so there's no canplay race to win.
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });

    return () => {
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("error", onError, true);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <div className={styles.heroMedia} aria-hidden="true">
      {/* Static frame underneath — revealed once the intro video ends */}
      <div className={styles.heroPoster} />

      {/* Intro video — visible from load, fades to the poster when it ends */}
      <video
        ref={videoRef}
        className={`${styles.heroVideo} ${ended ? styles.heroVideoHidden : ""}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/hero/hero-poster.jpg"
      >
        <source src="/hero/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Steel-blue color treatment + contrast scrim for the headline */}
      <div className={styles.heroTint} />
      <div className={styles.heroScrim} />
    </div>
  );
}
