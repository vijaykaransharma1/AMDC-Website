import { useEffect, useState, useCallback, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden]     = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const y = Math.max(0, window.scrollY);

    // Scrolled glass background effect kicks in after 60px
    setScrolled(y > 60);

    // Always show near top (<= 80px) or when mobile menu is open
    if (menuOpen || y <= 80) {
      setHidden(false);
    } else if (y > lastScrollY.current + 5) {
      setHidden(true);   // Scrolling down -> hide
    } else if (y < lastScrollY.current - 5) {
      setHidden(false);  // Scrolling up -> show
    }

    lastScrollY.current = y;
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Logo: scroll to top if on home, otherwise navigate home
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Scroll to section — navigate home first if needed, passing scrollTo state
  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Header bar ─────────────────────────── */}
      <header>
        <nav
          className={[
            styles.navbar,
            scrolled  ? styles.scrolled : '',
            hidden    ? styles.hidden   : '',
          ].join(' ')}
          aria-label="Main navigation"
        >
          <a
            href="/"
            className={styles.logo}
            aria-label="AMDC Home"
            onClick={handleLogoClick}
          >
            AMDC<span>.</span>
          </a>

          {/* Desktop nav */}
          <div className={styles.desktopNav} role="navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              About
            </NavLink>
            <button
              className={styles.navLink}
              onClick={() => scrollToSection('services')}
              aria-label="View our services"
            >
              Services
            </button>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              Projects
            </NavLink>
            <button
              className={`${styles.navLink} ${styles.cta}`}
              onClick={() => scrollToSection('contact')}
              aria-label="Contact us"
            >
              Enquire
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/*
       * Mobile overlay — MUST stay outside <header>.
       * backdrop-filter on the scrolled navbar creates a CSS containing block
       * that traps position:fixed children. Sibling placement avoids this.
       */}
      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.active : ''}`
          }
        >
          About
        </NavLink>
        <button
          className={styles.mobileLink}
          onClick={() => scrollToSection('services')}
          aria-label="View our services"
        >
          Services
        </button>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${styles.mobileLink} ${isActive ? styles.active : ''}`
          }
        >
          Projects
        </NavLink>
        <button
          className={`${styles.mobileLink} ${styles.mobileCta}`}
          onClick={() => scrollToSection('contact')}
          aria-label="Contact us"
        >
          Enquire
        </button>
      </div>
    </>
  );
}
