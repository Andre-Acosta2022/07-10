import React, { useState, useEffect } from 'react';

function Editorial() {
  const [Editorial, setEditorial] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/editoriales')
      .then(response => response.json())
      .then(data => setEditorial(data));
  }, []);

  return (
    <div>
    <h2>Lista de Editorial</h2>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {Editorial.map(editorial => (
          <tr key={editorial.id}>
            <td>{editorial.id}</td>
            <td>{editorial.nombre}</td>
            <td>{editorial.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Editorial;
