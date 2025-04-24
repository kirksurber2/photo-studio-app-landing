'use client';
import { useState } from 'react';
import styles from './UnderConstructionModal.module.css';
import axios from 'axios';
// import ReactLoading from 'react-loading';

export default function UnderConstructionModal() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_MARKETING_API}/marketing/new-lead`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1>Launching May 9th</h1>
        <p>
          Session tracking, custom workflows, pre-built templates (workflows and sms/email), client scheduling, galleries and Stripe integration all in 1
        </p>
        <p>If you’d like more information, drop your email below and we’ll reach out!</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            {loading ? (
              // <ReactLoading type="spin" color="#000000" height={30} width={30} />
              <p>Loading...</p>
            ) : (
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Notify Me'}
            </button>
          </form>
        ) : (
          <p className={styles.thankYou}>✅ Thank you! We'll be in touch soon.</p>
        )}
      </div>
    </div>
  );
}
