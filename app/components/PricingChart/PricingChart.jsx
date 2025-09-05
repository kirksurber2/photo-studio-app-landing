'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PricingChart.module.css';

export default function PricingChart() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Compare Plans & Power-Ups</h2>
        
        {/* Main Plans */}
        <div className={styles.plansGrid}>
          {/* Starter Plan */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Starter</h3>
              <div className={styles.pricing}>
                <span className={styles.price}>$29</span>
                <span className={styles.period}>/mo</span>
              </div>
              <div className={styles.originalPrice}>
                <span className={styles.strikethrough}>$59</span>
                <span className={styles.regLabel}>reg</span>
              </div>
              <p className={styles.userNote}>1 user</p>
            </div>
            
            <ul className={styles.featuresList}>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                600 Image Storage
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Favorites in Galleries
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Order Tracking by Image
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                COGS & Profit Dashboard (basic)
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Basic Online Ordering
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Unbranded Email/SMS Reminders
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Limited Workflows (linear)
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Model Release Signing
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Standard Email Support
              </li>
            </ul>
            
            <Link href="/signup?plan=starter" className={styles.ctaButton}>
              Start Free Trial
            </Link>
          </div>

          {/* Pro Plan */}
          <div className={`${styles.planCard} ${styles.featured}`}>
            <div className={styles.badge}>Best Value</div>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Pro</h3>
              <div className={styles.pricing}>
                <span className={`${styles.price} ${styles.featuredPrice}`}>$99</span>
                <span className={styles.period}>/mo</span>
              </div>
            </div>
            
            <ul className={styles.featuresList}>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Unlimited Users & Roles
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                2000+ Image Storage (expandable)
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Favorites + Client Engagement Analytics
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Order Tracking + Exportable Reports
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                COGS & Profit Dashboard (advanced)
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Advanced Wall Display Tool (scale to wall)
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Fully Customizable E-commerce & Pricing
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Branded Email/SMS + Custom Templates
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Unlimited Workflows with Conditions
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Contract Signing & Management
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Editor File Transfer & Ordering
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Client Mobile App (PWA)
              </li>
              <li className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Priority Support
              </li>
            </ul>
            
            <Link href="/signup?plan=pro" className={`${styles.ctaButton} ${styles.primaryButton}`}>
              Upgrade to Pro
            </Link>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className={styles.addonsSection}>
          <h3 className={styles.addonsTitle}>Optional Add-Ons</h3>
          
          <div className={styles.addonsGrid}>
            {/* Business Line Add-on */}
            <div className={styles.addonCard}>
              <div className={styles.addonHeader}>
                <h4 className={styles.addonName}>Business Line (Single Number)</h4>
                <span className={styles.addonPrice}>$9–$15/mo + usage</span>
              </div>
              <p className={styles.addonDescription}>
                Dedicated phone number for calls & SMS, fully integrated with leads and clients.
              </p>
              <Link href="/billing/addons?addon=business-line" className={styles.ctaButton}>
                Add Business Line
              </Link>
            </div>

            {/* Call Team Tool Add-on */}
            <div className={styles.addonCard}>
              <div className={styles.addonHeader}>
                <h4 className={styles.addonName}>Call Team Tool (Usage Tiers)</h4>
                <span className={styles.addonPrice}>$0.02/min overage</span>
              </div>
              <p className={styles.addonDescription}>
                High-volume calling inside your CRM: multi-caller access, call logging, notes, booking status, and analytics.
              </p>
              
              <div className={styles.tiersTable}>
                <div className={styles.tierHeader}>
                  <div>Tier</div>
                  <div>Minutes</div>
                  <div>Est. Calls</div>
                  <div>Price</div>
                </div>
                <div className={styles.tierRow}>
                  <div>Starter</div>
                  <div>2,500</div>
                  <div>~165</div>
                  <div>$29/mo</div>
                </div>
                <div className={styles.tierRow}>
                  <div>Growth</div>
                  <div>5,000</div>
                  <div>~330</div>
                  <div>$49/mo</div>
                </div>
                <div className={styles.tierRow}>
                  <div>Pro</div>
                  <div>10,000</div>
                  <div>~660</div>
                  <div>$79/mo</div>
                </div>
                <div className={styles.tierRow}>
                  <div>Enterprise</div>
                  <div>20,000</div>
                  <div>~1,320</div>
                  <div>Custom</div>
                </div>
              </div>
              
              <Link href="/billing/addons?addon=call-team-tool" className={`${styles.ctaButton} ${styles.primaryButton}`}>
                Choose Tier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}