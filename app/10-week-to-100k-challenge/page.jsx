'use client'
import Head from "next/head";
import { useMemo, useState } from "react";
import styles from "../styles/FallPlan.module.css";

export default function FallPlanPage() {
  // --- Calculator state ---
  const [goal, setGoal] = useState(100000);
  const [weeks, setWeeks] = useState(10);
  const [avgSale, setAvgSale] = useState(1000);

  const metrics = useMemo(() => {
    const totalSales = Math.ceil(goal / avgSale || 0);
    const perWeek = Math.ceil(totalSales / (weeks || 1));
    return { totalSales, perWeek };
  }, [goal, weeks, avgSale]);

  // --- Data: Packages, Session Types, Timeline ---
  const packages = [
    {
      name: "Essential",
      price: 699,
      highlight: "Best for budget-friendly keepsakes",
      features: [
        "Session included",
        "One 11×14 wall print OR 10 small digitals",
        "Pre-session style guide",
      ],
      cta: "Book Essential",
    },
    {
      name: "Signature",
      price: 1000,
      highlight: "Most popular — best value",
      features: [
        "Session included",
        "One 16×24 wall print",
        "15 curated digitals",
        "$100 wall-art credit",
      ],
      featured: true,
      cta: "Book Signature",
    },
    {
      name: "Heirloom",
      price: 2499,
      highlight: "For statement walls & gifts",
      features: [
        "Session included",
        "Wall art collection (up to 3 pieces, 16×24+)",
        "Full gallery digitals",
        "Gift prints for family",
      ],
      cta: "Book Heirloom",
    },
  ];

  const sessionTypes = [
    { title: "Family Portraits", tag: "Families", desc: "Fall colors, parks, cozy at-home lifestyle." },
    { title: "Generational / Legacy", tag: "Families", desc: "Grandparents + kids + grandkids = multi-piece orders." },
    { title: "Couples ‘Fall in Love’", tag: "Couples", desc: "Romantic sessions for holiday cards & wall art." },
    { title: "Young Men in Suits", tag: "Seniors", desc: "Timeless portraits; great for parents’ wall pieces." },
    { title: "Luxury Pet Portraits", tag: "Pets", desc: "Pet + owner; high emotional value = big art." },
    { title: "Branding Headshots", tag: "Business", desc: "Teams & solo—great weekday filler revenue." },
    { title: "Holiday Card Minis", tag: "Minis", desc: "High-volume slots to fill gaps and drive referrals." },
    { title: "Fine Art B&W", tag: "Heirloom", desc: "Timeless, gallery-style statement portraits." },
  ];

  const timeline = [
    {
      range: "Weeks 1–2",
      title: "Go-to-Market Blitz",
      points: [
        "Launch promo: 50% off session fee.",
        "25% off wall art 16×24+ for orders at reveal.",
        "Run geo-targeted FB/IG ads (affluent ZIPs).",
        "Partnerships: pet boutiques, salons, kids’ boutiques, realtors.",
        "Lead magnet: “5 Must-Have Fall Family Portrait Ideas.”",
        "Book 50–70% of target sessions.",
      ],
    },
    {
      range: "Weeks 3–6",
      title: "Fulfillment + Sales Engine",
      points: [
        "Shoot 2–3 days/week; 4–6 sessions/day.",
        "Same/next-day reveal & ordering appointments.",
        "Show Heirloom first; position Signature as best value.",
        "Post BTS & reveals; push referrals ($100 print credit both ways).",
      ],
    },
    {
      range: "Weeks 7–10",
      title: "Final Push + Holiday Cutoffs",
      points: [
        "Last-chance fall weekends + mini events.",
        "Holiday gift certificates campaign.",
        "Album & gift print upsells.",
        "“Production cutoff” urgency for wall art delivery.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>$100k Fall Portrait Plan — Glassmorphic Page</title>
        <meta
          name="description"
          content="A complete go-to-market and fulfillment plan for photographers to gross $100k Sept–mid-Nov with glassmorphic design."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.page}>
        {/* Background decorations */}
        <div className={styles.bgGradient} />
        <div className={styles.bgGlassBlur} />

        {/* Hero */}
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Fall 2025 — Sept → 2nd Week Nov</div>
            <h1 className={styles.title}>
              The $100k Fall Portrait <span className={styles.accent}>Playbook</span>
            </h1>
            <p className={styles.subtitle}>
              From scratch, no studio needed. Glass-clear steps to fill your calendar, sell wall art, and average{" "}
              <strong>$1,000</strong> per sale.
            </p>

            <div className={styles.promoStrip}>
              <div className={styles.promoCard}>
                <span className={styles.promoEmoji}>💥</span>
                <div>
                  <strong>50% OFF Session Fee</strong>
                  <div className={styles.promoNote}>Low friction booking incentive.</div>
                </div>
              </div>
              <div className={styles.promoCard}>
                <span className={styles.promoEmoji}>🖼️</span>
                <div>
                  <strong>25% OFF 16×24+ Wall Art</strong>
                  <div className={styles.promoNote}>Reward decisive buyers at the reveal.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className={styles.section}>
          <div className={styles.glassCard}>
            <h2 className={styles.h2}>Revenue Calculator</h2>
            <p className={styles.muted}>Tune your targets and see weekly requirements instantly.</p>

            <div className={styles.calcGrid}>
              <label className={styles.field}>
                <span>Gross Goal ($)</span>
                <input
                  type="number"
                  value={goal}
                  min={10000}
                  step={5000}
                  onChange={(e) => setGoal(Number(e.target.value))}
                />
              </label>

              <label className={styles.field}>
                <span>Timeframe (weeks)</span>
                <input
                  type="number"
                  value={weeks}
                  min={4}
                  max={12}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                />
              </label>

              <label className={styles.field}>
                <span>Average Sale ($)</span>
                <input
                  type="number"
                  value={avgSale}
                  min={500}
                  step={50}
                  onChange={(e) => setAvgSale(Number(e.target.value))}
                />
              </label>
            </div>

            <div className={styles.kpiRow}>
              <div className={styles.kpi}>
                <div className={styles.kpiLabel}>Total Sales Needed</div>
                <div className={styles.kpiValue}>{metrics.totalSales}</div>
              </div>
              <div className={styles.kpi}>
                <div className={styles.kpiLabel}>Sales per Week</div>
                <div className={styles.kpiValue}>{metrics.perWeek}</div>
              </div>
              <div className={styles.kpiSecondary}>
                Aim to book ~20% more sessions than needed to protect your average.
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Packages</h2>
          <p className={styles.muted}>
            Anchor with <strong>Heirloom</strong>, make <strong>Signature</strong> the no-brainer, and keep{" "}
            <strong>Essential</strong> as an on-ramp.
          </p>

          <div className={styles.packages}>
            {packages.map((p) => (
              <div
                key={p.name}
                className={`${styles.packageCard} ${p.featured ? styles.packageFeatured : ""}`}
              >
                <div className={styles.packageHeader}>
                  <h3>{p.name}</h3>
                  <div className={styles.price}>
                    ${p.price.toLocaleString()}
                    <span className={styles.priceNote}> + tax</span>
                  </div>
                  <div className={styles.highlight}>{p.highlight}</div>
                </div>

                <ul className={styles.featureList}>
                  {p.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <button className={styles.ctaBtn} type="button">
                  {p.cta} →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Session Types */}
        <section className={styles.section}>
          <h2 className={styles.h2}>High-Yield Session Types (Fall)</h2>
          <p className={styles.muted}>Mix volume (minis) with high AOV (families, legacy, couples, pets).</p>

          <div className={styles.sessionGrid}>
            {sessionTypes.map((s) => (
              <div key={s.title} className={styles.sessionCard}>
                <div className={styles.sessionTag}>{s.tag}</div>
                <h3 className={styles.sessionTitle}>{s.title}</h3>
                <p className={styles.sessionDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sales Flow */}
        <section className={styles.section}>
          <div className={styles.glassCard}>
            <h2 className={styles.h2}>Sales Flow for $1k Average</h2>
            <ol className={styles.stepsList}>
              <li>
                <strong>Pre-Session Consult:</strong> Show wall art samples, price menu, ask about their walls & style.
              </li>
              <li>
                <strong>Session:</strong> Create 1–2 hero images for large prints; shoot variety (family, couples,
                individuals).
              </li>
              <li>
                <strong>Reveal & Order:</strong> Same/next day. Present Heirloom first, then Signature. Time-boxed
                incentives for upgrades.
              </li>
            </ol>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.section}>
          <h2 className={styles.h2}>10-Week Timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((t) => (
              <div key={t.range} className={styles.timelineCard}>
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineRange}>{t.range}</span>
                  <h3 className={styles.timelineTitle}>{t.title}</h3>
                </div>
                <ul className={styles.timelineList}>
                  {t.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.glassCard}>
            <h2 className={styles.h2}>Ready to run the play?</h2>
            <p className={styles.muted}>
              Batch your shoots, book reveal appointments within 48 hours, and keep Signature front-and-center.
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.ctaPrimary} type="button">
                Plan a Mini-Session Weekend
              </button>
              <button className={styles.ctaGhost} type="button">
                Download Price Menu
              </button>
            </div>
            <div className={styles.disclaimer}>
              *Promotions apply to orders placed at the reveal appointment. Availability limited; production cutoffs apply.
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <span>© {new Date().getFullYear()} Fall Portraits • Build your best season</span>
            <span className={styles.dot}>•</span>
            <span>Made for on-location photographers (no studio required)</span>
          </div>
        </footer>
      </main>
    </>
  );
}
