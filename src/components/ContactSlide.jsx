// Uncomment these later when you add actual images to src/assets
// import chathilaImg from '../assets/chathila.jpg';
// import prabodaniImg from '../assets/prabodani.jpg';
// import shenasaImg from '../assets/shenasa.jpg';
// import achinthaImg from '../assets/achintha.jpg';

const contacts = [
  {
    name: 'Chathila H. Walgama',
    role: 'President',
    phone: '+94 70 350 3366',
    initials: 'CW',
    image: null, // replace with chathilaImg later
  },
  {
    name: 'H.M.K. Prabodani',
    role: 'Secretary',
    phone: '+94 71 267 8667',
    initials: 'HP',
    image: null, // replace with prabodaniImg later
  },
  {
    name: 'Shenaz Siraj',
    role: 'PR Coordinator',
    phone: '+94 77 874 6360',
    initials: 'SS',
    image: null, // replace with shenasaImg later
  },
  {
    name: 'Achintha Lakshan',
    role: 'Program and Impact Coordinator',
    phone: '+94 75 547 8603',
    initials: 'AL',
    image: null, // replace with achinthaImg later
  },
];

export default function ContactSlide() {
  return (
    <section className="slide-content contact-editorial">
      <div className="eyebrow">Next Steps</div>

      <div className="contact-main">
        <h2 className="contact-title">
          Let’s Build Something <span>Memorable Together</span>
        </h2>

        <p className="contact-subtext">
          Wasath Hiru Udanaya 2026 offers a unique opportunity to connect your
          brand with a vibrant university audience through culture, engagement,
          and meaningful experiences.
        </p>

        <p className="contact-subtext">
          We would be delighted to collaborate and tailor a partnership that
          aligns with your brand’s vision and objectives.
        </p>

        <button
          className="cta-primary"
          onClick={() => {
            window.location.href = 'mailto:sis@sltc.ac.lk';
          }}
        >
          Contact Us →
        </button>
      </div>

      <div className="contact-grid contact-grid-four">
        {contacts.map((contact) => (
          <div className="contact-card profile-contact-card" key={contact.name}>
            <div className="contact-avatar-wrap">
              {contact.image ? (
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="contact-avatar"
                />
              ) : (
                <div className="contact-avatar placeholder-avatar">
                  {contact.initials}
                </div>
              )}
            </div>

            <h4>{contact.role}</h4>
            <p>{contact.name}</p>
            <span>{contact.phone}</span>
          </div>
        ))}
      </div>
    </section>
  );
}