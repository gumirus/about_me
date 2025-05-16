import Header from './components/Header'
import Greetings from './components/Greetings'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="body-content">
      <div className="container">
        <Header />
        <main className="main-content">
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
