import React from 'react';
import ProductCard from '../components/ProductCard';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import '../styles/home.css';

const products = [
  {
    id: 1,
    title: 'Libro 1',
    description: 'Descripción del Libro 1.',
    price: 20.99,
    imageUrl: book1,
  },
  {
    id: 2,
    title: 'Libro 2',
    description: 'Descripción del Libro 2.',
    price: 15.99,
    imageUrl: book2,
  },
  {
    id: 3,
    title: 'Libro 3',
    description: 'Descripción del Libro 3.',
    price: 25.99,
    imageUrl: book3,
  },
];

const Home = () => {
  return (
    <div className="container">
      <div className="welcome-message">
        <h2>Bienvenido a tu Librería Online favorita !</h2>
        <p>Explora nuestra colección de libros y encuentra tus favoritos.</p>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
