import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer/Footer';
import styles from './About.module.scss';

const whyCards = [
  {
    icon: '✦',
    title: 'Bespoke Approach',
    desc: 'Every project is uniquely tailored to your lifestyle, preferences, and aspirations—never a template, always a masterpiece.',
  },
  {
    icon: '◆',
    title: 'End-to-End Service',
    desc: 'From concept to completion, we manage every detail so you experience a seamless, stress-free transformation.',
  },
  {
    icon: '●',
    title: 'Artisan Craftsmanship',
    desc: 'We partner with India\'s finest craftsmen and global luxury suppliers to source materials of exceptional quality.',
  },
  {
    icon: '▲',
    title: 'On-Time Delivery',
    desc: 'Our rigorous project management systems ensure your space is delivered on time and within agreed budgets.',
  },
  {
    icon: '◇',
    title: 'Sustainable Design',
    desc: 'We prioritise eco-conscious materials and energy-efficient design solutions without compromising on beauty.',
  },
  {
    icon: '★',
    title: '15+ Years Expertise',
    desc: 'Over a decade and a half of crafting extraordinary spaces across India gives us unmatched depth of experience.',
  },
];

const principles = [
  {
    title: 'Less, but Better',
    desc: 'We believe in purposeful reduction—every element must earn its place in the composition.',
  },
  {
    title: 'Materials as Poetry',
    desc: 'Natural materials speak a timeless language. We let their inherent beauty lead the design.',
  },
  {
    title: 'Light as Architecture',
    desc: 'We choreograph natural and artificial light to sculpt space and evoke emotion throughout the day.',
  },
  {
    title: 'Function Elevated',
    desc: 'Beauty must serve life. We obsess over ergonomics, flow, and the lived experience of every space.',
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About AMDC | Our Story & Design Philosophy</title>
        <meta
          name="description"
          content="Learn about AMDC Ashish Maan Design Company—our journey since 2014, design philosophy, mission, and why leading clients trust us to transform their spaces."
        />
        <meta property="og:title" content="About AMDC | Our Story & Design Philosophy" />
        <link rel="canonical" href="https://amdc.in/about" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="about-hero-title">
          <div className={styles.bg} aria-hidden="true">
            <img
              src="/images/amdcprojects/Residence terrace view 1 (4).jpg"
              alt="AMDC studio interior"
            />
          </div>
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Our Story</p>
            <h1 id="about-hero-title">
              Passion for <em>Beauty</em>
            </h1>
          </div>
        </section>

        {/* Company Story */}
        <section
          className={styles.section}
          aria-labelledby="story-title"
          style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)' }}
        >
          <div className={styles.story}>
            <div>
              <p className={styles.eyebrow}>Since 2009</p>
              <h2 className={styles.sectionTitle} id="story-title">
                Born from a <em>Belief</em><br />in Great Design
              </h2>
              <div className={styles.divider} aria-hidden="true" />
              <p className={styles.body}>
                AMDC Ashish Maan Design Company was founded in 2014 with a singular conviction: 
                that every person deserves to live and work in a beautifully designed space. 
                What began as a boutique studio in Hyderabad has grown into one of India's 
                most respected interior design firms.
              </p>
              <br />
              <p className={styles.body}>
                Over 15 years, we have had the privilege of transforming private residences, 
                corporate headquarters, boutique hotels, and flagship retail environments. 
                Each project has refined our craft and deepened our understanding of how 
                design profoundly shapes human experience.
              </p>
              <br />
              <p className={styles.body}>
                Today, our team of architects, designers, and project managers brings together 
                decades of collective expertise—united by an uncompromising commitment to 
                quality, originality, and client satisfaction.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img
                src="/images/amdcprojects/TARUN LIVING view  (1).jpg"
                alt="AMDC design team at work"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className={styles.altBg}>
          <section
            aria-labelledby="mission-title"
            style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1400px', margin: '0 auto' }}
          >
            <p className={styles.eyebrow} style={{ textAlign: 'center' }}>What Drives Us</p>
            <h2
              className={styles.sectionTitle}
              id="mission-title"
              style={{ textAlign: 'center', margin: '0 auto 3rem', maxWidth: '40ch' }}
            >
              Our <em>Mission</em> & Vision
            </h2>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon} aria-hidden="true">M</div>
                <h3>Our Mission</h3>
                <p>
                  To create interiors that are not merely beautiful, but deeply personal—spaces 
                  that reflect the unique character of each client and stand the test of time. 
                  We are committed to delivering excellence without compromise in every project 
                  we undertake, regardless of scale.
                </p>
              </div>

              <div className={styles.pillar}>
                <div className={styles.pillarIcon} aria-hidden="true">V</div>
                <h3>Our Vision</h3>
                <p>
                  To be India's most trusted luxury interior design studio—known not just for 
                  beautiful spaces, but for the transformative relationships we build with our 
                  clients. We envision a world where exceptional design is accessible to all 
                  who seek it.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Design Philosophy */}
        <section
          aria-labelledby="philosophy-title"
          style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1400px', margin: '0 auto' }}
        >
          <div className={styles.philosophy}>
            <div>
              <p className={styles.eyebrow}>How We Think</p>
              <h2 className={styles.sectionTitle} id="philosophy-title">
                Our Design <em>Philosophy</em>
              </h2>
              <div className={styles.divider} aria-hidden="true" />
              <p className={styles.body}>
                Great interior design is not about filling rooms with expensive furniture. 
                It is about understanding people—their rhythms, their stories, their dreams—and 
                translating that understanding into spaces that feel inevitable.
              </p>

              <div className={styles.principles} aria-label="Design principles">
                {principles.map((p, i) => (
                  <div className={styles.principle} key={i}>
                    <span className={styles.num} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={styles.prinContent}>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.philosophyImage}>
              <img
                src="/images/amdcprojects/Outdoor walkway 2 ps 1 (4).jpg"
                alt="Design philosophy in practice"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <div className={styles.altBg}>
          <section
            aria-labelledby="why-title"
            style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)', maxWidth: '1400px', margin: '0 auto' }}
          >
            <p className={styles.eyebrow} style={{ textAlign: 'center' }}>Why AMDC</p>
            <h2
              className={styles.sectionTitle}
              id="why-title"
              style={{ textAlign: 'center', margin: '0 auto 3rem', maxWidth: '40ch' }}
            >
              What Sets Us <em>Apart</em>
            </h2>

            <div className={styles.whyGrid}>
              {whyCards.map((card, i) => (
                <div className={styles.whyCard} key={i}>
                  <span className={styles.whyIcon} aria-hidden="true">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>
            Ready to Create<br />Something <em>Extraordinary</em>?
          </h2>
          <p>
            Let's start with a conversation about your vision. 
            Our team is ready to listen, inspire, and deliver.
          </p>
          <Link to="/#contact" className={styles.ctaBtn} aria-label="Enquire about our services">
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
