import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import styles from './Testimonials.module.scss';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Raghav Sharma',
    role: 'Residential Client, Gurgaon',
    review:
      'AMDC completely transformed our home. Ashish and his team understood our vision from day one. The attention to detail, the craftsmanship, and the final result exceeded every expectation we had. Our living room is now the pride of our home.',
    initials: 'RS',
  },
  {
    id: 2,
    name: 'Sunita Gupta',
    role: 'Villa Owner, DLF Phase 2',
    review:
      'What sets AMDC apart is how they blend aesthetics with functionality. They turned a blank canvas into a warm, luxurious space that truly feels like us. The process was smooth, timely, and completely transparent. Highly recommend!',
    initials: 'SG',
  },
  {
    id: 3,
    name: 'Tarun Mehta',
    role: 'Residential Client',
    review:
      'I was skeptical about hiring an interior designer but AMDC changed my mind entirely. The team is professional, creative, and incredibly patient. They listened to every small request and delivered beyond what I imagined.',
    initials: 'TM',
  },
  {
    id: 4,
    name: 'Anita Verma',
    role: 'Restaurant Owner',
    review:
      'We hired AMDC to design our restaurant interior and the result was stunning. Every guest who walks in compliments the ambiance. The design is welcoming, premium, and perfectly aligned with our brand. Business has grown since we reopened!',
    initials: 'AV',
  },
  {
    id: 5,
    name: 'Pradeep Kumar',
    role: 'Office Client, Gurgaon',
    review:
      'Our new office space designed by AMDC has completely boosted our team morale. The space is modern, functional, and reflects our company values. Ashish was involved at every stage and delivered on time. A truly professional team.',
    initials: 'PK',
  },
  {
    id: 6,
    name: 'Meera Joshi',
    role: 'Residential Client, Orissa',
    review:
      'Working with AMDC on our farmhouse was a dream. Despite the project being far from their base, they managed everything remotely and with site visits professionally. The container home design is unique, beautiful, and completely liveable.',
    initials: 'MJ',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const total = TESTIMONIALS.length;
  const prev = () => swiperInstance?.slidePrev();
  const next = () => swiperInstance?.slideNext();

  return (
    <section
      id="testimonials"
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      ref={sectionRef}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Client Reviews</p>
          <h2 className={styles.title} id="testimonials-title">
            What Our Clients <em>Say</em>
          </h2>
        </div>

        {/* Cards via Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
          className={styles.swiperContainer}
        >
          {TESTIMONIALS.map((t, idx) => (
            <SwiperSlide key={t.id} style={{ height: 'auto' }}>
              <article
                className={styles.card}
                aria-label={`Review by ${t.name}`}
              >
                {/* Quote mark */}
                <div className={styles.quoteIcon} aria-hidden="true">"</div>

                {/* Review text */}
                <p className={styles.review}>{t.review}</p>

                {/* Author */}
                <div className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">
                    {t.initials}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className={styles.nav} aria-label="Testimonial navigation">
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Previous testimonials"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className={styles.dots} role="tablist">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => swiperInstance?.slideToLoop(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.navBtn}
            onClick={next}
            aria-label="Next testimonials"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
