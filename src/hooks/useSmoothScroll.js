import { useEffect } from 'react'

const SMOOTH_SCROLL_SELECTOR = 'a[href^="#"]'

export default function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href')
      if (!targetId || targetId === '#') return

      e.preventDefault()
      const target = document.querySelector(targetId)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    // Обработка существующих ссылок
    const links = document.querySelectorAll(SMOOTH_SCROLL_SELECTOR)
    links.forEach((link) => link.addEventListener('click', handleClick))

    // Отслеживание динамических ссылок
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'A' && node.matches(SMOOTH_SCROLL_SELECTOR)) {
            node.addEventListener('click', handleClick)
          }
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick))
      observer.disconnect()
    }
  }, [])
}
