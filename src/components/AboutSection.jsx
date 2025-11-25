import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-container">
        <h2 className="about-title" id="about-title">Welcome to Babe's</h2>
        <p className="about-tagline">Home of the world famous sandwiches.</p>
        <h3 className="about-subheading">We're here to serve you</h3>
        <div className="about-content">
          <p>
            At Babe's Bakery we look at food differently. With a variety of specialty pastries like our bacon pesto turnovers and seasonal fruit scones, we are the premium destination in Grants Pass for fresh food baked and prepared daily.
          </p>
          <p>
            Join us for lunch and enjoy a world-famous sandwich on a fresh personal loaf of bread, or choose one of our lighter options with a soup and salad combo meal.
          </p>
          <p>
            Planning a special event? Talk to one of our bakers to learn about custom cakes and pastries!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

