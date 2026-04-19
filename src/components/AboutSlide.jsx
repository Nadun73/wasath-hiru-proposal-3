import sltcLogo from '../assets/sltc-logo.png';
import sisLogo from '../assets/sis-logo.png';

import wasath2025Img from '../assets/wasath-2025.jpg';
import afterGlowImg from '../assets/after-glow.jpg';
import alohaIgniteImg from '../assets/aloha-ignite.jpg';
import echoesOfHoliImg from '../assets/echoes-of-holi.jpg';
import floodReliefImg from '../assets/flood-relief.jpg';

const events = [
  {
    title: 'Wasath Hiru Udanaya 2025',
    image: wasath2025Img,
    link: 'https://www.facebook.com/media/set/?set=a.1133951945418156&type=3',
    tag: 'Avurudu Celebration',
    description:
      'The previous edition of Wasath Hiru Udanaya, celebrating culture, unity, and the festive spirit of the Sinhala and Tamil New Year on campus.',
  },
  {
    title: 'After Glow',
    image: afterGlowImg,
    link: 'https://www.facebook.com/media/set/?set=a.1134006528746031&type=3',
    tag: 'New Year Night',
    description:
      'A high-energy celebration that extended the Avurudu spirit into a vibrant student experience shaped by music, connection, and campus life.',
  },
  {
    title: 'Aloha Ignite',
    image: alohaIgniteImg,
    link: 'https://www.facebook.com/media/set/?set=a.1213855397427810&type=3',
    tag: 'Freshers Night',
    description:
      'A welcoming platform for new students that blended entertainment, interaction, and shared memories to create a strong first impression of university life.',
  },
  {
    title: 'Echoes of Holi',
    image: echoesOfHoliImg,
    link: 'https://www.facebook.com/media/set/?set=a.1202996471847036&type=3',
    tag: 'Cultural Experience',
    description:
      'A colourful celebration built around joy, student energy, and shared experiences that strengthened campus engagement through culture and festivity.',
  },
  {
    title: 'Flood Relief Program',
    image: floodReliefImg,
    link: 'https://www.facebook.com/photo.php?fbid=785285357869260&set=pb.100091634074856.-2207520000&type=3',
    tag: 'Community Impact',
    description:
      'A student-led social initiative reflecting empathy, responsibility, and the collective commitment of the campus community to meaningful action.',
  },
];

export default function AboutSlide() {
  return (
    <section className="slide-content about-editorial">
      <div className="eyebrow">About the Organizers</div>

      <div className="about-headline-row">
        <div>
          <h2 className="section-title">The People Behind the Experience</h2>
        </div>
        <p className="about-lead">
          SLTC and the Student Interactive Society bring together academic
          excellence, student leadership, and event culture to create experiences
          that feel purposeful, memorable, and community-driven.
        </p>
      </div>

      <div className="editorial-org-grid">
        <article className="editorial-org-card">
          <div className="editorial-org-top">
            <div className="editorial-logo-wrap">
              <img src={sltcLogo} alt="SLTC logo" className="org-logo" />
            </div>
            <div className="editorial-org-heading">
              <span className="org-kicker">Institution</span>
              <h3>Sri Lanka Technology Campus</h3>
            </div>
          </div>

          <p> Sri Lanka Technology Campus is a pioneer in private higher education, redefining how future leaders are shaped through an industry-driven, innovation-focused ecosystem. Built on modern learning, real-world exposure, and interdisciplinary collaboration, SLTC goes beyond traditional education to develop graduates who are academically strong, professionally capable, and globally competitive. </p>
          <p> At SLTC, learning is a journey of creation, leadership, and transformation - empowering students to explore their full potential across diverse domains. The campus cultivates skilled engineers, brilliant scientists, visionary business leaders and entrepreneurs, technical experts, and creative artists and musicians. </p>
          <p> With a strong culture of innovation and excellence, SLTC produces individuals who think critically, act boldly, and lead confidently - ready to drive impact, shape industries, and define the future of Sri Lanka and beyond. </p>
        
        </article>

        <article className="editorial-org-card">
          <div className="editorial-org-top">
            <div className="editorial-logo-wrap">
              <img src={sisLogo} alt="Students Interactive Society logo" className="org-logo" />
            </div>
            <div className="editorial-org-heading">
              <span className="org-kicker">Student Body</span>
              <h3>Student Interactive Society</h3>
            </div>
          </div>

          <p> The Student Interactive Society stands as the official student union of Sri Lanka Technology Campus, representing the voice, energy, and spirit of the student community. </p>
          <p> Formed through a democratic student election, SIS is led by elected student representatives who serve as the vital bridge between the university administration and students—ensuring that student perspectives are heard, valued, and acted upon. </p>
          <p> Beyond representation, SIS is a driving force of campus life, curating impactful experiences that shape well-rounded individuals. From large-scale cultural festivals and concerts to panel discussions, leadership programs, and national-level initiatives during times of need, SIS creates platforms for engagement, expression, and growth. </p>
          <p> Through its initiatives, SIS empowers students to develop leadership, communication, and organizational skills while fostering a strong sense of unity and belonging—building not just graduates, but confident, capable leaders of tomorrow. </p>
        
        </article>
      </div>

      <div className="editorial-events-block">
        <div className="section-heading-row">
          <h3 className="subheading">Selected Past Events</h3>
          <span className="mini-note">Hover and click to explore</span>
        </div>

        <div className="editorial-events-grid-five">
          {events.map((event) => (
            <a
                key={event.title}
                href={event.link}
                target="_blank"
                rel="noreferrer"
                className="editorial-event-card"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();

                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const midX = rect.width / 2;
                  const midY = rect.height / 2;

                  const rotateX = ((y - midY) / midY) * -6;
                  const rotateY = ((x - midX) / midX) * 6;

                  card.style.transform = `
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.02)
                  `;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = '';
                }} >
              <div className="editorial-event-image-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="editorial-event-image"
                />
                <div className="editorial-event-overlay">
                  <span className="event-view">Open ↗</span>
                </div>
              </div>

              <div className="editorial-event-copy">
                <span className="event-tag">{event.tag}</span>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="see-more-wrap">
          <a
            href="https://www.facebook.com/SLTCMedia/photos_albums"
            target="_blank"
            rel="noreferrer"
            className="see-more-button"
          >
            See More Projects & Events ↗
          </a>
        </div>
      </div>
    </section>
  );
}