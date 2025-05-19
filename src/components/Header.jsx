import { useState, useEffect } from 'react'

export default function Header() {
  const [activeLink, setActiveLink] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 750)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return // Не скрываем хедер если открыто меню

      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        // Скролл вниз
        setIsVisible(false)
      } else {
        // Скролл вверх
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const handleLinkClick = (section, e) => {
    e.preventDefault()
    setActiveLink(section)
    setIsMenuOpen(false)
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <header className={`header-info ${!isVisible ? 'header-hidden' : ''}`}>
      <h1 className="text-xl font-bold">Ruslan Gumirov</h1>

      <nav className="relative">
        {isMobile && (
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
              setIsVisible(true) // Показываем хедер при открытии меню
            }}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}

        <ul
          className={`link-list ${isMobile ? 'mobile-menu' : ''} ${
            isMenuOpen ? 'open' : ''
          }`}
        >
          {['skills', 'projects', 'education', 'contacts'].map((section) => (
            <li key={section}>
              <a
                className={`link relative pb-1 transition-all duration-300 ${
                  activeLink === section
                    ? '!text-[var(--gray)] after:scale-100'
                    : 'text-[var(--black)] hover:!text-[var(--gray)] after:scale-0'
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[var(--main-yellow)] after:transition-transform after:duration-300`}
                href={`#${section}`}
                onClick={(e) => handleLinkClick(section, e)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
