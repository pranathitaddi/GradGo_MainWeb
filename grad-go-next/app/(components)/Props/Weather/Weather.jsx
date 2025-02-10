// import { Sun } from 'lucide-react';
// import React, { useState } from 'react';

// const Weather = () => {
//   const [temperature] = useState(32); // Connect to weather API in real implementation

//   return (
//     <div className="w-72 h-40 bg-[#1a1a2e] rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.8),-5px_-5px_10px_rgba(255,255,255,0.1)] p-6 flex flex-col justify-between">
//       {/* Location and Icon */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-white text-lg font-semibold">Kharagpur</h1>
//         <Sun className="w-6 h-6 text-white opacity-75" />
//       </div>

//       {/* Temperature */}
//       <div>
//         <h2 className="text-6xl text-[#6948fe] font-bold">{temperature}°</h2>
//         <p className="text-sm text-gray-400 mt-1">Mostly Sunny</p>
//       </div>
//     </div>
//   );
// };

// export default Weather;

"use client"

import { Sun, Cloud, CloudRain, Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const WEATHER_API_KEY = 'be35a47a4f6d1ae9228ab82686d1a72a'

const Weather = () => {
  const [location, setLocation] = useState('Loading...');
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState('');
  const [loading, setLoading] = useState(true);

  // Pick the right weather icon
  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition?.toLowerCase()) {
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-6 h-6 text-white opacity-75" />;
      case 'clouds':
        return <Cloud className="w-6 h-6 text-white opacity-75" />;
      default:
        return <Sun className="w-6 h-6 text-white opacity-75" />;
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Get city name from coordinates
          const locationResponse = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`
          );
          const locationData = await locationResponse.json();
          setLocation(locationData[0]?.name || 'Unknown Location');

          // Get weather data
          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
          );
          const weatherData = await weatherResponse.json();
          
          setTemperature(Math.round(weatherData.main.temp));
          setCondition(weatherData.weather[0].main);
          setLoading(false);
        } catch (error) {
          setLocation('Error fetching weather');
          setLoading(false);
        }
      }, () => {
        setLocation('Please enable location');
        setLoading(false);
      });
    } else {
      setLocation('Location not supported');
      setLoading(false);
    }
  }, []);

  return (
    <div className="m-5 w-64 h-40 bg-[#1a1a2e] shadow-[10px_10px_20px_rgba(0,0,0,0.8),-5px_-5px_10px_rgba(255,255,255,0.1)] rounded-2xl p-6 flex flex-col justify-between">
      {/* Location and Icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">{location}</h1>
        {loading ? (
          <Loader2 className="w-6 h-6 text-white opacity-75 animate-spin" />
        ) : (
          getWeatherIcon(condition)
        )}
      </div>

      {/* Temperature */}
      <div>
        {loading ? (
          <p className="text-sm text-gray-400">Loading weather data...</p>
        ) : (
          <>
            <h2 className="text-6xl text-indigo-500 font-bold">
              {temperature !== null ? `${temperature}°` : '--°'}
            </h2>
            <p className="text-sm text-gray-400 mt-1">{condition || 'Unknown'}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;