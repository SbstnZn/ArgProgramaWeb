import React from 'react';
import '../styles/registration.css';

const Registration = () => {
  return (
    <div className="container">
      <h2>Registro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName" className="label">
            Nombre
          </label>
          <input type="text" id="firstName" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="label">
            Apellido
          </label>
          <input type="text" id="lastName" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" id="email" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input type="password" id="password" className="input" />
        </div>
        <button type="submit" className="button">
          Registrarse
        </button>
      </form>
      <div className="link">
        ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
      </div>
    </div>
  );
};

export default Registration;
