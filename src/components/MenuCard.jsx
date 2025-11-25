import './MenuCard.css';

function MenuCard({ name, description }) {
  return (
    <article className="menu-card" aria-label={`Menu item: ${name}`}>
      <h3 className="menu-card-title">{name}</h3>
      {description && (
        <p className="menu-card-description">{description}</p>
      )}
    </article>
  );
}

export default MenuCard;

