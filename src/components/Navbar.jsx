import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImage from '../assets/Logouts.png';

function Navbar() {
  // Ya no necesitamos la variable de texto 'logo'

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* 2. Usa el Link como antes, pero dentro pon la etiqueta <img> */}
        <Link className="navbar-brand" to="/">
          {/* 3. Añade la etiqueta <img> */}
          <img
            src={logoImage} // Usa la variable importada
            alt="Logo del Panel Administrativo" // Texto alternativo descriptivo
            style={{ height: '30px', marginRight: '10px' }} // Ajusta la altura (ej: 30px) y añade un margen derecho
          />
          {/* Opcional: Si quieres mantener el texto al lado del logo, puedes añadirlo aquí */}
          {/* AdminPanel */}
        </Link>

        {/* Botón para menú hamburguesa en pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor de los enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/clientes"
              >
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/proveedores"
              >
                Proveedor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                to="/usuarios"
              >
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => console.log("Simulando Logout...")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;