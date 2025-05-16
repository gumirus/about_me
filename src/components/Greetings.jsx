export default function Greetings() {
  return (
    <section className="section-greetings">
      <div className="greetings">
        <span className="greetings-first-line">
          I am Ruslan Gumirov. Frontend developer
        </span>
        <h1>
          I speak a little Greek.
          <br />
          Now it’s time for <span className="greetings-second-line">
            HTML
          </span>, <span className="greetings-second-line">CSS</span>
          <br />
          and <span className="greetings-second-line">JS</span>.
        </h1>
        <span className="greetings-third-line">
          Developer who is looking for interesting projects!
          <br />I am from Russia.
        </span>
      </div>
      <div className="img-container">
        <img
          alt="Profile photo of Ruslan Gumirov"
          src="./public/img/cv-photo.png"
          className="main-img"
        />
      </div>
    </section>
  )
}
