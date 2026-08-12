import { useRef, useEffect, useState } from 'react';
import styles from './Services.module.scss';

interface Service {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    id: 1,
    icon: '🏠',
    title: 'Residential Design',
    subtitle: 'Luxury Living Spaces',
    description:
      'From sprawling villas to intimate apartments, we craft residences that mirror your personality—balancing opulence with comfort in every detail.',
    tags: ['Villas', 'Apartments', 'Penthouses'],
  },
  {
    id: 2,
    icon: '🏢',
    title: 'Commercial Design',
    subtitle: 'Inspiring Workplaces',
    description:
      'We design offices, showrooms, and retail spaces that elevate brand identity and boost productivity through purposeful, premium aesthetics.',
    tags: ['Offices', 'Showrooms', 'Retail'],
  },
  {
    id: 3,
    icon: '🏨',
    title: 'Hospitality Design',
    subtitle: 'Memorable Experiences',
    description:
      'From boutique hotels to fine-dining restaurants, our hospitality interiors create lasting impressions and unforgettable guest experiences.',
    tags: ['Hotels', 'Restaurants', 'Spas'],
  },
  {
    id: 4,
    icon: '📐',
    title: 'Space Planning',
    subtitle: 'Optimised Layouts',
    description:
      'We reimagine your floor plan for maximum flow, natural light, and spatial efficiency—ensuring every square foot feels intentional and beautiful.',
    tags: ['Floor Plans', 'Zoning', '3D Modelling'],
  },
  {
    id: 5,
    icon: '🪑',
    title: 'FF&E Sourcing',
    subtitle: 'Curated Furnishings',
    description:
      'Our global sourcing network gives you access to the finest furniture, fixtures, and equipment—handpicked to complement your bespoke interior.',
    tags: ['Furniture', 'Fixtures', 'Accessories'],
  },
  {
    id: 6,
    icon: '🎨',
    title: 'Turnkey Projects',
    subtitle: 'End-to-End Delivery',
    description:
      'From concept and design to construction supervision and styling, we manage every phase so you receive a flawless finished space on time.',
    tags: ['Concept', 'Execution', 'Styling'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      ref={sectionRef}
      aria-labelledby="services-title"
    >
      {/* Background accent */}
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>What We Offer</p>
          <h2 className={styles.title} id="services-title">
            Our <em>Services</em>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive suite of interior design disciplines—each delivered
            with the same obsessive attention to detail and creative excellence.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid} role="list">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className={styles.card}
              role="listitem"
              style={{ '--delay': `${idx * 100}ms` } as React.CSSProperties}
              aria-label={service.title}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <span className={styles.icon}>{service.icon}</span>
                  <div className={styles.iconGlow} />
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardEyebrow}>{service.subtitle}</p>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>

                  <div className={styles.tags} aria-label="Service categories">
                    {service.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardAccent} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Not sure which service fits your project?
          </p>
          <button
            className={styles.ctaBtn}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            aria-label="Get a free consultation"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
