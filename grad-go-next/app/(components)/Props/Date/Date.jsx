"use client"
import React, { useEffect, useState } from 'react';
import './Date.css'
const CalenderBox = () => {
  const [date, setDate] = useState(new Date());
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="m-5 w-64 calender-box-container">
      <div className="calender-box">
        <div className="calender-header">
        <div className="calender-day text-[#4b417e]">{days[date.getDay()]}</div>
        <div className="calender-date">{date.getDate()}</div>
        </div>
        <button className="calender-button w-full">No Events</button>
      </div>
    </div>
  );
};

export default CalenderBox;
