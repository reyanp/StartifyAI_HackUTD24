// app/page.tsx
import Link from 'next/link';


export default function LandingPage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Startup Predictor</h1>
      <p>Predict which startups will be the next big success!</p>
      <div style={styles.buttons}>
        <Link href="/register" style={styles.button}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '100px 20px',
  },
  buttons: {
    marginTop: '40px',
  },
  button: {
    padding: '15px 30px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};
