import './App.css'
import Navbar from './Navbar'
import OurStory from './OurStory'
import Menu from './Menu'
import Footer from './Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <header>
        <h1>Let's Eat Soul Food</h1>
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