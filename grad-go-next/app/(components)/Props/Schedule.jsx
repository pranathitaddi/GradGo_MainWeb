"use client"
import React, { useState } from "react";

const ScheduleBox = () => {
  const [schedule, setSchedule] = useState([
    { day: "Monday", task: "Zoom meeting for project" },
    { day: "Tuesday", task: "Family Reunion" },
    { day: "Wednesday", task: "First Vaccine Appointment" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [newDay, setNewDay] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleAddSchedule = () => {
    if (newDay && newTask) {
      setSchedule([...schedule, { day: newDay, task: newTask }]);
      setNewDay("");
      setNewTask("");
    }
  };

  const handleDeleteSchedule = (index) => {
    const updatedSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(updatedSchedule);
  };

  return (
    <div className="m-5 w-64 bg-[#1a1a2e] rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.8),-5px_-5px_10px_rgba(255,255,255,0.1)] p-10 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Schedule</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-blue-400 underline hover:text-blue-300"
        >
          {isEditing ? "Done" : "Edit"}
        </button>
      </div>

      {schedule.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-none"
        >
          <div>
            <h2 className="text-white text-lg font-semibold">{item.day}</h2>
            <p className="text-sm text-gray-400">{item.task}</p>
          </div>
          {isEditing && (
            <button
              onClick={() => handleDeleteSchedule(index)}
              className="text-sm text-red-400 underline hover:text-red-300"
            >
              Delete
            </button>
          )}
        </div>
      ))}

      {isEditing && (
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Day"
            value={newDay}
            onChange={(e) => setNewDay(e.target.value)}
            className="text-sm text-gray-900 p-2 rounded bg-gray-200"
          />
          <input
            type="text"
            placeholder="Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="text-sm text-gray-900 p-2 rounded bg-gray-200"
          />
          <button
            onClick={handleAddSchedule}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Schedule
          </button>
        </div>
      )}
    </div>
  );
};

export default ScheduleBox;
