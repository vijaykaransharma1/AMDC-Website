import { useEffect, useState } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHidden(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
      setPercent(Math.floor(current));
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`} role="status" aria-label="Loading">
      <div className={styles.logo}>
        AMDC<span>.</span>
      </div>
      <div className={styles.bar} aria-hidden="true" />
      <span className={styles.percent}>{percent}%</span>
    </div>
  );
}
