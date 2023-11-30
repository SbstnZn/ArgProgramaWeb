import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">El Aleph</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Aca va un icono */}
        </div>
        <ul className={showMenu ? 'show' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/registration">Registro</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
