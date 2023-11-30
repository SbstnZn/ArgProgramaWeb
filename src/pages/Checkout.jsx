import React from 'react';
import '../styles/checkout.css';
import book1 from '../assets/book1.jpg'; 
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    alert('Gracias por su compra');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Checkout de Compra</h2>
      <div className="product-info">
        <img src={book1} alt="Libro 1" />
        <div className="product-details">
          <p>Libro 1</p>
          <p>Descripción del Libro 1.</p>
          <p className="product-price">$20.99</p>
        </div>
      </div>
      <button className="button" onClick={handleConfirmPurchase}>
        Confirmar Compra
      </button>
      <div className="link">
        <a href="/product/1">Volver al Detalle del Producto</a>
      </div>
    </div>
  );
};

export default Checkout;
