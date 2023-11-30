import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css'; 

const ProductCard = ({ id, title, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <Link to={`/product/${id}`}>Ver Detalles</Link>
    </div>
  );
};

export default ProductCard;
