import { menuData } from './data/menuData';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import CustomOrdersSection from './components/CustomOrdersSection';
import HoursSection from './components/HoursSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const sections = [
    { ...menuData.lunch, id: 'lunch' },
    { ...menuData.breakfast, id: 'breakfast' },
    { ...menuData.beverages, id: 'beverages' },
    { ...menuData.bakedGoods, id: 'baked-goods' }
  ];

  return (
    <div className="App">
      <Header />
      <main className="main-content" id="main-content">
        <div className="hero-section" id="home">
          <h1>Welcome to Babe's</h1>
          <p className="hero-tagline">Home of the world famous sandwiches.</p>
          <h2 className="hero-subheading">We're here to serve you</h2>
          <p className="hero-description">
            At Babe's Bakery we look at food differently. With a variety of specialty pastries like our bacon pesto turnovers and seasonal fruit scones, we are the premium destination in Grants Pass for fresh food baked and prepared daily. Join us for lunch and enjoy a world-famous sandwich on a fresh personal loaf of bread, or choose one of our lighter options with a soup and salad combo meal. Planning a special event? Talk to one of our bakers to learn about custom cakes and pastries!
          </p>
          <a href="#hours" className="hero-cta-button">VISIT US TODAY</a>
        </div>
        
        <AboutSection />
        
        {sections.map((section, index) => (
          <MenuSection key={index} section={section} />
        ))}
        
        <CustomOrdersSection />
        <HoursSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
