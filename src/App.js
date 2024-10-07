import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Usuarios from './Usuarios';
import Editorial from './Editorial';
import Libro from './libro';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/editorial">Libro</Link></li>
          <li><Link to="/libro">Libro</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/usuarios" element={<Usuarios/>} />
        <Route path="/Editorial"  element={<Editorial/>} />
        <Route path="/libro"  element={<Libro/>} />
      </Routes>
    </Router>
  );
}

export default App;
