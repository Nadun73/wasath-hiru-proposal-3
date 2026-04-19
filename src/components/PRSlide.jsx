const prChannels = [
  {
    title: 'Social Media Campaigns',
    text: 'Strategic promotion through digital content designed to build anticipation, engagement, and event awareness.',
  },
  {
    title: 'Posters & Banners',
    text: 'Strong visual presence across campus and event spaces through branded print and display materials.',
  },
  {
    title: 'Event Announcements',
    text: 'Clear communication of schedules, activities, and updates to ensure strong participant awareness.',
  },
  {
    title: 'Internal Coordination',
    text: 'Close communication with organizers and stakeholders to maintain consistency and execution quality.',
  },
];

const prOutcomes = [
  'Increased event visibility',
  'Higher audience engagement',
  'Stronger sponsor exposure',
  'Consistent event communication',
];

export default function PRSlide() {
  return (
    <section className="slide-content pr-editorial">
      <div className="eyebrow">Public Relations</div>

      <div className="pr-top">
        <div className="pr-story">
          <h2 className="section-title">Visibility That Extends Beyond the Event</h2>

          <p className="pr-lead">
            Public Relations plays a central role in shaping how the event is seen,
            shared, and remembered across the SLTC community.
          </p>

          <p>
            Through social media, event materials, announcements, and coordinated
            outreach, the PR effort helps build excitement before the event,
            strengthen engagement during the experience, and sustain visibility
            through consistent communication.
          </p>

          <p>
            For sponsors and partners, this creates a valuable opportunity to be
            associated with a well-promoted campus celebration that carries both
            cultural relevance and strong audience attention.
          </p>
        </div>

        <div className="pr-panel">
          <h3 className="pr-panel-title">Core PR Channels</h3>

          <div className="pr-channel-grid">
            {prChannels.map((channel) => (
              <article key={channel.title} className="pr-channel-card">
                <h4>{channel.title}</h4>
                <p>{channel.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="pr-bottom">
        <div className="pr-impact-strip">
          {prOutcomes.map((item) => (
            <div key={item} className="pr-impact-item">
              <span className="pr-impact-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}