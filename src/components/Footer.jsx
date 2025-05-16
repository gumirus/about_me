export default function Footer() {
  return (
    <footer className="footer-content" id="contacts">
      <span>© 2025 by Ruslan Gumirov</span>
      <ul className="contact-list">
        <li>
          <a className="link" href="https://github.com/gumirus">
            GitHub
          </a>
        </li>
        <li>
          <a className="link" href="mailto:gumirus@yandex.ru">
            Gmail
          </a>
        </li>
        <li>
          <a className="link" href="https://rs.school/">
            <img
              className="ResultUniversity-img"
              alt="RSchool logo"
              src="https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg"
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}
