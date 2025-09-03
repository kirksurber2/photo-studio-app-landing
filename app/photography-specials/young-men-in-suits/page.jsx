'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import GallerySlider from '../components/GallerySlider';
import styles from './page.module.css';

export default function Page() {
  useEffect(() => {
    document.title = 'Young Men in Suits — Studio Event | Nov 15';
  }, []);

  // Replace with your real images (S3/CloudFront or /public). Works fine with 1–2 images.
  const images = [
    {
      src: '/photos/son-suit-1.jpg', // e.g., public/photos/son-suit-1.jpg
      title: 'Sharp & Confident',
      caption: 'Studio portrait in classic black & white',
    },
    {
      src: '/photos/son-suit-2.jpg',
      title: 'Editorial Profile',
      caption: 'Modern lighting, clean lines',
    },
  ];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    acknowledgeMin: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.acknowledgeMin) return;
    // TODO: wire to your API (e.g., /api/leads) with challenge/source tags
    // await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ ...form, source: 'young-men-in-suits-landing' }) })
    setSubmitted(true);
  };

  return (
    <main className={`${styles.mensLanding} ${styles.page}`}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.navBrand}>
          <div className={styles.logoCircle} aria-hidden />
          <span className={styles.brandText}>Your Studio</span>
        </div>

        <div className={styles.heroInner}>
          <div className={styles.badges}>
            <span className={styles.badgeDate}>One Day Only — Nov 15</span>
            <span className={styles.badgeMin}>Minimum Spend: $1,500</span>
          </div>

          <h1 className={styles.h1}>
            Young Men in Suits <span className={styles.hl}>Studio Event</span>
          </h1>
          <p className={styles.subtitle}>
            Bold, timeless portraits designed for standout graduation, portfolio, or professional branding—perfect for black & white or deep, dramatic color.
          </p>

          <div className={styles.ctaRow}>
            <a href="#reserve" className={styles.primaryCta}>Request a Spot</a>
            <a href="#collections" className={styles.secondaryCta}>View Artwork Options</a>
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <section className={styles.sliderWrap}>
        <GallerySlider
          images={images}
          aspect="62.5%"  // ~8:5 suits/taller crops nicely; try "66%" for 3:2
          autoplay
          interval={4200}
          showDots
          showArrows
        />
        <p className={styles.sliderNote}>Styled for darker and black-and-white imagery.</p>
      </section>

      {/* PRODUCTS / COLLECTIONS */}
      <section id="collections" className={styles.products}>
        <h2 className={styles.sectionTitle}>Artwork & Presentation</h2>
        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <div className={styles.cardHead}>
              <h3>Folio Boxes</h3>
              <span className={styles.pill}>Portfolio-Ready</span>
            </div>
            <p className={styles.lead}>
              A refined presentation—perfect for gifting or building a legacy portfolio.
            </p>
            <ul className={styles.list}>
              <li>10–20 matted prints (8x10 or 11x14 mats)</li>
              <li>Archival fine-art paper with deep blacks</li>
              <li>Optional engraved lid & premium lining</li>
            </ul>
          </article>

          <article className={`${styles.card} ${styles.cardAlt}`}>
            <div className={styles.cardHead}>
              <h3>Pre-Mounted Wall Art</h3>
              <span className={styles.pillAccent}>Ready to Hang</span>
            </div>
            <p className={styles.lead}>
              Clean edges and modern finish—ideal for bold, monochrome portraits.
            </p>
            <ul className={styles.list}>
              <li>Popular sizes: 16x20, 20x30, 24x36</li>
              <li>Matte, metal, or acrylic mount options</li>
              <li>Installation guidance available</li>
            </ul>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHead}>
              <h3>Collections</h3>
              <span className={styles.pill}>Curated Sets</span>
            </div>
            <p className={styles.lead}>
              Cohesive groupings designed to elevate a hallway, office, or living space.
            </p>
            <ul className={styles.list}>
              <li><strong>Classic Trio</strong>: 20x30 + (2) 16x20</li>
              <li><strong>Statement Four</strong>: 24x36 + (3) 16x20</li>
              <li><strong>Grid Six</strong>: (6) 12x18 for editorial rhythm</li>
            </ul>
          </article>
        </div>
        <p className={styles.smallNote}>All artwork meets the $1,500 minimum spend across products and collections.</p>
      </section>

      {/* MINIMUM SPEND EXPLAINER */}
      <section className={styles.minimum}>
        <h2 className={styles.sectionTitle}>How the Minimum Works</h2>
        <div className={styles.minBox}>
          <ul className={styles.minList}>
            <li>Your session fee is credited toward your artwork purchase.</li>
            <li>Choose from folio boxes, pre-mounted wall art, or curated collections.</li>
            <li>Most clients invest $1,800–$3,200+ depending on selection.</li>
          </ul>
          <div className={styles.minAside}>
            <div className={styles.minBadge}>$1,500 Minimum</div>
            <p>Locked to Nov 15 studio event. Limited time and limited availability.</p>
          </div>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section id="reserve" className={styles.reserve}>
        <div className={styles.formWrap}>
          <h2 className={styles.sectionTitle}>Request Your Nov 15 Studio Spot</h2>
          <p className={styles.formSub}>We’ll reach out to confirm time slots and artwork planning. Limited availability.</p>
          {submitted ? (
            <div className={styles.successBox}>Thanks! We’ll be in touch shortly to confirm your time and details.</div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.twocol}>
                <label className={styles.label}>
                  Full Name
                  <input
                    className={styles.input}
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </label>
                <label className={styles.label}>
                  Email
                  <input
                    className={styles.input}
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@email.com"
                  />
                </label>
              </div>
              <div className={styles.twocol}>
                <label className={styles.label}>
                  Phone
                  <input
                    className={styles.input}
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 555-5555"
                  />
                </label>
                <label className={styles.label}>
                  Notes (optional)
                  <input
                    className={styles.input}
                    type="text"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Sizing goals, display wall, suit color, etc."
                  />
                </label>
              </div>

              <label className={`${styles.label} ${styles.ack}`}>
                <input
                  type="checkbox"
                  checked={form.acknowledgeMin}
                  onChange={(e) => setForm({ ...form, acknowledgeMin: e.target.checked })}
                  required
                />
                I understand there is a <strong>$1,500 minimum spend</strong> on artwork for this event.
              </label>

              <button className={styles.submit} type="submit" disabled={!form.acknowledgeMin}>
                Request My Session
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <details className={styles.details}>
          <summary>What should we wear?</summary>
          <p>Sharp suit or tux, pressed shirt, simple tie or open collar. Avoid heavy patterns; dark tones look incredible in black & white.</p>
        </details>
        <details className={styles.details}>
          <summary>How long is the session?</summary>
          <p>Sessions are designed around one focused look to create iconic portraits efficiently on Nov 15.</p>
        </details>
        <details className={styles.details}>
          <summary>When do we choose products?</summary>
          <p>We’ll schedule a design & ordering appointment after your session to select folio prints, wall art, or a collection.</p>
        </details>
      </section>

      {/* STICKY CTA */}
      <div className={styles.stickyCta}>
        <div className={styles.stickyText}>
          <strong>Nov 15 • Studio Event</strong> — Limited Spots • $1,500 Minimum Spend
        </div>
        <a href="#reserve" className={styles.stickyBtn}>Request a Spot</a>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} Your Studio. All rights reserved.</div>
        <nav className={styles.footerNav}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
