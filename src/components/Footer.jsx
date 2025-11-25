import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="hours">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Babe's Bakery</h3>
          <p>Babe's Bakery is conveniently located on the North side of Grants Pass, OR. Less than one minute from Interstate 5. Join us today for a savory breakfast, hearty lunch, or a sweet afternoon treat!</p>
        </div>
        
        <div className="footer-section">
          <h3>Bakery Hours</h3>
          <p><strong>Lobby & Drive Thru</strong></p>
          <p>Monday – Saturday</p>
          <p>7:00 am – 4:00 pm</p>
          <p className="closed-note">Note: Babes' Bakery is closed on Sundays.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#lunch">Menu</a></li>
            <li><a href="#about">About Babe's</a></li>
            <li><a href="#custom">Custom Orders</a></li>
            <li><a href="#hours">Hours & Location</a></li>
            <li><a href="tel:5414761710">(541) 476-1710</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Babes' Bakery</p>
      </div>
    </footer>
  );
}

export default Footer;

