import Link from 'next/link';
import TrainingSection from './components/TrainingSection';
import styles from './training.module.css';

// SEO Metadata
export const metadata = {
  title: 'Photography Training | Photo Studio App',
  description: 'Explore free photography training for mastering your camera, running your business, using Photo Studio App, and creating Facebook ads that convert.',
  keywords: 'photography training, photo studio app training, photography business, facebook ads for photographers, photography education, business leadership'
};

const trainingCategories = [
  {
    title: "Photography Training",
    description: "Master your camera settings, composition, and lighting techniques",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/training/photography",
    icon: "📸"
  },
  {
    title: "Photography Business",
    description: "Learn to run a successful photography business",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/training/photography-business",
    icon: "💼"
  },
  {
    title: "Photo Studio App Training",
    description: "Get the most out of your Photo Studio App features",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/training/photo-studio-app",
    icon: "📱"
  },
  {
    title: "Facebook Ads",
    description: "Create high-converting ads for your photography business",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/training/facebook-ads",
    icon: "📢"
  },
  {
    title: "Business Leadership",
    description: "Develop leadership skills to grow your photography empire",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/training/business-leadership",
    icon: "👑"
  }
];

export default function TrainingPage() {
  return (
    <main className={styles.trainingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Master Your Photography Business
            </h1>
            <p className={styles.heroDescription}>
              Transform your passion into a thriving business with our comprehensive training programs. 
              From camera techniques to marketing strategies, we'll guide you every step of the way.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Training Videos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Students Trained</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Free Access</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <img src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Photography Training" />
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className={styles.trainingCategories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Choose Your Learning Path</h2>
            <p className={styles.sectionDescription}>
              Select a training category that matches your current needs and skill level
            </p>
          </div>
          
          <div className={styles.cardsGrid}>
            {trainingCategories.map((category, index) => (
              <Link href={category.href} key={index} className={styles.trainingCard}>
                <div className={styles.cardImage}>
                  <img src={category.image} alt={category.title} />
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardIcon}>{category.icon}</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>
                  <div className={styles.cardArrow}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16666 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Training Sections */}
      <section className={styles.featuredSections}>
        <div className={styles.container}>
          <TrainingSection
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            title="Our Process"
            description="See how we work with clients from start to finish in this behind-the-scenes video. Learn the workflow that has helped thousands of photographers build successful businesses."
            features={["Client consultation techniques", "Workflow optimization", "Post-production secrets"]}
          />

          <TrainingSection
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            title="Client Stories"
            description="Watch real success stories from photographers who transformed their businesses using our training methods and Photo Studio App."
            features={["Real client testimonials", "Before & after results", "Business growth strategies"]}
            reverse
          />
        </div>
      </section>
    </main>
  );
}