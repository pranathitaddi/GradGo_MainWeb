"use client";
import React from "react";
const SearchWidget = () => (
  <div className="bg-gray-800 w-80 h-12 flex items-center px-4 rounded-xl shadow-lg">
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
    />
    <svg
      className="w-5 h-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.65 11.65L21 21z"
      />
    </svg>
  </div>
);

export default SearchWidget;
