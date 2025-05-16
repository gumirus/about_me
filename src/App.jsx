import Header from './components/Header'
import Greetings from './components/Greetings'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import useSmoothScroll from './components/useSmoothScroll.js'

export default function App() {
  useSmoothScroll()
  return (
    <div className="body-content">
      <div className="container">
        <main className="max-w-7xl mx-auto px-6 py-10 text-gray-800 scroll-smooth">
          <Header />
          <Greetings />
          <Skills />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  )
}
