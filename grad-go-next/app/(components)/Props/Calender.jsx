"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the first and last day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const daysInMonth = lastDayOfMonth.getDate();

  // Generate an array of days for the calendar
  const days = [];
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    days.push(null); // Empty slots for days before the first day
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Handle navigation between months
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="m-5 w-80 bg-[#1a1a2e] rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.8),-5px_-5px_10px_rgba(255,255,255,0.1)] p-6 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 rounded-full bg-[#161624] text-white hover:bg-[#2b2b39] transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h1 className="text-white text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "short" })}{" "}
          {currentDate.getFullYear()}
        </h1>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-full bg-[#161624] text-white hover:bg-[#2b2b39] transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 w-full text-center mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-sm text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Days of the Month */}
      <div className="grid grid-cols-7 gap-2 w-full">
        {days.map((day, index) =>
          day ? (
            <button
              key={index}
              onClick={() => setSelectedDate(day)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                day === selectedDate
                  ? "bg-[#6948fe] text-white font-bold"
                  : "bg-[#161624] text-gray-400 hover:bg-[#2b2b39] hover:text-white"
              } transition`}
            >
              {day}
            </button>
          ) : (
            <div key={index}></div> // Empty slots
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
