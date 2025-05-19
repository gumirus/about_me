export default function Projects() {
  const projects = [
    {
      title: 'My site',
      url: 'https://gumirus.github.io/MySite/StudentCard.html',
    },
    {
      title: 'First-day',
      url: 'https://gumirus.github.io/First-day/',
    },
    {
      title: 'Weather search',
      url: 'https://gumirus.github.io/weather_search/',
    },
    {
      title: 'Third day',
      url: 'https://gumirus.github.io/third_day/',
    },
    {
      title: 'Todos',
      url: 'https://gumirus.github.io/todo-zadanie/',
    },
  ]

    return (
    <section className="section-content" id="projects">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="section-info">
        <div className="section-subinfo">
          <ul className="project-list">
            {projects.map((project, index) => (
              <li key={index} className="project-item">
                <div className="circle" />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}