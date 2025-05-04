import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // NavLink resalta el enlace activo

function Navbar() {
  // Puedes reemplazar "MiLogo" con una etiqueta <img> si tienes un archivo de logo
  const logo = "AdminPanel";

  return (
    // Navbar de Bootstrap: oscura, expandible en pantallas grandes
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Enlace del logo a la página de inicio */}
        <Link className="navbar-brand" to="/">{logo}</Link>

        {/* Botón para menú hamburguesa en pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Atributos para la funcionalidad de Bootstrap (requiere JS de Bootstrap si lo añades)
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenedor de los enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* 'ms-auto' empuja los enlaces a la derecha */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} // Clase activa si la ruta coincide
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
              {/* El enlace Logout por ahora solo redirige a inicio.
                  En una app real, aquí ejecutarías una función de logout. */}
              <NavLink
                className="nav-link"
                to="/" // O podrías tener una ruta /logout que maneje la lógica
                onClick={() => console.log("Simulando Logout...")} // Ejemplo simple
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