import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

import HeroSlide from './components/HeroSlide';
import AboutSlide from './components/AboutSlide';
import EventSlide from './components/EventSlide';
import SithawalokaSlide from './components/SithawalokaSlide';
import PRSlide from './components/PRSlide';
import SponsorshipSlide from './components/SponsorshipSlide';
import PartnershipSlide from './components/PartnershipSlide';
import ContactSlide from './components/ContactSlide';
import Navigation from './components/Navigation';
import mandalaPattern from './assets/mandala-pattern.svg';

export default function App() {
  const slides = useMemo(
    () => [
      { id: 1, component: <HeroSlide /> },
      { id: 2, component: <AboutSlide /> },
      { id: 3, component: <EventSlide /> },
      { id: 4, component: <SithawalokaSlide /> },
      { id: 5, component: <PRSlide /> },
      { id: 6, component: <SponsorshipSlide /> },
      { id: 7, component: <PartnershipSlide /> },
      { id: 8, component: <ContactSlide /> },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(1);
  const slideStageRef = useRef(null);
  const totalSlides = slides.length;

  const goNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  };

  const goPrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const resetScroll = () => {
      if (slideStageRef.current) {
        slideStageRef.current.scrollTop = 0;
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(resetScroll);
    });
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const activeSlide = slides.find((slide) => slide.id === currentSlide);

return (
  <div className="app-shell">
    <div className="bg-orb bg-orb-1" />
    <div className="bg-orb bg-orb-2" />
    <div className="bg-grid" />

    <main className="presentation-frame">
      <div className="moving-gradient" />

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>

      <section ref={slideStageRef} className="slide-stage">
        {activeSlide?.component}
      </section>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={goPrev}
        onNext={goNext}
      />
    </main>
  </div>
);
}