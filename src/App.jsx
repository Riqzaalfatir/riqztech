import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useRef } from 'react'
import AboutSection from './components/AboutSection'
// import StackSection from './components/StackSection'
import ProjectSection from './components/ProjectSection'
import PaketSection from './components/PaketSection'
import ProsesSection from './components/ProsesSection'
import FAQSection from './components/FAQSection'
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }


  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    })
  }, [])

  return (
    <div className="dark:bg-black relative">
      <Toaster></Toaster>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <AboutSection />
      {/* <StackSection /> */}
      <ProjectSection />
      <Services />
      <PaketSection />
      <ProsesSection />
      <FAQSection />
      {/* <Teams /> */}
      <ContactUs />
      <Footer theme={theme} />
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-black pointer-events-none z-9999' style={{ transition: 'transform 0.1s ease-out' }}></div>
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-black pointer-events-none z-9999'></div>
    </div>
  )
}

export default App
