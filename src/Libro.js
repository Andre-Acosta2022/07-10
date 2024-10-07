import React, { useState, useEffect } from 'react';
import Editorial from './Editorial';

function Libro() {
  const [libro, SetLibro] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/libros')
      .then(response => response.json())
      .then(data => SetLibro(data));
  }, []);

  return (
    <div>
    <h2>Lista de libro</h2>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>titulo</th>
          <th>Paginas</th>
          <th>editorial</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {libro.map(libros => (
          <tr key={libros.id}>
            <td>{libros.id}</td>
            <td>{libros.titulo}</td>
            <td>{libros.paginas}</td>
            <td>{libros.Editorial}</td>
            <td>{libros.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Libro;
