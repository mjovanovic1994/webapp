import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('Vul gebruikersnaam en wachtwoord in');
      return;
    }

    // Sla credentials lokaal op (voorbeeld, in echte apps: nooit wachtwoorden zo opslaan)
    localStorage.setItem('user', JSON.stringify({ username, password }));

    onLogin(username);
  };

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Gebruikersnaam"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
