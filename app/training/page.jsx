import TrainingSection from './components/TrainingSection';
import Link from 'next/link';
import logo from '../../assets/images/images/logoBlack-250.png';
import calendar from '../../assets/images/images/calendar.jpg'; // <-- Make sure this is correct
import styles from './training.module.css';
import { FaFacebook } from "react-icons/fa6";

// SEO Metadata
export const metadata = {
  title: 'Photography Training | Photo Studio App',
  description: 'Explore free photography training for mastering your camera, running your business, using Photo Studio App, and creating Facebook ads that convert.',
  keywords: 'photography training, photo studio app training, photography business, facebook ads for photographers, photography education, business leadership'
};

export default function TrainingPage() {
  return (
    <main>
      <section className={styles.trainingCategories}>
        <h2 className={styles.sectionTitle}>Explore Training Categories</h2>
        <div className={styles.cardGrid}>
          <Link href="/training/photography" className={styles.trainingCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(/images/training-photography.jpg)` }}
            />
            <div className={styles.cardTitle}>Photography Training</div>
          </Link>

          <Link href="/training/photography-business" className={styles.trainingCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${calendar})` }}
            />
            <div className={styles.cardTitle}>Photography Business</div>
          </Link>

          <Link href="/training/photo-studio-app" className={styles.trainingCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${logo})` }}
            />
            <div className={styles.cardTitle}>Photo Studio App Training</div>
          </Link>

          <Link href="/training/facebook-ads" className={styles.trainingCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${<FaFacebook/>})` }}
            />
            <div className={styles.cardTitle}>Facebook Ads</div>
          </Link>

          <Link href="/training/business-leadership" className={styles.trainingCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(/images/training-app.jpg)` }}
            />
            <div className={styles.cardTitle}>Business Leadership</div>
          </Link>
        </div>
      </section>

      <TrainingSection
        videoSrc="/sample-video.mp4"
        title="Our Process"
        description="See how we work with clients from start to finish in this behind-the-scenes video."
      />

      <TrainingSection
        videoSrc="/testimonial.mp4"
        title="Client Stories"
        description="Watch how we helped real clients achieve their goals."
        reverse
      />
    </main>
  );
}
