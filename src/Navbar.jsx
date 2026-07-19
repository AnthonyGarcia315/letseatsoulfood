import { useState } from 'react';
import logo from './assets/nav-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="app-navbar">
      <div className="nav-bar-row">
        <div className="nav-brand">
          <img src={logo} alt="" className="nav-logo" aria-hidden="true" />
          Let's Eat
        </div>
        <button
          className="nav-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
      </div>
      <ul id="primary-navigation" className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
        <li><a href="#story" onClick={closeMenu}>Our Story</a></li>
        <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
        <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
        <li><a href="#location" onClick={closeMenu}>Location & Hours</a></li>
      </ul>
    </nav>
  );
}