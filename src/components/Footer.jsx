import { useState, useEffect } from 'react'

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 750)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('footer')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <footer className="footer-content" id="contacts">
      <div className="footer-mobile-container">
        <span className="copyright">© 2025 by Ruslan Gumirov</span>

        {isMobile && (
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            aria-label="Contacts menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}
      </div>

      <ul
        className={`contact-list ${isMobile ? 'mobile-menu' : ''} ${
          isMenuOpen ? 'open' : ''
        }`}
        aria-hidden={!isMenuOpen}
      >
        <li>
          {' '}
          <a className="link" href="https://github.com/gumirus/about_me">
            GitHub
          </a>
        </li>
        <li>
          <a className="link" href="mailto:gumirus@yandex.ru">
            Gmail
          </a>
        </li>
        <li>
          <a className="link" href="https://t.me/Ruslan_Rascheed">
            Telegram
          </a>
        </li>
      </ul>
    </footer>
  )
}
