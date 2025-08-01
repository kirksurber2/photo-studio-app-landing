'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../training.module.css';

export default function FacebookAdsOverviewPage() {
  const [downloadStatus, setDownloadStatus] = useState({});

  const downloadPDF = (fileName) => {
    setDownloadStatus(prev => ({ ...prev, [fileName]: 'downloading' }));
    
    // Simulate download process
    setTimeout(() => {
      setDownloadStatus(prev => ({ ...prev, [fileName]: 'completed' }));
      // In a real app, you would handle the actual download here
      console.log(`Downloading ${fileName}`);
    }, 2000);
  };

  const resources = [
    {
      name: "Facebook Ads Checklist",
      filename: "facebook-ads-checklist.pdf",
      description: "Complete checklist for setting up your first Facebook ad campaign"
    },
    {
      name: "Targeting Guide",
      filename: "facebook-targeting-guide.pdf", 
      description: "Comprehensive guide to Facebook audience targeting for photographers"
    },
    {
      name: "Ad Templates",
      filename: "facebook-ad-templates.pdf",
      description: "Proven ad copy templates that convert for photography businesses"
    }
  ];

  return (
    <main className={styles.trainingTopicPage}>
      {/* Header */}
      <section className={styles.topicHeader}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/training" className={styles.breadcrumbLink}>Training</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/training/facebook-ads" className={styles.breadcrumbLink}>Facebook Ads</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>Overview</span>
          </div>
          
          <h1 className={styles.topicTitle}>Facebook Ads: Overview</h1>
          <p className={styles.topicSubtitle}>
            Get introduced to Facebook advertising fundamentals and learn why it's essential for your photography business
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.topicVideoSection}>
        <div className={styles.container}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
              <video 
                controls 
                poster="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className={styles.topicVideo}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className={styles.videoInfo}>
              <div className={styles.videoStats}>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>⏱️</span>
                  <span className={styles.statText}>15 minutes</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>📊</span>
                  <span className={styles.statText}>Beginner Level</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statIcon}>👥</span>
                  <span className={styles.statText}>2,847 students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.topicContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <div className={styles.contentSection}>
                <h2>What You'll Learn</h2>
                <ul className={styles.learningObjectives}>
                  <li>
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    The fundamentals of Facebook advertising for photographers
                  </li>
                  <li>
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    How Facebook ads can grow your photography business
                  </li>
                  <li>
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Key metrics and KPIs to track for success
                  </li>
                  <li>
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Common mistakes to avoid when starting out
                  </li>
                </ul>
              </div>

              <div className={styles.contentSection}>
                <h2>Lesson Overview</h2>
                <p>
                  Facebook advertising has become one of the most effective ways for photographers to reach new clients 
                  and grow their business. In this comprehensive overview, we'll introduce you to the world of Facebook 
                  ads and show you exactly why they should be a cornerstone of your marketing strategy.
                </p>
                <p>
                  Whether you're completely new to digital advertising or looking to refine your existing approach, 
                  this lesson will give you the foundation you need to succeed with Facebook ads.
                </p>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.resourcesSection}>
                <h3>Download Resources</h3>
                <p className={styles.resourcesDescription}>
                  Get the most out of this lesson with our downloadable resources and templates.
                </p>
                
                <div className={styles.resourcesList}>
                  {resources.map((resource, index) => (
                    <div key={index} className={styles.resourceItem}>
                      <div className={styles.resourceInfo}>
                        <h4 className={styles.resourceName}>{resource.name}</h4>
                        <p className={styles.resourceDescription}>{resource.description}</p>
                      </div>
                      <button 
                        className={`${styles.downloadBtn} ${downloadStatus[resource.filename] ? styles[downloadStatus[resource.filename]] : ''}`}
                        onClick={() => downloadPDF(resource.filename)}
                        disabled={downloadStatus[resource.filename] === 'downloading'}
                      >
                        {downloadStatus[resource.filename] === 'downloading' ? (
                          <div className={styles.spinner}></div>
                        ) : downloadStatus[resource.filename] === 'completed' ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3333 4L6.00001 11.3333L2.66668 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M5.33333 6.66667L8 4M8 4L10.6667 6.66667M8 4V10" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {downloadStatus[resource.filename] === 'downloading' ? 'Downloading...' : 
                         downloadStatus[resource.filename] === 'completed' ? 'Downloaded' : 'Download PDF'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.navigationSection}>
                <h3>Course Navigation</h3>
                <div className={styles.navButtons}>
                  <Link href="/training/facebook-ads" className={`${styles.navBtn} ${styles.secondary}`}>
                    ← Back to Course
                  </Link>
                  <Link href="/training/facebook-ads/why-start-with-facebook-ads" className={`${styles.navBtn} ${styles.primary}`}>
                    Next Lesson →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}