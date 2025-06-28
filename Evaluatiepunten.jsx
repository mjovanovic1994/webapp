import React, { useState, useEffect } from 'react';

export default function Evaluatiepunten() {
  const [punten, setPunten] = useState(() => {
    const saved = localStorage.getItem('evaluatiepunten');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('evaluatiepunten', JSON.stringify(punten));
  }, [punten]);

  const addPunt = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setPunten([...punten, trimmed]);
    setInput('');
  };

  const removePunt = (index) => {
    setPunten(punten.filter((_, i) => i !== index));
  };

  return (
    <div className="evaluatiepunten">
      <h2>Evaluatiepunten</h2>
      <form onSubmit={addPunt}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nieuw evaluatiepunt"
        />
        <button type="submit">Toevoegen</button>
      </form>
      <ul>
        {punten.map((punt, i) => (
          <li key={i}>
            {punt}{' '}
            <button onClick={() => removePunt(i)} aria-label="Verwijder punt">
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
