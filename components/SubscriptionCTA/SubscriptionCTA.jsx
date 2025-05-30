// components/SubscriptionCTA.jsx
import Link from 'next/link';

export default function SubscriptionCTA() {
  return (
    <div style={styles.container}>
      <h4 style={styles.title}>
        Photo Studio App: <span style={styles.tagline}>For Photographers by Photographers</span>
      </h4>
      <Link href="https://your-stripe-checkout-link.com" passHref>
        <a style={styles.button} target="_blank" rel="noopener noreferrer">
          Create Account
        </a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
    textAlign: 'center',
    border: '1px solid #e5e5e5',
    borderRadius: '12px',
    background: '#f9f9f9',
    maxWidth: '400px',
    margin: '2rem auto',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  title: {
    margin: '0 0 1rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
  },
  tagline: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '400',
    color: '#777',
    marginTop: '0.25rem',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
};

// Example usage: <SubscriptionCTA />
