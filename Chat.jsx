import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';

export default function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMsg.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: newMsg,
      username,
      createdAt: serverTimestamp(),
    });
    setNewMsg('');
  };

  return (
    <div className="chat">
      <h2>Discord Chat Room</h2>
      <div className="messages" style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #444', padding: '10px', borderRadius: '8px', backgroundColor: '#222' }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#4f46e5' }}>{msg.username}</strong>: {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={sendMessage} style={{ marginTop: '10px', display: 'flex' }}>
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Typ een bericht..."
          style={{ flexGrow: 1, padding: '8px', borderRadius: '4px', border: 'none' }}
        />
        <button type="submit" style={{ marginLeft: '8px', padding: '8px 12px', backgroundColor: '#4f46e5', border: 'none', borderRadius: '4px', color: 'white' }}>
          Verstuur
        </button>
      </form>
    </div>
  );
}
