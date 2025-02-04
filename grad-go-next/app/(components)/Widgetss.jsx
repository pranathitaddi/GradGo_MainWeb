"use client ";
import React from "react";
import ClockComponent from "@/app/(components)/Props/Clock/Clock";
import Weather from "@/app/(components)/Props/Weather/Weather";
import CalenderBox from "@/app/(components)/Props/Date/Date";
import SocialMedia from "@/app/(components)/Props/SocialMedia/SocialMedia";
import Calendar from "@/app/(components)/Props/Calender";
import ScheduleBox from "@/app/(components)/Props/Schedule";
import Search from "@/app/(components)/Props/Search";

const Widgetss = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[40%] h-full hidden md:flex items-center justify-center"></div>
      <div className="w-full md:w-[70%] h-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-80">
          <div className="flex flex-col justify-center items-center p-3">
            <Search />
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <Weather />
            <SocialMedia />
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <ClockComponent />
            <Calendar />
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <ScheduleBox />
            <CalenderBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgetss;
