import Link from 'next/link';
import styles from '../training.module.css';

export const metadata = {
  title: 'Facebook Ads Training for Photographers | Photo Studio App',
  description: 'Step-by-step Facebook Ads training tailored for photographers. Learn campaign setup, targeting, budgeting, ad creation, retargeting, and more.',
  keywords: 'facebook ads for photographers, photography marketing, facebook ad training, retargeting photography clients, photography ad campaigns'
};

const activeFacebookAdsSections = [
  { 
    title: "Facebook Ads: Overview", 
    link: "/training/facebook-ads/overview",
    description: "Get introduced to Facebook advertising fundamentals",
    duration: "15 min",
    level: "Beginner"
  },
  { 
    title: "Why Start with Facebook Ads", 
    link: "/training/facebook-ads/why-start-with-facebook-ads",
    description: "Understand the benefits of Facebook advertising for photographers",
    duration: "12 min",
    level: "Beginner"
  },
  { 
    title: "Business Manager Setup", 
    link: "/training/facebook-ads/business-manager-setup",
    description: "Step-by-step setup of your Facebook Business Manager",
    duration: "20 min",
    level: "Beginner"
  },
  { 
    title: "Create Your First Campaign", 
    link: "/training/facebook-ads/create-your-first-campaign",
    description: "Launch your first successful Facebook ad campaign",
    duration: "25 min",
    level: "Intermediate"
  },
  { 
    title: "Budgeting & Spend Strategy", 
    link: "/training/facebook-ads/budgeting",
    description: "Master budget allocation and spending strategies",
    duration: "18 min",
    level: "Intermediate"
  },
  { 
    title: "Target Audience", 
    link: "/training/facebook-ads/target-audience",
    description: "Define and reach your ideal photography clients",
    duration: "22 min",
    level: "Intermediate"
  },
  { 
    title: "Testing Your Ads", 
    link: "/training/facebook-ads/testing",
    description: "A/B test your ads for maximum performance",
    duration: "16 min",
    level: "Advanced"
  },
  { 
    title: "Reviewing & Optimizing Results", 
    link: "/training/facebook-ads/reviewing-and-optimizing-results",
    description: "Analyze metrics and optimize for better ROI",
    duration: "24 min",
    level: "Advanced"
  },
  { 
    title: "Retargeting", 
    link: "/training/facebook-ads/retargeting",
    description: "Re-engage potential clients who showed interest",
    duration: "19 min",
    level: "Advanced"
  },
  { 
    title: "Photoshop Artboards for Ads", 
    link: "/training/facebook-ads/photoshop-artboards",
    description: "Create stunning ad visuals with Photoshop",
    duration: "30 min",
    level: "Intermediate"
  },
  { 
    title: "Mistakes to Avoid", 
    link: "/training/facebook-ads/mistakes-to-avoid",
    description: "Common pitfalls and how to avoid them",
    duration: "14 min",
    level: "Beginner"
  }
];

const comingSoonFacebookAdsSections = [
  { 
    title: "Instagram Ads Integration", 
    description: "Leverage Instagram's visual platform for photography marketing",
    duration: "22 min",
    level: "Intermediate"
  },
  { 
    title: "Video Ads for Photographers", 
    description: "Create compelling video content that converts",
    duration: "28 min",
    level: "Advanced"
  },
  { 
    title: "Carousel Ads & Showcase Galleries", 
    description: "Display multiple photos in engaging carousel formats",
    duration: "18 min",
    level: "Intermediate"
  },
  { 
    title: "Lead Generation Campaigns", 
    description: "Capture leads directly through Facebook forms",
    duration: "25 min",
    level: "Advanced"
  },
  { 
    title: "Event Promotion Ads", 
    description: "Promote photography workshops and mini-sessions",
    duration: "20 min",
    level: "Intermediate"
  },
  { 
    title: "Seasonal Campaign Strategies", 
    description: "Maximize bookings during peak photography seasons",
    duration: "24 min",
    level: "Advanced"
  },
  { 
    title: "Local Market Targeting", 
    description: "Dominate your local photography market with geo-targeting",
    duration: "19 min",
    level: "Intermediate"
  },
  { 
    title: "Competitor Analysis & Strategy", 
    description: "Analyze competitor ads and develop winning strategies",
    duration: "26 min",
    level: "Advanced"
  },
  { 
    title: "Facebook Pixel Implementation", 
    description: "Track conversions and optimize for better results",
    duration: "21 min",
    level: "Advanced"
  },
  { 
    title: "Custom Audiences & Lookalikes", 
    description: "Create powerful audience segments for better targeting",
    duration: "23 min",
    level: "Advanced"
  },
  { 
    title: "Ad Creative Best Practices", 
    description: "Design principles for high-converting photography ads",
    duration: "17 min",
    level: "Intermediate"
  },
  { 
    title: "ROI Tracking & Attribution", 
    description: "Measure true return on ad spend and client lifetime value",
    duration: "29 min",
    level: "Advanced"
  },
  { 
    title: "Crisis Management & Ad Account Recovery", 
    description: "Handle ad disapprovals and account restrictions",
    duration: "16 min",
    level: "Advanced"
  },
  { 
    title: "Advanced Automation & Rules", 
    description: "Set up automated rules for hands-off campaign management",
    duration: "27 min",
    level: "Advanced"
  }
];

const getLevelColor = (level) => {
  switch (level) {
    case 'Beginner': return '#10b981';
    case 'Intermediate': return '#f59e0b';
    case 'Advanced': return '#ef4444';
    default: return '#6b7280';
  }
};

export default function FacebookAdsTrainingPage() {
  return (
    <main className={styles.trainingCategoryPage}>
      {/* Header Section */}
      <section className={styles.categoryHeader}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/training" className={styles.breadcrumbLink}>Training</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>Facebook Ads</span>
          </div>
          
          <div className={styles.categoryIntro}>
            <div className={styles.categoryIcon}>📢</div>
            <h1 className={styles.categoryTitle}>Facebook Ads Training</h1>
            <p className={styles.categoryDescription}>
              Learn how to create high-converting Facebook Ads tailored for photography businesses. 
              Master the complete process from setup to optimization and grow your client base effectively.
            </p>
            
            <div className={styles.categoryStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{activeFacebookAdsSections.length}</span>
                <span className={styles.statLabel}>Available Now</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{comingSoonFacebookAdsSections.length}</span>
                <span className={styles.statLabel}>Coming Soon</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>9.5h</span>
                <span className={styles.statLabel}>Total Duration</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>All Levels</span>
                <span className={styles.statLabel}>Difficulty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Lessons */}
      <section className={styles.trainingLessons}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Available Lessons</h2>
            <p className={styles.sectionDescription}>
              Master Facebook advertising with these comprehensive training modules
            </p>
          </div>
          
          <div className={styles.lessonsGrid}>
            {activeFacebookAdsSections.map((section, index) => (
              <Link href={section.link} key={index} className={styles.lessonCard}>
                <div className={styles.lessonNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.lessonContent}>
                  <div className={styles.lessonHeader}>
                    <h3 className={styles.lessonTitle}>{section.title}</h3>
                    <div className={styles.lessonMeta}>
                      <span className={styles.lessonDuration}>{section.duration}</span>
                      <span 
                        className={styles.lessonLevel}
                        style={{ backgroundColor: getLevelColor(section.level) }}
                      >
                        {section.level}
                      </span>
                    </div>
                  </div>
                  <p className={styles.lessonDescription}>{section.description}</p>
                </div>
                <div className={styles.lessonArrow}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16666 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className={styles.comingSoonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Coming Soon</h2>
            <p className={styles.sectionDescription}>
              Advanced Facebook advertising modules currently in production
            </p>
          </div>
          
          <div className={styles.lessonsGrid}>
            {comingSoonFacebookAdsSections.map((section, index) => (
              <div key={index} className={`${styles.lessonCard} ${styles.comingSoonCard}`}>
                <div className={styles.lessonNumber}>
                  {String(activeFacebookAdsSections.length + index + 1).padStart(2, '0')}
                </div>
                <div className={styles.lessonContent}>
                  <div className={styles.lessonHeader}>
                    <h3 className={styles.lessonTitle}>{section.title}</h3>
                    <div className={styles.lessonMeta}>
                      <span className={styles.lessonDuration}>{section.duration}</span>
                      <span 
                        className={styles.lessonLevel}
                        style={{ backgroundColor: getLevelColor(section.level) }}
                      >
                        {section.level}
                      </span>
                    </div>
                  </div>
                  <p className={styles.lessonDescription}>{section.description}</p>
                </div>
                <div className={styles.comingSoonBadge}>
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}