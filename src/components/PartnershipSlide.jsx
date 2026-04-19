import { useState } from 'react';

export default function PartnershipSlide() {
  const partnerships = [
    {
      id: 'media',
      name: 'Official Media Partner',
      subtitle: 'Brand Visibility',
      description:
        'A strategic media collaboration that amplifies event visibility before, during, and after the celebration.',
      benefits: [
        'Brand placement across media creatives and publicity materials',
        'Visibility in event-related digital promotions and announcements',
        'Recognition as the official media partner of the event',
      ],
    },
    {
      id: 'print',
      name: 'Official Print Partner',
      subtitle: 'Production Support',
      description:
        'A partnership focused on delivering high-quality print assets that support event branding and on-ground communication.',
      benefits: [
        'Recognition across printed event materials',
        'Brand presence on selected production-backed collateral',
        'Association with the visual execution of the event experience',
      ],
    },
    {
      id: 'gift',
      name: 'Official Gift Partner',
      subtitle: 'Reward Experiences',
      description:
        'An opportunity to become part of winner recognition, guest appreciation, and memorable gifting moments during the event.',
      benefits: [
        'Brand association with giveaways and audience appreciation moments',
        'Recognition in prize and gift-related event segments',
        'Direct emotional connection with participants through branded rewards',
      ],
    },
    {
      id: 'leisure',
      name: 'Official Leisure Experience Partner',
      subtitle: 'Lifestyle Activation',
      description:
        'A premium experiential partnership centered around chill zones, lifestyle activations, and interactive audience experiences.',
      benefits: [
        'Exclusive branding of chill zones, leisure areas, and experiential spaces',
        'Direct engagement with students through interactive lifestyle activations',
        'Inclusion in visual content featuring relaxation and experience moments',
        'Expected: setup and activation of leisure / chill experience zones',
        'Expected: provision of games, entertainment, or experiential installations',
        'Expected: co-branded audience engagement campaigns',
        'Expected: sponsorship in cash and gift vouchers',
      ],
    },
    {
      id: 'energy',
      name: 'Official Energy Partner',
      subtitle: 'High-Engagement Moments',
      description:
        'A high-visibility partnership tied to competitive excitement, game branding, and hype-driven audience interaction.',
      benefits: [
        'Branding of all Avurudu games and high-energy competitions',
        'Stage mentions and visibility during key competitive moments',
        'Integration into winner celebrations and hype content',
        'Expected: sponsorship of traditional games and competition segments',
        'Expected: provision of rewards or prizes for winners',
        'Expected: active brand presence in hype and crowd engagement activities',
        'Expected: sponsorship in cash',
      ],
    },
    {
      id: 'connectivity',
      name: 'Official Connectivity Partner',
      subtitle: 'Digital Enablement',
      description:
        'A digital-first partnership that supports connectivity, communication, and audience interaction across the event journey.',
      benefits: [
        'Exclusive digital branding across event communication channels',
        'Stage and media mentions as the official digital enabler',
        'Expected: support for digital engagement systems and platforms',
        'Expected: technical support for live interactions and online engagement',
        'Expected: sponsorship in cash',
      ],
    },
  ];

  const [activePartnership, setActivePartnership] = useState('media');

  return (
    <section className="slide-content partnership-editorial">
      <div className="eyebrow">Partnership Opportunities</div>

      <div className="partnership-heading">
        <h2 className="section-title">
          Collaborate With Us <span>Beyond Sponsorship</span>
        </h2>

        <p className="section-subtext">
          Partnerships offer flexible opportunities to align your brand with a
          vibrant cultural experience while contributing to meaningful event
          execution and audience engagement.
        </p>
      </div>

      <div className="partnership-accordion-list">
        {partnerships.map((partnership) => {
          const isActive = activePartnership === partnership.id;

          return (
            <div
              key={partnership.id}
              className={`partnership-accordion ${isActive ? 'active' : ''}`}
            >
              <button
                type="button"
                className="partnership-accordion-header"
                onClick={() =>
                  setActivePartnership(isActive ? null : partnership.id)
                }
              >
                <div className="partnership-accordion-title-wrap">
                  <h3 className="partnership-accordion-title">
                    {partnership.name}
                  </h3>
                  <p className="partnership-accordion-subtitle">
                    {partnership.subtitle}
                  </p>
                </div>

                <span className="partnership-accordion-icon">
                  {isActive ? '−' : '+'}
                </span>
              </button>

              {isActive && (
                <div className="partnership-accordion-content">
                  <p className="partnership-accordion-description">
                    {partnership.description}
                  </p>

                  <ul className="partnership-accordion-benefits">
                    {partnership.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="partnership-accordion-benefit-item"
                      >
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