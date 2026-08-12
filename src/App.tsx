import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/Navbar/Navbar';
import Loader from '@/components/Loader/Loader';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Projects from '@/pages/Projects/Projects';
import { useLenis } from '@/hooks/useLenis';
import '@/styles/global.scss';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function AppInner() {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {!loaded && <Loader onComplete={handleLoaderComplete} />}
        {loaded && <AppInner />}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
