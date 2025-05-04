// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importa tu Navbar
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Proveedor from './pages/Proveedor';
import Usuarios from './pages/Usuarios';

// (Opcional)  estilos específicos para App, usar App.css
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* La Navbar se muestra en todas las páginas */}
      <Navbar />

      {/* Contenedor principal para el contenido de la página con padding de Bootstrap */}
      <main className="container mt-4"> {/* mt-4 añade margen superior */}
        {/* Define las rutas de la aplicación */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />
          {/* Ruta para la sección de Clientes */}
          <Route path="/clientes" element={<Clientes />} />
          {/* Ruta para la sección de Proveedores */}
          <Route path="/proveedores" element={<Proveedor />} />
          {/* Ruta para la sección de Usuarios */}
          <Route path="/usuarios" element={<Usuarios />} />

          {/* Puedes añadir una ruta "catch-all" para páginas no encontradas */}
          {/* <Route path="*" element={<h1>Página no encontrada</h1>} /> */}
        </Routes>
      </main>

      {/* (Opcional) Puedes añadir un Footer aquí */}
      {/* <footer className="text-center mt-5">
        <p>© 2024 Mi Panel Administrativo</p>
      </footer> */}
    </div>
  );
}

export default App;