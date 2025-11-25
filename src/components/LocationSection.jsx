import './LocationSection.css';

function LocationSection() {
  const address = "1701 NE 6th St, Grants Pass, OR 97526";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="location-section" id="location" aria-labelledby="location-title">
      <div className="location-container">
        <h2 className="location-title" id="location-title">Hours & Location</h2>
        
        <div className="location-content">
          <div className="location-info">
            <h3 className="location-address-title">Visit Us</h3>
            <p className="location-address">
              {address}
            </p>
            <p className="location-description">
              Babe's Bakery is conveniently located on the North side of Grants Pass, OR. Less than one minute from Interstate 5. Join us today for a savory breakfast, hearty lunch, or a sweet afternoon treat!
            </p>
            <p className="location-note">
              Note: Babes' Bakery is closed on Sundays.
            </p>
            <div className="location-contact">
              <p>
                <strong>Call us:</strong>
              </p>
              <a href="tel:5414761710" className="location-phone" aria-label="Call Babe's Bakery at 541-476-1710">
                (541) 476-1710
              </a>
            </div>
          </div>
          
          <div className="location-map">
            <a 
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-container"
              aria-label="View Babe's Bakery location on Google Maps"
            >
              <div className="map-placeholder">
                <p className="map-placeholder-text">Click to view on Google Maps</p>
                <p className="map-placeholder-address">{address}</p>
              </div>
            </a>
            <p className="map-fallback">
              <a 
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;

