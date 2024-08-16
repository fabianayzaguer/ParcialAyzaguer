import React from 'react';

function Card({ campo1, campo2 }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Datos recibidos:</h2>
      <p><strong>Campo 1:</strong> {campo1}</p>
      <p><strong>Campo 2:</strong> {campo2}</p>
    </div>
  );
}

export default Card;
