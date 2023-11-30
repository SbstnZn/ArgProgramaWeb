import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form>
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
          Iniciar Sesión
        </button>
      </form>
      <div className="link">
        ¿Aún no tienes una cuenta? <a href="/registration">Regístrate</a>
      </div>
    </div>
  );
};

export default Login;
