import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App.jsx';

// Importa los estilos CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// (Opcional) Puedes importar tu propio CSS global aquí si lo necesitas
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envuelve tu App con BrowserRouter para habilitar el enrutamiento */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
