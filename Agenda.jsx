import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Agenda() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="agenda">
      <h2>Agenda</h2>
      <Calendar onChange={setDate} value={date} />
      <p>Geselecteerde datum: {date.toLocaleDateString()}</p>
    </div>
  );
}
