import './CustomOrdersSection.css';

function CustomOrdersSection() {
  return (
    <section className="custom-orders-section" id="custom" aria-labelledby="custom-orders-title">
      <div className="custom-orders-container">
        <h2 className="custom-orders-title" id="custom-orders-title">Custom Orders</h2>
        <div className="custom-orders-content">
          <p className="custom-orders-intro">
            Planning a special event?
          </p>
          <p>
            Talk to one of our bakers to learn about custom cakes and pastries!
          </p>
          <p className="custom-orders-cta">
            We're here to help make your special occasion memorable with our delicious, custom-made treats.
          </p>
          <div className="custom-orders-contact">
            <p>
              <strong>Call us today:</strong>
            </p>
            <a href="tel:5414761710" className="custom-orders-phone">
              (541) 476-1710
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomOrdersSection;

