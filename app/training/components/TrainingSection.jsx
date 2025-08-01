'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../training.module.css';

export default function TrainingSection({ 
  videoSrc, 
  title, 
  description, 
  features = [],
  reverse = false 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`${styles.trainingSection} ${reverse ? styles.reverse : ''} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.trainingContent}>
        <div className={styles.contentText}>
          <h3 className={styles.contentTitle}>{title}</h3>
          <p className={styles.contentDescription}>{description}</p>
          
          {features.length > 0 && (
            <ul className={styles.contentFeatures}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )}
          
          <button className={styles.learnMoreBtn}>
            Learn More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.contentVideo}>
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              src={videoSrc}
              className={styles.trainingVideo}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={false}
            />
            <div className={styles.videoOverlay} onClick={toggleVideo}>
              <button className={styles.playButton}>
                {!isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}