export default function Education() {
  return (
    <section className="section-content" id="education">
      <h2 className="text-xl font-semibold">Education</h2>
      <div className="section-info">
        {[
          {
            title: 'Result University',
            date: 'June 2022 - Mart 2023',
            desc: 'Profession Frontend Developer',
          },
          {
            title: 'Synergy University',
            date: 'October 2023 - Today',
            desc: 'Student Web Developer',
          },
          {
            title: 'The Rolling Scopes School',
            date: 'June 2024 - Today',
            desc: 'Student Frontend Developer',
          },
        ].map((edu, idx) => (
          <div className="section-subinfo" key={idx}>
            <div className="circle" />
            <div className="info-text">
              <span className="info-text-header">{edu.title}</span>
              <span className="info-text-date">{edu.date}</span>
              <span>{edu.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
