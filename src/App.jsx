import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import OurStory from './OurStory'
import Menu from './Menu'
import Testimonials from './Testimonials'
import Footer from './Footer'

function App() {
  // Fade sections in as they scroll into view. Falls back to showing
  // everything immediately if IntersectionObserver isn't supported,
  // and respects prefers-reduced-motion via the CSS transition rules.
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('reveal-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      
      <header className="hero">
        <h1>Let's Eat Soul Food</h1>
        <p className="hero-tagline">Fine-dining soul food, family-owned, right here in Compton.</p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="tel:+13107382397" className="btn btn-secondary">Call to Order</a>
        </div>
      </header>
      
      <div id="story" className="reveal">
        <OurStory />
      </div>
      
      <div id="menu">
        <Menu />
      </div>

      <div id="reviews">
        <Testimonials />
      </div>
      
      <div id="location">
        <Footer />
      </div>
    </div>
  )
}

export default App