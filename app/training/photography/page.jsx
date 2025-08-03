import Link from 'next/link';
import styles from '../training.module.css';

export const metadata = {
  title: 'Photography Training | Photo Studio App',
  description: 'Comprehensive photography training covering posing, lighting, composition, and technical skills. Master the art of professional photography.',
  keywords: 'photography training, posing techniques, lighting setup, composition rules, camera settings, portrait photography, professional photography'
};

const photographySections = [
  { 
    title: "Camera Fundamentals", 
    link: "/training/photography/camera-fundamentals",
    description: "Master your camera settings, exposure triangle, and technical basics",
    duration: "25 min",
    level: "Beginner"
  },
  { 
    title: "Composition Rules", 
    link: "/training/photography/composition-rules",
    description: "Learn the rule of thirds, leading lines, and visual balance",
    duration: "20 min",
    level: "Beginner"
  },
  { 
    title: "Natural Light Photography", 
    link: "/training/photography/natural-light",
    description: "Work with available light for stunning portraits",
    duration: "30 min",
    level: "Beginner"
  },
  { 
    title: "Studio Lighting Setup", 
    link: "/training/photography/studio-lighting",
    description: "Professional lighting techniques and equipment setup",
    duration: "35 min",
    level: "Intermediate"
  },
  { 
    title: "Posing Women", 
    link: "/training/photography/posing-women",
    description: "Flattering poses and techniques for female subjects",
    duration: "28 min",
    level: "Intermediate"
  },
  { 
    title: "Posing Men", 
    link: "/training/photography/posing-men",
    description: "Confident and natural poses for male subjects",
    duration: "22 min",
    level: "Intermediate"
  },
  { 
    title: "Family Photography", 
    link: "/training/photography/family-photography",
    description: "Group posing and family portrait techniques",
    duration: "32 min",
    level: "Intermediate"
  },
  { 
    title: "Children's Photography", 
    link: "/training/photography/children-photography",
    description: "Capture authentic moments with young subjects",
    duration: "26 min",
    level: "Advanced"
  },
  { 
    title: "Wedding Photography Basics", 
    link: "/training/photography/wedding-basics",
    description: "Essential techniques for wedding photography",
    duration: "40 min",
    level: "Advanced"
  },
  { 
    title: "Post-Processing Workflow", 
    link: "/training/photography/post-processing",
    description: "Lightroom and Photoshop editing techniques",
    duration: "45 min",
    level: "Intermediate"
  },
  { 
    title: "Color Theory & Styling", 
    link: "/training/photography/color-theory",
    description: "Understanding color relationships and styling choices",
    duration: "24 min",
    level: "Advanced"
  },
  { 
    title: "Client Direction & Communication", 
    link: "/training/photography/client-direction",
    description: "Guide clients for natural expressions and poses",
    duration: "18 min",
    level: "Intermediate"
  }
];

const comingSoonSections = [
  { 
    title: "Advanced Portrait Retouching", 
    description: "Professional skin retouching and beauty enhancement techniques",
    duration: "35 min",
    level: "Advanced"
  },
  { 
    title: "Commercial Photography", 
    description: "Product photography and commercial lighting setups",
    duration: "42 min",
    level: "Advanced"
  },
  { 
    title: "Event Photography Mastery", 
    description: "Capture memorable moments at weddings and events",
    duration: "38 min",
    level: "Intermediate"
  },
  { 
    title: "Fine Art Photography", 
    description: "Creative techniques for artistic expression",
    duration: "45 min",
    level: "Advanced"
  },
  { 
    title: "Photography Business", 
    description: "Building and scaling your photography business",
    duration: "50 min",
    level: "Intermediate"
  },
  { 
    title: "Advanced Lighting Techniques", 
    description: "Complex multi-light setups and creative lighting",
    duration: "40 min",
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

export default function PhotographyTrainingPage() {
  return (
    <div className={styles.trainingCategoryPage}>
      {/* Header Section */}
      <section className={styles.categoryHeader}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/training" className={styles.breadcrumbLink}>Training</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>Photography</span>
          </div>
          
          <div className={styles.categoryIntro}>
            <div className={styles.categoryIcon}>📸</div>
            <h1 className={styles.categoryTitle}>Photography Training</h1>
            <p className={styles.categoryDescription}>
              Master the art of professional photography with comprehensive training covering technical skills, 
              creative techniques, and client management. From camera basics to advanced posing and lighting.
            </p>
            
            <div className={styles.categoryStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{photographySections.length}</span>
                <span className={styles.statLabel}>Available Now</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{comingSoonSections.length}</span>
                <span className={styles.statLabel}>Coming Soon</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5.5h</span>
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
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Available Lessons</h2>
            <p className={styles.sectionDescription}>
              Start learning with these comprehensive photography training modules
            </p>
          </div>
          
          <div className={styles.lessonsGrid}>
            {photographySections.map((section, index) => (
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

      {/* Coming Soon Sections */}
      <section className={styles.comingSoonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Coming Soon</h2>
            <p className={styles.sectionDescription}>
              More advanced training modules currently in production
            </p>
          </div>
          
          <div className={styles.lessonsGrid}>
            {comingSoonSections.map((section, index) => (
              <div key={index} className={`${styles.lessonCard} ${styles.comingSoonCard}`}>
                <div className={styles.lessonNumber}>
                  {String(photographySections.length + index + 1).padStart(2, '0')}
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
    </div>
  );
}