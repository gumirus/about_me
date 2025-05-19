export default function Skills() {
  const skills = [
    { name: 'Git', url: 'https://git-scm.com/' },
    { name: 'HTML', url: 'https://developer.mozilla.org/ru/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/ru/docs/Web/CSS' },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
    },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'React', url: 'https://react.dev/' },
    { name: 'Python', url: 'https://www.python.org/' },
    { name: 'Django', url: 'https://www.djangoproject.com/' },
    { name: 'PHP', url: 'https://www.php.net/' },
    { name: 'Gulp', url: 'https://gulpjs.com/' },
    { name: 'Webpack', url: 'https://webpack.js.org/' },
    { name: 'Vite', url: 'https://vitejs.dev/' },
    { name: 'Figma', url: 'https://www.figma.com/' },
    { name: 'Pixo', url: 'https://pixso.net/' },
  ]

  return (
    <section className="section-content" id="skills">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="section-info">
        <div className="section-subinfo">
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <div className="circle" />
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-link"
                >
                  {skill.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
