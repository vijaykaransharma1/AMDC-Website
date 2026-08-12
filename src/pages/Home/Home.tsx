import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero/Hero';
import AboutPreview from '@/components/AboutPreview/AboutPreview';
import Services from '@/components/Services/Services';
import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const location = useLocation();

  // When navigated here from another page with a scrollTo state (e.g. clicking
  // Services or Enquire in the Navbar from the About page), scroll to that section.
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    // Small delay lets the page fully paint before scrolling
    const timer = setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>AMDC Interior Design | Luxury Spaces</title>
        <meta
          name="description"
          content="AMDC Interior Design crafts timeless, luxurious interiors that redefine elegance. Explore our portfolio of premium residential and commercial projects."
        />
        <meta property="og:title" content="AMDC Interior Design | Luxury Spaces" />
        <meta
          property="og:description"
          content="Premium interior design studio specializing in luxury residential, commercial, and hospitality spaces."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AMDC Interior Design | Luxury Spaces" />
        <link rel="canonical" href="https://amdc.in/" />
      </Helmet>

      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <ProjectGrid preview />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
