import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>Babe's Bakery</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#lunch" onClick={() => scrollToSection('lunch')}>Menu</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About Babe's</a></li>
            <li><a href="#custom" onClick={() => scrollToSection('custom')}>Custom Orders</a></li>
            <li><a href="#hours" onClick={() => scrollToSection('hours')}>Hours & Location</a></li>
            <li className="phone-link">
              <a href="tel:5414761710">(541) 476-1710</a>
            </li>
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;

