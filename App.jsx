import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Components/Dashboard.jsx';
import Chat from './Components/Chat.jsx';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check of er een user in localStorage staat
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username) {
      setUser(savedUser.username);
      navigate('/dashboard');
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    navigate('/dashboard');
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onLogin={handleLogin} />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard username={user} /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
