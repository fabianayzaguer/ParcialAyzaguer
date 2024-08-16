import React from "react";
import Card from "./components/Card";
import { useState } from 'react';


function App() {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const campo1Trimmed = campo1.trim();
    const campo2Trimmed = campo2.trim();

    if (campo1Trimmed.length < 3) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    if (campo2Trimmed.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      console.log(campo2Trimmed.length) 
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="campo1">Campo 1:</label>
            <input
              type="text"
              id="campo1"
              value={campo1}
              onChange={(e) => setCampo1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="campo2">Campo 2:</label>
            <input
              type="text"
              id="campo2"
              value={campo2}
              onChange={(e) => setCampo2(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <Card campo1={campo1.trim()} campo2={campo2.trim()} />
      )}
    </div>
  );
}

export default App;
