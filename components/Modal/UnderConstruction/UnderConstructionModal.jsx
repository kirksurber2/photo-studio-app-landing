import { useState } from 'react';
import styles from './UnderConstructionModal.module.css';

export default function UnderConstructionModal() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook up to your API or mailing list logic
    setSubmitted(true);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1>🚧 We're Under Construction</h1>
        <p>
          We’re improving the security and scalability of our application to protect our users and their clients' privacy and safety.
        </p>
        <p>If you’d like more information, drop your email below and we’ll reach out!</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Notify Me</button>
          </form>
        ) : (
          <p className={styles.thankYou}>✅ Thank you! We'll be in touch soon.</p>
        )}
      </div>
    </div>
  );
}
