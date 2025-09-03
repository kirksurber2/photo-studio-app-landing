'use client'

import React, { useEffect, useMemo, useState } from 'react';
import styles from './page.module.css';



const DEADLINE = (() => {
  // set your real deadline here (YYYY-MM-DD)
  const d = new Date();
  d.setDate(d.getDate() + 14); // 14 days from now
  return d.toISOString();
})();

function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, expired: diff <= 0 };
}

const images = [
  {
    src: '/photos/engagement-park-dip.jpg',
    title: 'Golden Hour Romance',
    caption: 'Editorial engagement, downtown park',
  },
  {
    src: '/photos/bridal-veil-motion.jpg',
    title: 'Veil in Motion',
    caption: 'Cinematic bridal portraits',
  },
  {
    src: '/photos/engagement-rooftop.jpg',
    title: 'Rooftop Glow',
    caption: 'City skyline at sunset',
  },
  {
    src: '/photos/bridal-studio.jpg',
    title: 'Studio Elegance',
    caption: 'Classic & timeless lighting',
  },
];

export default function Page() {
  const { days, hours, minutes, seconds, expired } = useCountdown(DEADLINE);
  const [form, setForm] = useState({ name: '', email: '', phone: '', sessionType: 'Engagement', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: wire this up to your API (e.g., /api/leads)
    // await fetch('/api/leads', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true);
  };

  return (
    <main className={`${styles.photographyLanding} ${styles.page}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.navBrand}>
          <div className={styles.logoCircle} aria-hidden />
          <span className={styles.brandText}>Your Studio</span>
        </div>

        <div className={styles.heroInner}>
          <div className={styles.badge}>Limited-Time</div>
          <h1 className={styles.h1}>
            50% Off <span className={styles.highlight}>Engagement</span> & <span className={styles.highlight}>Bridal</span> Sessions
          </h1>
          <p className={styles.subtitle}>
            Elegant, editorial portraits you’ll treasure forever. Limited spots—book before the offer ends.
          </p>

          <div className={styles.countdown} role="timer" aria-live="polite">
            {expired ? (
              <div className={styles.countItem}>Offer ended</div>
            ) : (
              <>
                <div className={styles.countItem}><strong>{String(days).padStart(2, '0')}</strong><span>Days</span></div>
                <div className={styles.countItem}><strong>{String(hours).padStart(2, '0')}</strong><span>Hours</span></div>
                <div className={styles.countItem}><strong>{String(minutes).padStart(2, '0')}</strong><span>Mins</span></div>
                <div className={styles.countItem}><strong>{String(seconds).padStart(2, '0')}</strong><span>Secs</span></div>
              </>
            )}
          </div>

          <div className={styles.ctaRow}>
            <a href="#reserve" className={styles.primaryCta}>Reserve My Spot</a>
            <a href="#packages" className={styles.secondaryCta}>View Packages</a>
          </div>

          <ul className={styles.trustList}>
            <li>Professional Hair & Pose Guidance</li>
            <li>Museum-Quality Print Options</li>
            <li>Easy Scheduling & Reminders</li>
          </ul>
        </div>
      </section>

      {/* Social proof strip */}
      <section className={styles.pressStrip}>
       <GallerySlider
          images={images}
          aspect="55%"      // tweak for your crops (e.g., "66%" for 3:2)
          autoplay
          interval={4200}
          showDots
          showArrows
        />
      </section>

      {/* Packages */}
      <section id="packages" className={styles.packages}>
        <h2 className={styles.sectionTitle}>Choose Your Session</h2>
        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Engagement Petite</h3>
              <span className={styles.pill}>Best Starter</span>
            </div>
            <p className={styles.cardLead}>Romantic, editorial mini to celebrate your “Yes!”</p>
            <ul className={styles.featureList}>
              <li>45-minute session</li>
              <li>1 location, 1 outfit</li>
              <li>3 retouched images included</li>
              <li>Private online proofing</li>
            </ul>
            <div className={styles.priceRow}>
              <span className={styles.strike}>$499</span>
              <span className={styles.price}>$249</span>
            </div>
            <a href="#reserve" className={styles.cardCta}>Reserve</a>
          </article>

          <article className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.cardHeader}>
              <h3>Bridal Signature</h3>
              <span className={styles.pillAccent}>Most Popular</span>
            </div>
            <p className={styles.cardLead}>Cinematic portraits in your gown—timeless & luxurious.</p>
            <ul className={styles.featureList}>
              <li>90-minute session</li>
              <li>Studio or on-location</li>
              <li>Professional posing guidance</li>
              <li>5 retouched images included</li>
            </ul>
            <div className={styles.priceRow}>
              <span className={styles.strike}>$899</span>
              <span className={styles.price}>$449</span>
            </div>
            <a href="#reserve" className={styles.cardCtaPrimary}>Reserve</a>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Engagement Luxe</h3>
              <span className={styles.pill}>Editorial</span>
            </div>
            <p className={styles.cardLead}>Fashion-forward portraits for bold, modern couples.</p>
            <ul className={styles.featureList}>
              <li>2-hour session</li>
              <li>2 locations, 2 outfits</li>
              <li>8 retouched images included</li>
              <li>Album & wall art upgrades</li>
            </ul>
            <div className={styles.priceRow}>
              <span className={styles.strike}>$1,299</span>
              <span className={styles.price}>$649</span>
            </div>
            <a href="#reserve" className={styles.cardCta}>Reserve</a>
          </article>
        </div>
        <p className={styles.smallNote}>* Products & artwork sold separately. Ask about album + wall art bundles.</p>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Brides Say</h2>
        <div className={styles.testiGrid}>
          <figure className={styles.testi}>
            <blockquote>“I’ve never felt more beautiful. The photos look like a magazine spread!”</blockquote>
            <figcaption>— Ashley M.</figcaption>
          </figure>
          <figure className={styles.testi}>
            <blockquote>“Effortless experience from booking to prints. We’re obsessed.”</blockquote>
            <figcaption>— Jordan & Rae</figcaption>
          </figure>
          <figure className={styles.testi}>
            <blockquote>“Posing guidance was a game-changer. Instant confidence.”</blockquote>
            <figcaption>— Priya S.</figcaption>
          </figure>
        </div>
      </section>

      {/* Lead form */}
      <section id="reserve" className={styles.reserve}>
        <div className={styles.formWrap}>
          <h2 className={styles.sectionTitle}>Reserve Your 50% Off Session</h2>
          <p className={styles.formSub}>No payment due now—save your spot and we’ll follow up with available dates.</p>
          {submitted ? (
            <div className={styles.successBox} role="status">
              Thank you! Your request has been received. We’ll reach out shortly to confirm.
            </div>
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
                    placeholder="Jane Doe"
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
                    placeholder="jane@email.com"
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
                  Session Type
                  <select
                    className={styles.input}
                    value={form.sessionType}
                    onChange={(e) => setForm({ ...form, sessionType: e.target.value })}
                  >
                    <option>Engagement</option>
                    <option>Bridal</option>
                  </select>
                </label>
              </div>
              <label className={styles.label}>
                Notes (optional)
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  rows={4}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Share your vision, locations you love, dates, etc."
                />
              </label>
              <button className={styles.submit} type="submit" aria-label="Submit reservation request">
                Save My 50% Off Spot
              </button>
            </form>
          )}
          <div className={styles.guarantee}>
            <span className={styles.check} aria-hidden>✓</span>
            <span>No spam. No pressure. We’ll confirm dates & details together.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <details className={styles.details}>
          <summary>What’s included with the session?</summary>
          <p>Time with your photographer, expert posing guidance, and a selection of retouched images (see packages). Artwork and albums available separately.</p>
        </details>
        <details className={styles.details}>
          <summary>How do I lock in the 50% off?</summary>
          <p>Submit the form to hold your spot. We’ll reach out with available dates. Your discount is secured when you confirm your date.</p>
        </details>
        <details className={styles.details}>
          <summary>Can I add hair & makeup?</summary>
          <p>Yes! We can recommend trusted artists or add it to your session.</p>
        </details>
      </section>

      {/* Sticky footer CTA */}
      <div className={styles.stickyCta}>
        <div className={styles.stickyText}><strong>50% Off</strong> Engagement & Bridal Sessions — Limited Spots</div>
        <a href="#reserve" className={styles.stickyBtn}>Reserve Now</a>
      </div>

      {/* Footer */}
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
