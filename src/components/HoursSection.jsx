import './HoursSection.css';

function HoursSection() {
  return (
    <section className="hours-section" id="hours" aria-labelledby="hours-title">
      <div className="hours-container">
        <h2 className="hours-title" id="hours-title">Hours</h2>
        <p className="hours-subtitle">WE ALWAYS LOVE TO SERVE YOU</p>
        
        <div className="hours-content">
          <div className="hours-info">
            <p className="hours-service-type"><strong>Lobby & Drive Thru</strong></p>
            <p className="hours-days">Monday – Saturday</p>
            <p className="hours-time">7:00 am – 4:00 pm</p>
            <p className="hours-note">We welcome call in orders!</p>
            <p className="hours-phone">
              <a href="tel:5414761710">(541) 476-1710</a>
            </p>
          </div>
        </div>
        
        <a href="#location" className="hours-cta-button">VISIT BABE'S BAKERY</a>
      </div>
    </section>
  );
}

export default HoursSection;

