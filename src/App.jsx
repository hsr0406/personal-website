import Hero from './components/Hero'
import Education from './components/Education'
import Awards from './components/Awards'
import Skills from './components/Skills'
import Personality from './components/Personality'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Awards />
        <Skills />
        <Personality />
        <Contact />
      </main>
    </div>
  )
}

export default App
