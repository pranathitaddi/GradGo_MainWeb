// import React, { useState, useEffect } from "react";
// import Clock from "react-clock";
// import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../components/ui/alert-dialog";import { MapPin } from "lucide-react";
// import "react-clock/dist/Clock.css";
// import "./Clock.css";

// function ClockComponent() {
//   const [time, setTime] = useState(new Date());
//   const [location, setLocation] = useState("Loading location...");
//   const [showPrompt, setShowPrompt] = useState(true);
  
//   const getISTTime = () => {
//     const now = new Date();
//     return new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
//   };

//   const setupClock = (useIST = false) => {
//     const interval = setInterval(() => {
//       setTime(useIST ? getISTTime() : new Date());
//     }, 1000);
//     return interval;
//   };

//   const fallbackToIST = () => {
//     setLocation("New Delhi (IST)");
//     return setupClock(true);
//   };

//   const requestLocation = async () => {
//     setShowPrompt(false);
    
//     if ("geolocation" in navigator) {
//       try {
//         const position = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });
//         });

//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
//         );
//         const data = await response.json();
        
//         const locationName = data.address.city || 
//                            data.address.town || 
//                            data.address.village || 
//                            data.address.suburb;

//         if (locationName) {
//           setLocation(locationName);
//           return setupClock(false);
//         } else {
//           return fallbackToIST();
//         }
//       } catch (error) {
//         console.error("Error getting location:", error);
//         return fallbackToIST();
//       }
//     } else {
//       return fallbackToIST();
//     }
//   };

//   const useISTDirectly = () => {
//     setShowPrompt(false);
//     return fallbackToIST();
//   };

//   useEffect(() => {
//     let interval;

//     // Don't set up any clock until user makes a choice
//     if (!showPrompt) {
//       interval = setupClock();
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [showPrompt]);

//   return (
//     <>
//       <AlertDialog open={showPrompt}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle className="flex items-center gap-2">
//               <MapPin className="h-5 w-5" />
//               Location Access
//             </AlertDialogTitle>
//             <AlertDialogDescription>
//               Would you like to show the time for your current location? If not, we'll use Indian Standard Time (IST).
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogAction onClick={useISTDirectly} className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
//               Use IST
//             </AlertDialogAction>
//             <AlertDialogAction onClick={requestLocation} className="bg-primary text-primary-foreground hover:bg-primary/90">
//               Use My Location
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//       <div className="rotated-box-container">
//         <div className="rotated-box gap-5">
//           <h2 className="box-title opacity-50">{location}</h2>
//           <div className="clock-container">
//             <Clock
//               value={time}
//               hourHandWidth={8}
//               hourHandLength={40}
//               minuteHandWidth={8}
//               minuteHandLength={60}
//               renderSecondHand={false}
//               renderNumbers
//               useMillisecondPrecision={false}
//               renderHourMarks={false}
//               renderMinuteMarks={false}
//               size={175}
//             />
//             <div className="center-dot"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ClockComponent;


"use client"
import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./Clock.css";

function ClockComponent() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Loading location...");
  
  // Function to get IST time
  const getISTTime = () => {
    const now = new Date();
    return new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  };

  useEffect(() => {
    let interval;

    const setupClock = (useIST = false) => {
      // Clear any existing interval
      if (interval) clearInterval(interval);
      
      // new interval
      interval = setInterval(() => {
        setTime(useIST ? getISTTime() : new Date());
      }, 1000);
    };

    const fallbackToIST = () => {
      setLocation("New Delhi (IST)");
      setupClock(true);
    };

    // Try to get user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            
            // Extract city name, fallback to other location properties if city isn't available
            const locationName = data.address.city || 
                               data.address.town || 
                               data.address.village || 
                               data.address.suburb;

            if (locationName) {
              setLocation(locationName);
              setupClock(false); // Use local time for found location
            } else {
              fallbackToIST();
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            fallbackToIST();
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          fallbackToIST();
        },
        { timeout: 10000 } // 10 second timeout
      );
    } else {
      fallbackToIST();
    }

    // Cleanup function
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="rotated-box-container m-5">
      <div className="rotated-box gap-5">
        <h2 className="box-title opacity-50">{location}</h2>
        <div className="clock-container">
          <Clock
            value={time}
            hourHandWidth={8}
            hourHandLength={40}
            minuteHandWidth={8}
            minuteHandLength={60}
            renderSecondHand={false}
            renderNumbers
            useMillisecondPrecision={false}
            renderHourMarks={false}
            renderMinuteMarks={false}
            size={175}
          />
          <div className="center-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default ClockComponent;