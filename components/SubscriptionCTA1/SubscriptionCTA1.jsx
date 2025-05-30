// components/SubscriptionCTA.jsx
import Link from 'next/link';

export default function SubscriptionCTA() {
  return (
    <div style={styles.container}>
      <h4 style={styles.title}>
        Track Your Sessions
      </h4>
      <p style={styles.subtitle}>
        Simplify Your Photography Business with Ease
      </p>
      <Link href="https://your-stripe-checkout-link.com" passHref>
        <a style={styles.button} target="_blank" rel="noopener noreferrer">
          Get Started
        </a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '16px',
    background: '#fff',
    maxWidth: '480px',
    margin: '2rem auto',
    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
  },
  title: {
    margin: '0',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#222',
  },
  subtitle: {
    margin: '1rem 0 2rem',
    fontSize: '1.1rem',
    fontWeight: '400',
    color: '#555',
  },
  button: {
    display: 'inline-block',
    padding: '0.85rem 2rem',
    backgroundColor: '#0056d2',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
};
