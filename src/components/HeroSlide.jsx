import heroRing from '../assets/hero-ring.png';
import heroBadge from '../assets/hero-badge.png';
import sltcLogo from '../assets/sltc-logo.png';
import sisLogo from '../assets/sis-logo.png';

export default function HeroSlide() {
  return (
    <section className="slide-content hero-slide">
      <div className="eyebrow">Official Proposal 2026</div>

      <div className="hero-emblem-wrap">
      <div className="hero-emblem-glow" />

      <div className="hero-emblem">
        <img src={heroRing} alt="" className="hero-ring-spin" />
        <img
          src={heroBadge}
          alt="Wasath Hiru Udanaya 2026 logo"
          className="hero-badge-static"
        />
      </div>

</div>
      <h1 className="hero-title">SLTC Wasath Hiru Udanaya</h1>
      <div className="hero-year">2026</div>
      <h2 className="hero-subtitle">Sponsorship & Partnership Proposal</h2>
      <p className="hero-text">
        Celebrate the spirit of the Sinhala and Tamil New Year through culture,
        community, and meaningful brand collaboration.
      </p>

        <div className="hero-organizers">
      <div className="hero-organizers-line" />

      <p className="hero-organizers-text">
        Organized by
      </p>

      <div className="hero-organizers-logos">
        <img src={sltcLogo} alt="SLTC Logo" />
        <img src={sisLogo} alt="SIS Logo" />
      </div>
    </div>
        </section>

  );
}