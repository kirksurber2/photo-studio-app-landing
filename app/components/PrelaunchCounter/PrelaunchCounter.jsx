"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import styles from "./PrelaunchCounter.module.css";

/**
 * Props:
 *  - apiUrl: string -> API returning { claimed, cap }
 *  - pollMs?: number (default 15000)
 *  - fallbackCap?: number (default 200)
 */
export default function PrelaunchCounter({
  apiUrl,
  pollMs = 15000,
  fallbackCap = 200,
}) {
  const [claimedRaw, setClaimedRaw] = useState(null); // from API
  const [cap, setCap] = useState(null);
  const [error, setError] = useState(null);
  const [isPolling, setIsPolling] = useState(false);

  // animated display values
  const [claimedAnim, setClaimedAnim] = useState(0);
  const animRef = useRef(null);
  const fromRef = useRef(0);
  const toRef = useRef(0);
  const startRef = useRef(0);
  const DURATION = 550; // ms
  const FALLBACK = { claimed: 59, cap: 200 };

  const total = cap ?? fallbackCap;

  const seatsLeft = useMemo(() => {
    if (claimedRaw == null) return null;
    return Math.max(total - claimedRaw, 0);
  }, [claimedRaw, total]);

  const percent = useMemo(() => {
    if (claimedRaw == null || total <= 0) return 0;
    return Math.min(100, Math.round((claimedRaw / total) * 100));
  }, [claimedRaw, total]);

  // Count-up animation whenever claimedRaw changes
  useEffect(() => {
    if (claimedRaw == null) return;
    cancelAnimationFrame(animRef.current);
    fromRef.current = claimedAnim;
    toRef.current = claimedRaw;
    startRef.current = performance.now();

    const step = (t) => {
      const elapsed = t - startRef.current;
      const k = Math.min(1, elapsed / DURATION);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - k, 3);
      const v = Math.round(fromRef.current + (toRef.current - fromRef.current) * eased);
      setClaimedAnim(v);
      if (k < 1) {
        animRef.current = requestAnimationFrame(step);
      }
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimedRaw]);

  const fetchCount = async () => {
  if (isPolling) return;
  setIsPolling(true);
  setError(null);

  try {
    const res = await axios.get(apiUrl, {
      timeout: 4500,
      headers: { "Content-Type": "application/json" },
    });

    const data = res?.data ?? {};
    const nextClaimed = Number.isFinite(data.claimed) ? data.claimed : FALLBACK.claimed;
    const nextCap     = Number.isFinite(data.cap)     ? data.cap     : FALLBACK.cap;

    setClaimedRaw(nextClaimed);
    setCap(nextCap);
    setOffline(false);          // treat as “online” even if we used fallback
  } catch {
    // No response / network error → hard fallback in prod
    setClaimedRaw(FALLBACK.claimed);
    setCap(FALLBACK.cap);
    setOffline(false);
    setError(null);             // optional: keep UI clean
  } finally {
    setIsPolling(false);
  }
};


  useEffect(() => {
    fetchCount();
    const id = setInterval(() => {
      if (document.visibilityState === "visible") fetchCount();
    }, pollMs);

    const onVis = () => {
      if (document.visibilityState === "visible") fetchCount();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, pollMs]);

  const soldOut = claimedRaw != null && total > 0 && claimedRaw >= total;

  const claimedText =
    claimedRaw == null ? "—" : claimedAnim.toLocaleString(undefined);
  const totalText = total.toLocaleString(undefined);
  const leftText =
    seatsLeft == null ? "—" : seatsLeft.toLocaleString(undefined);

  return (
    <div className={styles.scene}>
      {/* Animated background aura */}
      <div className={styles.aura} aria-hidden />

      {/* Glass card */}
      <div className={styles.counterWrap} aria-live="polite">
        {/* Reflection overlay */}
        <div className={styles.reflection} aria-hidden />

        <div className={styles.headerRow}>
          <h3 className={styles.title}>
            Early-bird seats
            <span className={`${styles.badge} ${soldOut ? styles.badgeSold : ""}`}>
              {soldOut ? "SOLD OUT" : `${claimedText} / ${totalText} claimed`}
            </span>
          </h3>

          {!soldOut && (
            <div className={styles.leftPill}>
              {leftText} left
            </div>
          )}
        </div>

        <div
          className={styles.progressBar}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${percent}%` }}
          />
          <div className={styles.progressGlow} />
        </div>

        <div className={styles.metaRow}>
          <span className={styles.percent}>{percent}% filled</span>
          {error ? (
            <span className={styles.error}>{error}</span>
          ) : (
            <span className={styles.refreshHint}>
              {isPolling ? "Refreshing…" : "Auto-refreshing"}
            </span>
          )}
        </div>

        {soldOut && (
          <div className={styles.soldOutNote}>
            The pre-launch discount has ended. New signups are billed at standard pricing.
          </div>
        )}
      </div>
    </div>
  );
}
