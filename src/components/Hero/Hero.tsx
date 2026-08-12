import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.3;
        bgRef.current.style.transform = `scale(1.05) translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.bg} aria-hidden="true">
        <img
          ref={bgRef}
          src="/images/amdcprojects/Hero.jpg"
          alt="Luxury interior design"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <p className={`${styles.eyebrow} ${animate ? styles.animate : ''}`}>
          Interior Design Studio
        </p>
        <h1 className={`${styles.title} ${animate ? styles.animate : ''}`}>
          Where Space<br />Becomes <em>Art</em>
        </h1>
        <p className={`${styles.subtitle} ${animate ? styles.animate : ''}`}>
          We craft extraordinary interiors that transcend the ordinary—spaces where luxury, 
          function, and emotion exist in perfect harmony.
        </p>
        <div className={`${styles.actions} ${animate ? styles.animate : ''}`}>
          <button
            className={styles.btnPrimary}
            onClick={scrollToProjects}
            aria-label="View our projects"
          >
            View Projects
          </button>
          <button
            className={styles.btnSecondary}
            onClick={scrollToContact}
            aria-label="Start a project with us"
          >
            Start a Project
          </button>
        </div>
      </div>

      <div className={`${styles.scroll} ${animate ? styles.animate : ''}`} aria-hidden="true">
        <span>Scroll</span>
      </div>
    </section>
  );
}
