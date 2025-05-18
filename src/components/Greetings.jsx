export default function Greetings() {
  return (
    <section className="section-greetings">
      <div className="greetings">
        <span className="greetings-first-line">
          I'm Ruslan Gumirov. Full-Stack Developer
        </span>
        <h2>
          Crafting digital experiences
          <br />
          from <span className="greetings-second-line">Frontend</span> to
          <span className="greetings-second-line"> Backend</span>.
          <br />
          Mastering core web trilogy:
          <span className="greetings-second-line">HTML</span>,
          <span className="greetings-second-line">CSS</span>,
          <span className="greetings-second-line">JS</span>.
        </h2>
        <span className="greetings-third-line">
          <span className="greetings-bold-line">
            Synergy University student | Web Development
          </span>
          <br />
          <span className="greetings-bold-line">
            Based in Russia, open to global opportunities
          </span>
        </span>
      </div>
      <div className="img-container">
        <img
          alt="Full-stack developer Ruslan Gumirov"
          src="/about_me/img/cv-photo.png"
          className="main-img"
        />
      </div>
    </section>
  )
}
