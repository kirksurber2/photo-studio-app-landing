'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PricingPlansWithAddOns.module.css';

export default function PricingPlansWithAddOns({
  heading = 'Compare Plans & Power-Ups',
  variant = 'default',
  starter = {},
  pro = {},
  addOns = {},
}) {
  const starterDefaults = {
    title: 'Starter',
    launchPrice: '$29',
    regularPrice: '$59',
    ctaText: 'Start Free Trial',
    ctaHref: '/signup?plan=starter',
    usersNote: '1 user',
    features: [
      '600 Image Storage',
      'Favorites in Galleries',
      'Order Tracking by Image',
      'COGS & Profit Dashboard (basic)',
      'Basic Online Ordering',
      'Unbranded Email/SMS Reminders',
      'Limited Workflows (linear)',
      'Model Release Signing',
      'Standard Email Support',
    ],
  };

  const proDefaults = {
    title: 'Pro',
    price: '$99',
    ctaText: 'Upgrade to Pro',
    ctaHref: '/signup?plan=pro',
    features: [
      'Unlimited Users & Roles',
      '2000+ Image Storage (expandable)',
      'Favorites + Client Engagement Analytics',
      'Order Tracking + Exportable Reports',
      'COGS & Profit Dashboard (advanced)',
      'Advanced Wall Display Tool (scale to wall)',
      'Fully Customizable E-commerce & Pricing',
      'Branded Email/SMS + Custom Templates',
      'Unlimited Workflows with Conditions',
      'Contract Signing & Management',
      'Editor File Transfer & Ordering',
      'Client Mobile App (PWA)',
      'Priority Support',
    ],
  };

  const addOnDefaults = {
    show: true,
    businessLine: {
      title: 'Business Line (Single Number)',
      description:
        'Dedicated phone number for calls & SMS, fully integrated with leads and clients.',
      priceText: '$9–$15/mo + usage',
      ctaText: 'Add Business Line',
      ctaHref: '/billing/addons?addon=business-line',
    },
    callTeamTool: {
      title: 'Call Team Tool (Usage Tiers)',
      description:
        'High-volume calling inside your CRM: multi-caller access, call logging, notes, booking status, and analytics.',
      overageText: '$0.02/min overage',
      tiers: [
        { name: 'Starter', minutes: 2500, estCalls: 165, price: '$29/mo' },
        { name: 'Growth', minutes: 5000, estCalls: 330, price: '$49/mo' },
        { name: 'Pro', minutes: 10000, estCalls: 660, price: '$79/mo' },
        { name: 'Enterprise', minutes: 20000, estCalls: 1320, price: 'Custom' },
      ],
      ctaText: 'Choose Tier',
      ctaHref: '/billing/addons?addon=call-team-tool',
    },
  };

  const s = { ...starterDefaults, ...starter };
  const p = { ...proDefaults, ...pro };
  const ao = { ...addOnDefaults, ...addOns };

  const rootClass = [
    styles.section,
    variant === 'compact' ? styles.compact : '',
  ].join(' ');

  const StarterCTA = () =>
    s.ctaHref ? (
      <Link href={s.ctaHref} className={styles.btn}>
        {s.ctaText}
      </Link>
    ) : (
      <button className={styles.btn}>{s.ctaText}</button>
    );

  const ProCTA = () =>
    p.ctaHref ? (
      <Link href={p.ctaHref} className={`${styles.btn} ${styles.btnPrimary}`}>
        {p.ctaText}
      </Link>
    ) : (
      <button className={`${styles.btn} ${styles.btnPrimary}`}>{p.ctaText}</button>
    );

  return (
    <section className={rootClass} aria-label="Pricing plans and add-ons">
      {heading && <h2 className={styles.title}>{heading}</h2>}

      {/* Plans */}
      <div className={styles.planGrid}>
        {/* Starter */}
        <article className={`${styles.card} ${styles.starter}`} aria-label={`${s.title} plan`}>
          <header className={styles.cardHeader}>
            <h3 className={styles.planTitle}>{s.title}</h3>
            <p className={styles.priceRow}>
              <span className={styles.emph}>{s.launchPrice}</span>
              <span className={styles.perMonth}>/mo</span>
            </p>
            {s.regularPrice && (
              <p className={styles.regularWrap}>
                <span className={styles.oldPrice}>{s.regularPrice}</span>
                <span className={styles.oldPriceNote}>reg</span>
              </p>
            )}
            {s.usersNote && <p className={styles.usersNote}>{s.usersNote}</p>}
          </header>

          <ul className={styles.featureList}>
            {s.features.map((f, i) => (
              <li key={`s-${i}`} className={styles.featureItem}>
                <span className={styles.bullet} aria-hidden>
                  •
                </span>
                {f}
              </li>
            ))}
          </ul>

          <StarterCTA />
        </article>

        {/* Pro */}
        <article className={`${styles.card} ${styles.pro}`} aria-label={`${p.title} plan`}>
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              <h3 className={styles.planTitle}>{p.title}</h3>
              <span className={styles.badge}>Best Value</span>
            </div>
            <p className={styles.priceRow}>
              <span className={`${styles.emph} ${styles.proPrice}`}>{p.price}</span>
              <span className={styles.perMonth}>/mo</span>
            </p>
          </header>

          <ul className={styles.featureList}>
            {p.features.map((f, i) => (
              <li key={`p-${i}`} className={styles.featureItem}>
                <span className={styles.bullet} aria-hidden>
                  •
                </span>
                {f}
              </li>
            ))}
          </ul>

          <ProCTA />
        </article>
      </div>

      {/* Add-Ons */}
      {ao.show && (
        <div className={styles.addOns}>
          <h3 className={styles.subTitle}>Optional Add-Ons</h3>

          <div className={styles.addOnGrid}>
            {/* Business Line */}
            <article className={`${styles.card} ${styles.addonCard}`} aria-label="Business line add-on">
              <header className={styles.addonHeader}>
                <h4 className={styles.addonTitle}>{ao.businessLine.title}</h4>
                <span className={styles.pill}>{ao.businessLine.priceText}</span>
              </header>
              <p className={styles.addonDesc}>{ao.businessLine.description}</p>
              {ao.businessLine.ctaHref ? (
                <Link href={ao.businessLine.ctaHref} className={styles.btn}>
                  {ao.businessLine.ctaText}
                </Link>
              ) : (
                <button className={styles.btn}>{ao.businessLine.ctaText}</button>
              )}
            </article>

            {/* Call Team Tool */}
            <article className={`${styles.card} ${styles.addonCard}`} aria-label="Call team tool add-on">
              <header className={styles.addonHeader}>
                <h4 className={styles.addonTitle}>{ao.callTeamTool.title}</h4>
                <span className={styles.pill}>{ao.callTeamTool.overageText}</span>
              </header>
              <p className={styles.addonDesc}>{ao.callTeamTool.description}</p>

              <div className={styles.tierTable} role="table" aria-label="Call Team Tool tiers">
                <div className={`${styles.tierRow} ${styles.tierHeader}`} role="row">
                  <div role="columnheader">Tier</div>
                  <div role="columnheader">Minutes</div>
                  <div role="columnheader">Est. Calls</div>
                  <div role="columnheader">Price</div>
                </div>
                {ao.callTeamTool.tiers.map((t, i) => (
                  <div key={i} className={styles.tierRow} role="row">
                    <div role="cell">{t.name}</div>
                    <div role="cell">{t.minutes.toLocaleString()}</div>
                    <div role="cell">{t.estCalls ? `~${t.estCalls}` : '—'}</div>
                    <div role="cell">{t.price}</div>
                  </div>
                ))}
              </div>

              {ao.callTeamTool.ctaHref ? (
                <Link href={ao.callTeamTool.ctaHref} className={`${styles.btn} ${styles.btnPrimary}`}>
                  {ao.callTeamTool.ctaText}
                </Link>
              ) : (
                <button className={`${styles.btn} ${styles.btnPrimary}`}>{ao.callTeamTool.ctaText}</button>
              )}
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
