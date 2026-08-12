import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import styles from './Footer.module.scss';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.main}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="AMDC Home">
            AMDC<span>.</span>
          </Link>
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
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Watch on YouTube"
            >
              <Youtube size={15} />
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
        <div className={styles.legal}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
