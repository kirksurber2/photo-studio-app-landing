import Breadcrumb from "../../components/Breadcrumb";
import styles from "../../training.module.css";
import TrainingSection from '../../components/TrainingSection';

export const metadata = {
  title: "Testing Your Facebook Ads | Photo Studio App Training",
  description: "Learn how to effectively test your Facebook Ads as a photographer. Optimize ad creatives, audiences, and budgets to find what works.",
  keywords: "facebook ad testing, a/b testing, photographer marketing, facebook ads for photographers, testing facebook creatives"
};

export default function TestingFacebookAds() {
  return (
    <main className={styles.trainingSection}>
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Training", href: "/training" },
          { name: "Facebook Ads", href: "/training/facebook-ads" },
          { name: "Testing Facebook Ads" }
        ]}
      />

      <h1>Testing Your Facebook Ads</h1>

      <div className={styles.videoContainer}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with real ID
          title="Testing Facebook Ads for Photographers"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className={styles.textBlock}>
        <p>Running a Facebook Ad is only half the battle — testing is where you discover what actually works.</p>
        <p>Start by testing simple variables: headlines, photos, or the call-to-action button. Small tweaks can make a big difference.</p>

        <br />

        <p>Test only one thing at a time. If you change everything, you won’t know what caused better or worse performance.</p>
        <p>For photographers, this could be testing a family photo vs. a newborn photo to see which resonates more with your audience.</p>

        <br />

        <p>Keep your budget small while testing. $5-$10 per day per ad is enough to see patterns over a few days.</p>
        <p>Once you find a winning ad, you can increase your spend confidently, knowing it converts.</p>
      </div>

      <section className={styles.downloadsSection}>
        <h2>Available Downloads</h2>
        <ul>
          <li><a href="/downloads/facebook-testing-checklist.pdf" target="_blank" rel="noopener noreferrer">Facebook Ads Testing Checklist (PDF)</a></li>
          <li><a href="/downloads/a-b-testing-template.pdf" target="_blank" rel="noopener noreferrer">A/B Testing Template (PDF)</a></li>
        </ul>
      </section>
    </main>
  );
}
