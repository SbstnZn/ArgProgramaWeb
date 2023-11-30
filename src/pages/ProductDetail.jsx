import React from 'react';
import { Link, useParams } from 'react-router-dom';
import book1 from '../assets/book1.jpg';
import '../styles/productDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div className="container">
      <h2>Detalle del Producto</h2>
      <div className="product-info">
        <img src={book1} alt={`Libro ${productId}`} />
        <div className="product-details">
          <p className="product-title">{`Libro ${productId}`}</p>
          <p className="product-description">Descripción del Libro {productId}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="product-price">$20.99</p>
        </div>
      </div>
        <Link to={`/checkout/${productId}`}>
        <button className="button">Comprar Ahora</button>
      </Link>
      
      <div className="link">
        <Link to="/">Volver a la Lista de Productos</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
