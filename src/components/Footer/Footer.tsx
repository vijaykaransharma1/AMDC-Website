import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, X, Code2, Mail } from 'lucide-react';
import styles from './Footer.module.scss';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function DevModal({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Developer Info">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className={styles.modalIcon}>
          <Code2 size={28} />
        </div>

        <p className={styles.modalLabel}>This Website is</p>
        <h2 className={styles.modalTitle}>Designed &amp; Developed by</h2>
        <h3 className={styles.modalName}>Vijay Karan Sharma</h3>

        <div className={styles.modalDivider} />

        <div className={styles.modalLinks}>
          <a href="mailto:vijaykaran1222@gmail.com" className={styles.modalLink}>
            <Mail size={14} />
            vijaykaran1222@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [devOpen, setDevOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer} aria-label="Site footer">
        <div className={styles.main}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="AMDC Home">
              <img
                src="/images/logo transpranet.png"
                alt="AMDC – Ashish Maan Design Company"
                className={styles.logoImg}
              />
            </Link>
            <span className={styles.tagline}>Ashish Maan Design Company</span>
            <div className={styles.divider} aria-hidden="true" />
            <p>
              Architecture • Space Planner • Interior Designers<br />
              Designing living spaces and Events since 2014.
            </p>
            <div className={styles.social} aria-label="Social media links">
              <a
                href="https://instagram.com/ashishmaandesigncompany"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className={styles.col} aria-label="Footer navigation">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><button onClick={() => scrollTo('services')}>Services</button></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919899663437">+91 98996 63437</a></li>
              <li><a href="mailto:contact.amdcarchitect@gmail.com">contact.amdcarchitect@gmail.com</a></li>
              <li><a href="#">Sec - 46, Gurugram 122003</a></li>
              <li><a href="#">Mon–Sat: 10AM–7PM</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} AMDC Ashish Maan Design Company. All rights reserved.</p>
          <button
            className={styles.devCredit}
            onClick={() => setDevOpen(true)}
            aria-label="About the developer"
          >
            About Website
          </button>
        </div>
      </footer>

      {devOpen && <DevModal onClose={() => setDevOpen(false)} />}
    </>
  );
}
