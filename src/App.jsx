import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Grades from './components/Grades'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import MessageBoard from './components/MessageBoard'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import SplashPage from './components/SplashPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showMain, setShowMain] = useState(false)

  const handleEnter = () => {
    setShowSplash(false)
    setTimeout(() => {
      setShowMain(true)
    }, 100)
  }

  useEffect(() => {
    if (showMain) {
      window.scrollTo(0, 0)
    }
  }, [showMain])

  return (
    <>
      {showSplash && <SplashPage onEnter={handleEnter} />}

      {showMain && (
        <div className="min-h-screen bg-blue-gradient animate-fade-in">
          <Navbar />
          <main>
            <Hero />
            <Grades />
            <Skills />
            <Hobbies />
            <MessageBoard />
            <Contact />
          </main>
          <BackToTop />
        </div>
      )}
    </>
  )
}

export default App
