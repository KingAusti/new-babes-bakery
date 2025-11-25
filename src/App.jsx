import { menuData } from './data/menuData';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
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
    <div className="App" id="home">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <h1>Welcome to Babe's Bakery</h1>
          <p>Fresh baked goods, delicious sandwiches, and friendly service</p>
        </div>
        
        {sections.map((section, index) => (
          <MenuSection key={index} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
