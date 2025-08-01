import Link from 'next/link';
import styles from '../training.module.css';

export const metadata = {
  title: 'Facebook Ads Training for Photographers | Photo Studio App',
  description: 'Step-by-step Facebook Ads training tailored for photographers. Learn campaign setup, targeting, budgeting, ad creation, retargeting, and more.',
  keywords: 'facebook ads for photographers, photography marketing, facebook ad training, retargeting photography clients, photography ad campaigns'
};

const adSections = [
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
                <span className={styles.statNumber}>{adSections.length}</span>
                <span className={styles.statLabel}>Lessons</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.5h</span>
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

      {/* Training Sections */}
      <section className={styles.trainingLessons}>
        <div className={styles.container}>
          <div className={styles.lessonsGrid}>
            {adSections.map((section, index) => (
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
    </main>
  );
}