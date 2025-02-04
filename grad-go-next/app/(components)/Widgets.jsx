"use client ";
import React from "react";
import ClockComponent from "@/app/(components)/Props/Clock/Clock";
import Weather from "@/app/(components)/Props/Weather/Weather";
import CalenderBox from "@/app/(components)/Props/Date/Date";
import SocialMedia from "@/app/(components)/Props/SocialMedia/SocialMedia";
import StockMarketBox from "@/app/(components)/Props/Stock";
import Calendar from "@/app/(components)/Props/Calender";
import ScheduleBox from "@/app/(components)/Props/Schedule";

const Widgets = () => {
  return (
    // <div className="flex flex-row w-full min-h-screen items-start p-8">
    //   <div className="flex flex-col justify-center items-center p-3"></div>
    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
    //     <div className="flex flex-col justify-center items-center p-3">
    //       {/* <Weather /> */}
    //       <div className="bg-red-700">Weateer</div>
    //       <div>Social Media</div>
    //       {/* <SocialMedia /> */}
    //     </div>
    //     <div className="flex flex-col justify-center items-center p-3">
    //       {/* <ClockComponent /> */}
    //       <div>Clokc</div>
    //       <div>Calendar</div>
    //       {/* <Calendar /> */}
    //     </div>
    //     <div className="flex flex-col justify-center items-center p-3">
    //       {/* <ScheduleBox />
    //       <CalenderBox />
    //       <StockMarketBox /> */}
    //     </div>
    //     <div className="flex flex-col justify-center items-center p-3">
    //       {/* <ScheduleBox />
    //       <CalenderBox />
    //       <StockMarketBox /> */}
    //     </div>
    //   </div>
    // </div>
    <div className="flex w-full h-screen">
      <div className="w-[40%] h-full hidden md:flex items-center justify-center"></div>
      <div className="w-full md:w-[70%] h-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-80">
          <div className="flex flex-col justify-center items-center p-3">
            <StockMarketBox />
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

export default Widgets;
