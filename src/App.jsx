import Header from './components/Header'
import Greetings from './components/Greetings'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()
  return (
    <div className="body-content">
      <div className="container max-w-4xl mx-auto px-3">
        <main className="py-10 text-gray-800 scroll-smooth">
          <Header />
          <Greetings />
          <Skills />
          <Projects />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  )
}
