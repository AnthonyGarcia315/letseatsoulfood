import './App.css'
import Navbar from './Navbar'
import OurStory from './OurStory'
import Menu from './Menu'
import Footer from './Footer'

function App() {
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
      
      <div id="story">
        <OurStory />
      </div>
      
      <div id="menu">
        <Menu />
      </div>
      
      <div id="location">
        <Footer />
      </div>
    </div>
  )
}

export default App