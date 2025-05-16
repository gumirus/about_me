import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import CodeExample from './components/CodeExample'
import Projects from './components/Projects'
import Education from './components/Education'
import Languages from './components/Languages'
import Contacts from './components/Contacts'

export default function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-12">
      <Header />
      <About />
      <Skills />
      <CodeExample />
      <Projects />
      <Education />
      <Languages />
      <Contacts />
    </div>
  )
}
