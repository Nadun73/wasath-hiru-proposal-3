import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSlide(prev => Math.max(1, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const progressWidth = ((currentSlide) / totalSlides) * 100;

  return (
    <>
      <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>

      {/* SLIDE 1: COVER */}
      <div className={`slide s1 ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="geo-bg">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <polygon points="0,0 400,0 0,400" fill="rgba(201, 152, 42, 0.06)" />
            <polygon points="1440,0 1040,0 1440,400" fill="rgba(201, 152, 42, 0.06)" />
            <polygon points="720,900 400,500 1040,500" fill="rgba(201, 152, 42, 0.04)" />
            <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="200" cy="700" r="120" fill="none" stroke="rgba(201, 152, 42, 0.08)" strokeWidth="1" />
            <circle cx="1250" cy="200" r="150" fill="none" stroke="rgba(201, 152, 42, 0.06)" strokeWidth="1" />
          </svg>
        </div>
        <div className="tag">Official Proposal</div>
        <h1>Wasath Hiru Udanaya<br /><span>2026</span></h1>
        <p className="subtitle" style={{ marginTop: '20px' }}>Celebrate the spirit of the Sinhala and Tamil New Year</p>
        <div className="flags">
          <div className="flag">🎓 SLTC</div>
          <div className="flag">🤝 Students Interactive Society</div>
        </div>
      </div>

      {/* SLIDE 2: ABOUT */}
      <div className={`slide s2 ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="two-col">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="big-initial">WH</div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '10px' }}>The Organizers</p>
          </div>
          <div className="about-text">
            <div className="slide-label">Who We Are</div>
            <h2>Bridging Tradition <br/>& Innovation</h2>
            <p style={{ marginTop: '16px' }}>SLTC is a premier institution producing graduates equipped with practical skills and leadership. The Students Interactive Society (SIS) bridges the gap between students, academic staff, and administration through teamwork.</p>
          </div>
        </div>
      </div>

      {/* SLIDE 3: SPONSORSHIPS (Like the Packages slide) */}
      <div className={`slide ${currentSlide === 3 ? 'active' : ''}`} style={{ backgroundColor: '#0d0d0d' }}>
        <div className="slide-label">Investment</div>
        <h2 className="title" style={{ marginBottom: '32px' }}>Sponsorship Tiers</h2>
        <div className="pkg-wrap">
          <div className="pkg-card basic">
            <div className="pkg-badge">Exclusive</div>
            <div className="pkg-price">800,000 <span>LKR</span></div>
            <h3>Title Sponsor</h3>
            <div className="pkg-divider"></div>
            <ul>
              <li>Speech during opening ceremony</li>
              <li>Honor to light the oil lamp</li>
              <li>15 Banners & 10 flags</li>
              <li>180s Audio-Visual Ad</li>
            </ul>
          </div>
          <div className="pkg-card standard">
            <div className="pkg-badge">High Impact</div>
            <div className="pkg-price">600,000 <span>LKR</span></div>
            <h3>Platinum Sponsor</h3>
            <div className="pkg-divider"></div>
            <ul>
              <li>Honor to light the oil lamp</li>
              <li>Corporate box with food</li>
              <li>15 Banners & 10 flags</li>
              <li>180s Audio-Visual Ad</li>
            </ul>
          </div>
          <div className="pkg-card premium">
            <div className="pkg-badge">Value</div>
            <div className="pkg-price">300,000 <span>LKR</span></div>
            <h3>Gold Sponsor</h3>
            <div className="pkg-divider"></div>
            <ul>
              <li>Honor to light the oil lamp</li>
              <li>Corporate box with food</li>
              <li>10 Banners & 10 flags</li>
              <li>120s Audio-Visual Ad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SLIDE 4: PARTNERSHIPS (Like the Services grid) */}
      <div className={`slide s4 ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="slide-label">Collaboration</div>
        <h2 className="title">Partnership Types</h2>
        <div className="services-grid">
          <div className="svc-card">
            <div className="svc-icon">🍱</div>
            <h3>Food Partner</h3>
            <p>200 Food Packets</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon">📺</div>
            <h3>Media Partner</h3>
            <p>Concert Advertisements</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon">🚌</div>
            <h3>Transport Partner</h3>
            <p>Logistics Support</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon">📸</div>
            <h3>Photography Partner</h3>
            <p>Full Event Coverage</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon">🚁</div>
            <h3>Dronography Partner</h3>
            <p>Aerial Coverage</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon">🎁</div>
            <h3>Gift Partner</h3>
            <p>20 Gift Packs</p>
          </div>
        </div>
      </div>

      {/* SLIDE 5: CONTACT */}
      <div className={`slide s13 ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="slide-label">Next Steps</div>
        <h2 className="title">Join The Experience</h2>
        <div className="steps-row">
          <div className="step-box">
            <div className="step-num">1</div>
            <h3>Chathila H. Walgama</h3>
            <p>President, SIS<br/>070 350 3366</p>
          </div>
          <div className="step-box">
            <div className="step-num">2</div>
            <h3>H.M.K. Prabodani</h3>
            <p>Secretary, SIS<br/>071 267 8667</p>
          </div>
          <div className="step-box">
            <div className="step-num">3</div>
            <h3>Shenaz Siraj</h3>
            <p>PR Coordinator, SIS<br/>077 874 6360</p>
          </div>
        </div>
        <button className="cta-big" onClick={() => window.location.href='mailto:example@sltc.ac.lk'}>
          Partner With Us 🤝
        </button>
      </div>

      {/* NAV */}
      <div className="nav">
        <button onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}>←</button>
        <span className="slide-counter">{currentSlide} / {totalSlides}</span>
        <button onClick={() => setCurrentSlide(prev => Math.min(totalSlides, prev + 1))}>→</button>
      </div>
    </>
  );
}