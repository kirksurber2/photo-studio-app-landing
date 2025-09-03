'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './GallerySlider.module.css';

export default function GallerySlider({
  images = [],
  autoplay = true,
  interval = 4000,
  aspect = '56.25%', // 16:9 -> (9/16)*100
  className = '',
  showDots = true,
  showArrows = true,
  caption = true,
}) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const hoveringRef = useRef(false);
  const pointer = useRef({ active: false, startX: 0, deltaX: 0 });

  const clamp = useCallback(
    (i) => (i + images.length) % images.length,
    [images.length]
  );

  const goTo = useCallback((i) => {
    setIndex((prev) => clamp(typeof i === 'number' ? i : prev));
  }, [clamp]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || images.length < 2) return;
    let id;
    const tick = () => {
      if (!hoveringRef.current && document.visibilityState === 'visible') next();
    };
    id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [autoplay, interval, next, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Pointer (drag/swipe) handling
  const onPointerDown = (e) => {
    pointer.current.active = true;
    pointer.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    pointer.current.deltaX = 0;
  };
  const onPointerMove = (e) => {
    if (!pointer.current.active) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    pointer.current.deltaX = x - pointer.current.startX;
    // Apply a small visual follow effect
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(calc(${-index * 100}% + ${pointer.current.deltaX}px))`;
    }
  };
  const onPointerUp = () => {
    if (!pointer.current.active) return;
    const threshold = 60; // px
    if (pointer.current.deltaX > threshold) prev();
    else if (pointer.current.deltaX < -threshold) next();
    // Reset transform
    if (trackRef.current) {
      trackRef.current.style.transition = '';
      trackRef.current.style.transform = `translateX(${-index * 100}%)`;
    }
    pointer.current.active = false;
    pointer.current.deltaX = 0;
  };

  // Sync transform on index change
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 420ms cubic-bezier(.22,.61,.36,1)';
      trackRef.current.style.transform = `translateX(${-index * 100}%)`;
    }
  }, [index]);

  return (
    <section
      className={`${styles.slider} ${className}`}
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
      aria-roledescription="carousel"
      aria-label="Featured photography"
    >
      <div
        className={styles.viewport}
        style={{ '--aspect': aspect }}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        <div className={styles.track} ref={trackRef}>
          {images.map((img, i) => (
            <figure
              key={i}
              className={styles.slide}
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <Image
                src={img.src}
                alt={img.alt || 'Portfolio image'}
                fill
                sizes="(max-width: 980px) 100vw, 1080px"
                priority={i === 0}
                placeholder={img.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={img.blurDataURL}
                className={styles.image}
              />
              <div className={styles.grad} aria-hidden />
              {caption && (img.title || img.caption) && (
                <figcaption className={styles.caption}>
                  {img.title && <strong>{img.title}</strong>}
                  {img.caption && <span>{img.caption}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {showArrows && images.length > 1 && (
          <>
            <button
              className={`${styles.arrow} ${styles.prev}`}
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${styles.next}`}
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showDots && images.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Slide dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      )}
    </section>
  );
}
