import React from 'react';
import styles from './TrainingSection.module.css';

export default function VideoSplitSection({ videoSrc, title, description, reverse = false }) {
  return (
    <section className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.video}>
        <video src={videoSrc} controls playsInline muted />
      </div>
      <div className={styles.text}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
}
