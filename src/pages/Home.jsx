import React from 'react';

function Home() {
  return (
    <div className="card text-center"> {/* Añade clase card */}
      <div className="card-body"> {/* Contenido dentro de card-body */}
        <h1 className="card-title">Bienvenido al Panel Administrativo</h1>
        <p className="card-text">Usa la barra de navegación para moverte entre secciones.</p>
      </div>
    </div>
  );
}
export default Home;
