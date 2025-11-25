// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './MenuCard.css';

function MenuCard({ name, description, price, level = 4 }) {
  const HeadingTag = `h${level}`;

  return (
    <motion.div
      className="menu-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, backgroundColor: "var(--color-accent)" }}
    >
      <div className="menu-card-header">
        <HeadingTag className="menu-card-title">{name}</HeadingTag>
        {price && <span className="menu-card-price">{price}</span>}
      </div>
      {description && <p className="menu-card-description">{description}</p>}
    </motion.div>
  );
}

MenuCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string,
  level: PropTypes.number
};

export default MenuCard;
