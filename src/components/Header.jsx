import { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Close menu on escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>Babe's Bakery</h1>
        </div>
        
        <nav 
          ref={navRef}
          id="main-navigation"
          className={`nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <a 
                href="#home" 
                onClick={(e) => scrollToSection('home', e)}
                aria-label="Navigate to home section"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#lunch" 
                onClick={(e) => scrollToSection('lunch', e)}
                aria-label="Navigate to menu section"
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection('about', e)}
                aria-label="Navigate to about section"
              >
                About Babe's
              </a>
            </li>
            <li>
              <a 
                href="#custom" 
                onClick={(e) => scrollToSection('custom', e)}
                aria-label="Navigate to custom orders section"
              >
                Custom Orders
              </a>
            </li>
            <li>
              <a 
                href="#hours" 
                onClick={(e) => scrollToSection('hours', e)}
                aria-label="Navigate to hours and location section"
              >
                Hours & Location
              </a>
            </li>
            <li className="phone-link">
              <a 
                href="tel:5414761710"
                aria-label="Call Babe's Bakery at 541-476-1710"
              >
                (541) 476-1710
              </a>
            </li>
          </ul>
        </nav>

        <button 
          ref={menuToggleRef}
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
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

