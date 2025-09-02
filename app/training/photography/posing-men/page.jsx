import React from 'react';
import Breadcrumb from "../../../components/BreadCrumbs/BreadCrumbs";
import styles from "../../training.module.css";
import TrainingSection from '../../components/TrainingSection';

export const metadata = {
  title: "Posing Men | Photo Studio App Training",
  description: "A majority of men don't like their photos because of poor posing. Learn how to pose men, understand the why, understand their needs.",
  keywords: "men's photography, posing men, male portraits, photography posing techniques, masculine poses, portrait photography"
};

export default function PosingMen() {
  return (
    <TrainingSection>
      <main className={styles.trainingSection}>
        <Breadcrumb
          paths={[
            { name: "Home", href: "/" },
            { name: "Training", href: "/training" },
            { name: "Photography", href: "/training/photography" },
            { name: "Posing Men", href: "/training/photography/posing-men" },
            { name: "Posing Men" }
          ]}
        />

        <h1>Posing Men</h1>

        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Posing Men Photography Techniques"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className={styles.textBlock}>
          <p><strong>A majority of men don't like their photos because of poor posing.</strong> Most men feel awkward and unnatural in front of the camera, leading to stiff, uncomfortable portraits.</p>
          
          <p>The key to great men's portraits is understanding masculine body language and creating poses that feel natural and confident.</p>

          <div className={styles.coreProperties}>
            <h3>Core Principles</h3>
            <ul>
              <li>• <strong>Strong foundation:</strong> Wide stance, weight distributed evenly</li>
              <li>• <strong>Confident shoulders:</strong> Square to camera or at a slight angle</li>
              <li>• <strong>Relaxed hands:</strong> Avoid clenched fists or awkward finger positions</li>
              <li>• <strong>Natural expression:</strong> Slight smile or serious expression that matches personality</li>
            </ul>
          </div>

          <p>Unlike women's posing which often emphasizes curves and grace, men's posing focuses on strength, confidence, and authenticity. Understanding these differences is crucial for creating portraits that your male clients will actually love.</p>

          <div className={styles.tipsGrid}>
            <div className={`${styles.tipCard} ${styles.works}`}>
              <h3>What Works</h3>
              <ul>
                <li>• Angular poses that emphasize strength</li>
                <li>• Hands in pockets or holding objects</li>
                <li>• Leaning against walls or structures</li>
                <li>• Direct eye contact with camera</li>
                <li>• Slightly serious expressions</li>
              </ul>
            </div>
            
            <div className={`${styles.tipCard} ${styles.avoid}`}>
              <h3>What to Avoid</h3>
              <ul>
                <li>• Overly curved or feminine poses</li>
                <li>• Hands dangling awkwardly at sides</li>
                <li>• Too much tilting of head or body</li>
                <li>• Forced or overly broad smiles</li>
                <li>• Poses that look unnatural or contrived</li>
              </ul>
            </div>
          </div>

          <p>Master these fundamentals, and you'll see an immediate improvement in your male portraits. Your clients will feel more confident during the shoot, and you'll deliver images they're proud to share.</p>
        </div>

        <section className={styles.downloadsSection}>
          <h2>Available Downloads</h2>
          <ul>
            <li>
              <a href="/downloads/mens-posing-guide.pdf" target="_blank" rel="noopener noreferrer">
                📄 Men's Posing Quick Reference Guide (PDF)
              </a>
            </li>
            <li>
              <a href="/downloads/masculine-poses-checklist.pdf" target="_blank" rel="noopener noreferrer">
                ✅ Masculine Poses Checklist (PDF)
              </a>
            </li>
            <li>
              <a href="/downloads/mens-portrait-lighting.pdf" target="_blank" rel="noopener noreferrer">
                💡 Lighting Techniques for Men's Portraits (PDF)
              </a>
            </li>
          </ul>
        </section>
      </main>
    </TrainingSection>
  );
}