import './MenuCard.css';

function MenuCard({ name, description }) {
  return (
    <div className="menu-card">
      <h3 className="menu-card-title">{name}</h3>
      {description && (
        <p className="menu-card-description">{description}</p>
      )}
    </div>
  );
}

export default MenuCard;

