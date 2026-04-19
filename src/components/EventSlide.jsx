import hruLogo from '../assets/hiru-udanaya-logo.png';

const objectives = [
  'Promote unity and collaboration among students, academic staff, and non-academic staff.',
  'Preserve and celebrate Sri Lankan cultural heritage through Avurudu customs, games, and performances.',
  'Encourage student leadership and active participation in planning and execution.',
  'Strengthen teamwork, communication, and community engagement across campus.',
  'Create a memorable and inclusive university experience through cultural celebration.',
];

export default function EventSlide() {
  return (
    <section className="slide-content event-wireframe">
      <div className="eyebrow">Event Overview</div>

      <div className="event-wireframe-top">
        <div className="event-logo-panel">
          <img
            src={hruLogo}
            alt="Wasath Hiru Udanaya 2026 logo"
            className="event-logo floating-logo large-logo"
          />
        </div>

        <div className="event-heading-panel">
          <h2 className="event-main-title">
            Wasath Hiru Udanaya
            <span>2026</span>
          </h2>
        </div>
      </div>

      <div className="event-wireframe-bottom">
        <div className="event-description-panel">
          <h3 className="event-subtitle">Event Description</h3> 

          <p className="event-description-lead">
              Wasath Hiru Udanaya 2026 is a vibrant cultural celebration that brings to life the spirit of the Sinhala and Tamil New Year within the Sri Lanka Technology Campus community. </p>
          <p> Designed as an immersive experience, the event recreates the essence of Avurudu through traditional games, rituals, cultural performances, music, authentic cuisine, and interactive moments that unite students and staff beyond academic boundaries. </p>
          <p> Blending heritage with youthful energy, the festival creates a dynamic atmosphere where tradition meets modern campus life. From competitive Avurudu games to engaging social experiences, it encourages participation, connection, and celebration. </p>
          <p> More than a festive gathering, Wasath Hiru Udanaya serves as a platform for cultural pride, student leadership, and community building - while offering brands a unique opportunity to engage with a highly active and diverse university audience in an authentic, memorable setting. </p>

        </div>

        <div className="event-objectives-panel">
          <h3 className="event-subtitle">Objectives</h3>

          <ul className="objective-list">
            {objectives.map((objective, index) => (
              <li key={index} className="objective-item">
                <span className="objective-dot" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}