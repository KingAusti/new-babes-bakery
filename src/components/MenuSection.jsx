import MenuCard from './MenuCard';
import './MenuSection.css';

function MenuSection({ section }) {
  const renderCategory = (category, index) => {
    return (
      <div key={index} className="menu-category">
        <h3 className="category-title">{category.name}</h3>
        {category.note && (
          <p className="category-note">{category.note}</p>
        )}
        <div className="menu-grid">
          {category.items && category.items.map((item, itemIndex) => (
            <MenuCard
              key={itemIndex}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
        {category.subcategories && category.subcategories.map((subcat, subIndex) => (
          <div key={subIndex} className="subcategory">
            <h4 className="subcategory-title">{subcat.name}</h4>
            <div className="menu-grid">
              {subcat.items && subcat.items.map((item, itemIndex) => (
                <MenuCard
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="menu-section" id={section.id}>
      <div className="menu-section-header">
        <h2 className="section-title">{section.title}</h2>
        {section.description && (
          <p className="section-description">{section.description}</p>
        )}
        {section.note && (
          <p className="section-note">{section.note}</p>
        )}
      </div>
      
      <div className="menu-categories">
        {section.categories && section.categories.map((category, index) => 
          renderCategory(category, index)
        )}
      </div>
    </section>
  );
}

export default MenuSection;

