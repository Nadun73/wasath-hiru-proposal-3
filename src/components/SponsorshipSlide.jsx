import { useState } from 'react';

export default function SponsorshipSlide() {
  const tiers = [
  {
    id: 'title',
    name: 'Title Sponsor',
    price: 'Premium',
    className: 'tier-title-accent',
    benefits: [
      'Naming rights: “Wasath Hiru Udanaya 2026 powered by [Brand]”',
      'Naming rights: “Sithawaloka powered by [Brand]”',
      'Logo prominence on all posters, banners, digital creatives, and stage backdrops',
      'Exclusive branding on the main Avurudu stage and Sithawaloka concert stage',
      'Premium large stall / experience zone for direct audience engagement',
      'Opportunity to run competitions, giveaways, and interactive activations',
      'Frequent emcee mentions and recognition during key moments such as openings, awards, and closing',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Sponsor',
    price: 'High Value',
    className: 'tier-platinum-accent',
    benefits: [
      'Branding as: “Wasath Hiru Udanaya 2026 in association with [Brand]”',
      'Branding as: “Sithawaloka in association with [Brand]”',
      'Dedicated branded stall / activation area',
      'Direct interaction with event attendees',
      'Ability to conduct giveaways, brand-led activities, or mini competitions',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: 'Strong Visibility',
    className: 'tier-gold-accent',
    benefits: [
      'Official association branding: “Wasath Hiru Udanaya 2026 supported by [Brand]”',
      'Official association branding: “Sithawaloka supported by [Brand]”',
      'Occasional emcee mentions during event segments',
      'Ability to distribute products or samples',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: 'Support Tier',
    className: 'tier-silver-accent',
    benefits: [
      'Logo placement on selected event creatives',
      'Visibility on sponsor acknowledgment materials',
      'Recognition as an official supporting sponsor',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsor',
    price: 'Entry Tier',
    className: 'tier-bronze-accent',
    benefits: [
      'Brand visibility across selected sponsor panels',
      'Recognition in sponsor appreciation content',
      'Inclusion of an 80 seconds video',
    ],
  },
];

  const [activeTier, setActiveTier] = useState('title');

  return (
    <section className="slide-content sponsorship-editorial">
      <div className="eyebrow">Sponsorship Opportunities</div>

      <div className="sponsorship-heading-row">
        <h2 className="sponsorship-title">
          Choose Your <span>Sponsorship Tier</span>
        </h2>
      </div>

      <div className="sponsorship-accordion-list">
        {tiers.map((tier) => {
          const isActive = activeTier === tier.id;

          return (
            <div
              key={tier.id}
              className={`tier-accordion ${tier.className} ${isActive ? 'active' : ''}`}
            >
              <button
                type="button"
                className="tier-accordion-header"
                onClick={() => setActiveTier(isActive ? null : tier.id)}
              >
                <div className="tier-accordion-title-wrap">
                  <h3 className="tier-accordion-title">{tier.name}</h3>
                  <p className="tier-accordion-price">{tier.price}</p>
                </div>

                <span className="tier-accordion-icon">
                  {isActive ? '−' : '+'}
                </span>
              </button>

              {isActive && (
                <div className="tier-accordion-content">
                  <ul className="tier-accordion-benefits">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="tier-accordion-benefit-item">
                        <span className="tier-benefit-dot" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}