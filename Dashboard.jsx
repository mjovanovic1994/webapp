import React from 'react';
import Agenda from './Agenda';
import Chat from './Chat';
import Evaluatiepunten from './Evaluatiepunten';

export default function Dashboard({ username }) {
  return (
    <div className="dashboard">
      <h1>Welkom, {username}</h1>
      <div className="grid">
        <Chat username={username} />
        <Agenda />
        <Evaluatiepunten />
      </div>
    </div>
  );
}
