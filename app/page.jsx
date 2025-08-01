'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';
import { 
  FaCalendarAlt, 
  FaCamera, 
  FaDollarSign, 
  FaCommentDots, 
  FaUsers, 
  FaCheckCircle, 
  FaArrowRight,
  FaPlay,
  FaStar,
  FaBolt,
  FaGlobe,
  FaSearch,
  FaBullseye,
  FaEnvelope,
  FaCog,
  FaChartLine
} from 'react-icons/fa';
import Navbar from './components/Navbars/Navbar';

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaCommentDots className={styles.featureIcon} />,
      title: "Contact Forms",
      description: "Collecting leads is the first service any program should have for a photographer or videographer. Capture as many as you can.",
      color: "#3b82f6"
    },
    {
      icon: <FaBolt className={styles.featureIcon} />,
      title: "Workflows",
      description: "As photographers ourselves, we have a million items on our plate. Worrying about workflow shouldn't be one of them.",
      color: "#10b981"
    },
    {
      icon: <FaDollarSign className={styles.featureIcon} />,
      title: "Invoicing",
      description: "Ditch the exposure requests. Get paid for the work you do and don't put them on your calendar until they've committed.",
      color: "#f59e0b"
    },
    {
      icon: <FaCommentDots className={styles.featureIcon} />,
      title: "Messaging",
      description: "Trying to dig for numbers is a thing of the past. Quickly send messages to your clients while you're out getting other tasks done.",
      color: "#ef4444"
    },
    {
      icon: <FaUsers className={styles.featureIcon} />,
      title: "Management",
      description: "Finding 'little Susie's Mom' has never been easier, not to mention seeing where they are in the workflow to track what you need to get done.",
      color: "#8b5cf6"
    }
  ];

  const journeySteps = [
    {
      title: "New Lead",
      description: "Boom! A new lead just hit your website and loves what you do. They're reaching out and now it's time to move them forward.",
      icon: <FaBullseye className={styles.stepIcon} />
    },
    {
      title: "Schedule a Consultation",
      description: "Whether it's in person, phone, or video chat, get them on the books sooner rather than later.",
      icon: <FaCalendarAlt className={styles.stepIcon} />
    },
    {
      title: "Send Product Info",
      description: "It's never too early to start embedding product ideas in your client's mind. Get them thinking about prints and wall art right away.",
      icon: <FaCamera className={styles.stepIcon} />
    },
    {
      title: "Quote/Invoice/Contract",
      description: "Get Paid! This doesn't need to be a multiple step process, that's why we make it seamless for your client.",
      icon: <FaDollarSign className={styles.stepIcon} />
    },
    {
      title: "Schedule Session",
      description: "Easily schedule a client's session, plan their shoot location, automatically send out wardrobe ideas and best practices.",
      icon: <FaCalendarAlt className={styles.stepIcon} />
    },
    {
      title: "Build Your Relationship",
      description: "Customer service is more important than ever. Use our pre-designed SMS notifications, emails and push notifications to remind your clients.",
      icon: <FaUsers className={styles.stepIcon} />
    },
    {
      title: "After the Session",
      description: "Get that pricing sheet out after the session is completed. Not to mention timeframes and what to expect for the upcoming IPS/Sales session.",
      icon: <FaCheckCircle className={styles.stepIcon} />
    },
    {
      title: "Sell/Nurture/Repeat",
      description: "Clients and leads are scored so you can send proper messages to the proper client based on their activity.",
      icon: <FaStar className={styles.stepIcon} />
    }
  ];

  const benefits = [
    {
      icon: <FaGlobe className={styles.benefitIcon} />,
      title: "Work Anywhere",
      description: "Keep important info handy - client info, session location, SMS, all in one spot"
    },
    {
      icon: <FaCheckCircle className={styles.benefitIcon} />,
      title: "Remember Everything",
      description: "Never miss important details about your clients or upcoming sessions"
    },
    {
      icon: <FaBolt className={styles.benefitIcon} />,
      title: "Turn To-Do Into Done",
      description: "Streamline your workflow and get more done in less time"
    },
    {
      icon: <FaSearch className={styles.benefitIcon} />,
      title: "Find Things Fast",
      description: "Quickly locate client information, contracts, and session details"
    }
  ];

  return (
    <div className={styles.homepage}>
    <Navbar />
    <div>Under Construction:  Launching this month!</div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2>(Under Construction)</h2>
              <h2>Launching This Month!</h2>
              <h1 className={styles.heroTitle}>
                Schedule, Photograph, 
                <span className={styles.highlight}> Collect, Plan</span>
              </h1>
              <p className={styles.heroDescription}>
                Save time by simplifying your photography business with our all-in-one platform designed specifically for photographers and videographers.
              </p>
              <div className={styles.heroButtons}>
                <button className={`${styles.btn} ${styles.primary}`}>
                  View Plans
                  <FaArrowRight className={styles.btnIcon} />
                </button>
                <button className={`${styles.btn} ${styles.secondary}`}>
                  <FaPlay className={styles.btnIcon} />
                  Watch Demo
                </button>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Photographers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10k+</span>
                  <span className={styles.statLabel}>Sessions Managed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>99%</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
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
                <div className={styles.floatingCard}>
                  <div className={styles.cardHeader}>
                    <FaCalendarAlt className={styles.cardIcon} />
                    <span>Today's Sessions</span>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.sessionItem}>
                      <span className={styles.sessionTime}>2:00 PM</span>
                      <span className={styles.sessionClient}>Sarah & Mike</span>
                    </div>
                    <div className={styles.sessionItem}>
                      <span className={styles.sessionTime}>4:30 PM</span>
                      <span className={styles.sessionClient}>Johnson Family</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                {benefit.icon}
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Make Taking Care of Your Clients Easier</h2>
            <p className={styles.sectionDescription}>
              Everything you need to run a successful photography business, all in one place
            </p>
          </div>
          
          <div className={styles.featuresContent}>
            <div className={styles.featuresNav}>
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`${styles.featureNavItem} ${activeFeature === index ? styles.active : ''}`}
                  onClick={() => setActiveFeature(index)}
                  style={{ '--accent-color': feature.color }}
                >
                  {feature.icon}
                  <span>{feature.title}</span>
                </button>
              ))}
            </div>
            
            <div className={styles.featureDisplay}>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{features[activeFeature].title}</h3>
                <p className={styles.featureDescription}>{features[activeFeature].description}</p>
                <button className={`${styles.btn} ${styles.outline}`}>
                  Learn More
                  <FaArrowRight className={styles.btnIcon} />
                </button>
              </div>
              <div className={styles.featureVisual}>
                <div 
                  className={styles.featureImage}
                  style={{ backgroundColor: features[activeFeature].color + '20' }}
                >
                  {features[activeFeature].icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey Section */}
      <section className={styles.journeySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Complete Client Journey</h2>
            <p className={styles.sectionDescription}>
              From first contact to final delivery, we've got every step covered
            </p>
          </div>
          
          <div className={styles.journeySteps}>
            {journeySteps.map((step, index) => (
              <div key={index} className={styles.journeyStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    {step.icon}
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className={styles.stepConnector}>
                    <FaArrowRight className={styles.connectorIcon} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-launch CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Stay Informed on Our Pre-Launch!</h2>
            <p className={styles.ctaDescription}>
              Be the first to know when we launch and get exclusive early access to our platform
            </p>
            <div className={styles.ctaForm}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className={styles.emailInput}
              />
              <button className={`${styles.btn} ${styles.primary}`}>
                Get Early Access
              </button>
            </div>
            <p className={styles.ctaNote}>
              Join 500+ photographers already on our waitlist
            </p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className={styles.trainingSection}>
        <div className={styles.container}>
          <div className={styles.trainingContent}>
            <div className={styles.trainingText}>
              <h2 className={styles.trainingTitle}>Free Photography Training</h2>
              <p className={styles.trainingDescription}>
                While you wait for our platform launch, take advantage of our comprehensive free training resources to grow your photography business.
              </p>
              <ul className={styles.trainingFeatures}>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  Photography techniques and camera mastery
                </li>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  Business development and client management
                </li>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  Facebook advertising for photographers
                </li>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  Leadership and business growth strategies
                </li>
              </ul>
              <Link href="/training" className={`${styles.btn} ${styles.primary}`}>
                Start Learning Free
                <FaArrowRight className={styles.btnIcon} />
              </Link>
            </div>
            <div className={styles.trainingVisual}>
              <Image 
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Photography training"
                width={500}
                height={400}
                className={styles.trainingImage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}