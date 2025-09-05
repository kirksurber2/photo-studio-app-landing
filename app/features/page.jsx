import Navbar from '../components/Navbars/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import styles from './features.module.css'
import PricingChart from '../components/PricingChart/PricingChart'


import { 
  FaDollarSign, 
  FaCalendarAlt, 
  FaCog, 
  FaSms, 
  FaBell, 
  FaUsers, 
  FaFileContract,
  FaCommentDots,
  FaChartLine,
  FaCamera,
  FaEnvelope,
  FaSearch,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaPlay
} from 'react-icons/fa'

export const metadata = {
  title: 'Features | Photo Studio App - Complete Photography Business Management',
  description: 'Discover all the powerful features of Photo Studio App. From invoicing and scheduling to workflows and client management - everything you need to run your photography business.',
  keywords: 'photography features, invoicing, scheduling, workflows, SMS reminders, client management, photography CRM'
}

export default function Features() {
  const coreFeatures = [
    {
      icon: <FaDollarSign className={styles.featureIcon} />,
      title: "Invoicing & Payments",
      description: "Integrate with Stripe for seamless invoicing and payments. Get paid faster with automated reminders.",
      benefits: ["Stripe integration", "Automated reminders", "Payment tracking", "Tax reporting"],
      color: "#10b981"
    },
    {
      icon: <FaCalendarAlt className={styles.featureIcon} />,
      title: "Session Scheduling",
      description: "Schedule clients right from your phone with smart calendar integration and availability management.",
      benefits: ["Mobile scheduling", "Calendar sync", "Availability blocks", "Time zone support"],
      color: "#3b82f6"
    },
    {
      icon: <FaCog className={styles.featureIcon} />,
      title: "Custom Workflows",
      description: "Customize your workflows or select from proven templates. Automate your entire client journey.",
      benefits: ["Template library", "Custom workflows", "Automation rules", "Progress tracking"],
      color: "#8b5cf6"
    },
    {
      icon: <FaSms className={styles.featureIcon} />,
      title: "SMS Reminders",
      description: "Keep clients informed with automated SMS reminders. Set it and forget it communication.",
      benefits: ["Automated messaging", "Custom templates", "Delivery tracking", "Two-way SMS"],
      color: "#f59e0b"
    },
    {
      icon: <FaBell className={styles.featureIcon} />,
      title: "Calendar Alerts",
      description: "Never miss important deadlines with smart notifications and workflow alerts.",
      benefits: ["Smart notifications", "Deadline tracking", "Mobile alerts", "Email reminders"],
      color: "#ef4444"
    },
    {
      icon: <FaUsers className={styles.featureIcon} />,
      title: "Family Information",
      description: "Store detailed family info and quick notes. Know little Johnny's age before your shoot.",
      benefits: ["Family profiles", "Quick notes", "Age tracking", "Preference storage"],
      color: "#06b6d4"
    },
    {
      icon: <FaFileContract className={styles.featureIcon} />,
      title: "Digital Model Release",
      description: "Have models and clients sign releases on the spot with digital signature capture.",
      benefits: ["Digital signatures", "Legal templates", "Cloud storage", "Instant access"],
      color: "#84cc16"
    }
  ]

  const additionalFeatures = [
    {
      icon: <FaCommentDots className={styles.additionalIcon} />,
      title: "Client Messaging",
      description: "Centralized communication hub for all client interactions"
    },
    {
      icon: <FaChartLine className={styles.additionalIcon} />,
      title: "Business Analytics",
      description: "Track your business performance with detailed reports"
    },
    {
      icon: <FaCamera className={styles.additionalIcon} />,
      title: "Session Notes",
      description: "Record important details during and after shoots"
    },
    {
      icon: <FaEnvelope className={styles.additionalIcon} />,
      title: "Email Templates",
      description: "Professional email templates for every occasion"
    },
    {
      icon: <FaSearch className={styles.additionalIcon} />,
      title: "Advanced Search",
      description: "Find any client or session information instantly"
    },
    {
      icon: <FaFileContract className={styles.additionalIcon} />,
      title: "Contract Management",
      description: "Store and manage all your photography contracts"
    }
  ]

  const benefits = [
    "Save 10+ hours per week on admin tasks",
    "Increase client satisfaction with better communication",
    "Never miss a deadline or appointment again",
    "Get paid faster with automated invoicing",
    "Scale your business without adding complexity"
  ]

  return (
    <div className={styles.featuresPage}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroBadge}>
                <FaStar className={styles.badgeIcon} />
                <span>Complete Business Solution</span>
              </div>
              <h1 className={styles.heroTitle}>
                Everything You Need to Run Your
                <span className={styles.highlight}> Photography Business</span>
              </h1>
              <p className={styles.heroDescription}>
                From client management to invoicing, scheduling to workflows - Photo Studio App 
                provides all the tools you need in one powerful, easy-to-use platform.
              </p>
              
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>7+</span>
                  <span className={styles.statLabel}>Core Features</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Hours Saved Weekly</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1</span>
                  <span className={styles.statLabel}>Unified Platform</span>
                </div>
              </div>
              
              <div className={styles.heroButtons}>
                <Link href="/get-started" className={`${styles.btn} ${styles.primary}`}>
                  Start Now
                  <FaArrowRight className={styles.btnIcon} />
                </Link>
                <button className={`${styles.btn} ${styles.secondary}`}>
                  <FaPlay className={styles.btnIcon} />
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.heroImageContainer}>
                <Image 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Photography business management on mobile"
                  width={500}
                  height={600}
                  className={styles.heroImage}
                />
                <div className={styles.floatingFeature}>
                  <div className={styles.featureHeader}>
                    <FaCheckCircle className={styles.featureCheckIcon} />
                    <span>All Features Included</span>
                  </div>
                  <div className={styles.featureList}>
                    <div className={styles.featureItem}>✓ Invoicing & Payments</div>
                    <div className={styles.featureItem}>✓ Session Scheduling</div>
                    <div className={styles.featureItem}>✓ Client Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className={styles.coreFeatures}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Powerful Features for Professional Photographers</h2>
            <p className={styles.sectionDescription}>
              Every feature is designed specifically for photographers who want to focus on their craft, not admin work
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {coreFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard} style={{ '--accent-color': feature.color }}>
                <div className={styles.featureCardHeader}>
                  <div className={styles.featureIconContainer}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>
                
                <p className={styles.featureDescription}>{feature.description}</p>
                
                <ul className={styles.featureBenefits}>
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className={styles.featureFooter}>
                  <Link href="#" className={styles.learnMore}>
                    Learn More
                    <FaArrowRight className={styles.arrowIcon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <PricingChart />
      </section>
      
       

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsText}>
              <h2 className={styles.benefitsTitle}>Why Photographers Choose Photo Studio App</h2>
              <p className={styles.benefitsDescription}>
                Stop juggling multiple apps and start focusing on what you love - creating amazing photographs.
              </p>
              
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    <FaCheckCircle className={styles.benefitIcon} />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <Link href="/about" className={`${styles.btn} ${styles.outline}`}>
                Learn Our Story
                <FaArrowRight className={styles.btnIcon} />
              </Link>
            </div>
            
            <div className={styles.benefitsVisual}>
              <Image 
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional photographer at work"
                width={500}
                height={400}
                className={styles.benefitsImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className={styles.additionalFeatures}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>And Much More...</h2>
            <p className={styles.sectionDescription}>
              Additional features to streamline every aspect of your photography business
            </p>
          </div>
          
          <div className={styles.additionalGrid}>
            {additionalFeatures.map((feature, index) => (
              <div key={index} className={styles.additionalCard}>
                <div className={styles.additionalIconContainer}>
                  {feature.icon}
                </div>
                <h4 className={styles.additionalTitle}>{feature.title}</h4>
                <p className={styles.additionalDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Photography Business?</h2>
            <p className={styles.ctaDescription}>
              Join hundreds of photographers who have simplified their workflow and grown their business with Photo Studio App
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/get-started" className={`${styles.btn} ${styles.primary} ${styles.large}`}>
                Start Your Free Trial
              </Link>
              <Link href="/training" className={`${styles.btn} ${styles.secondary} ${styles.large}`}>
                Explore Free Training
              </Link>
            </div>
            <p className={styles.ctaNote}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}