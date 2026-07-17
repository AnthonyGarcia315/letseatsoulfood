export default function Navbar() {
  return (
    <nav className="app-navbar">
      <div className="nav-brand">Let's Eat</div>
      <ul className="nav-links">
        <li><a href="#story">Our Story</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#location">Location & Hours</a></li>
      </ul>
    </nav>
  );
}