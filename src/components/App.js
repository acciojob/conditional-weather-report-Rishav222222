// App.js
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  // Initialize weather data state
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Mock weather data input
    const weatherInput = { temperature: 25, conditions: "Sunny" };

    // Update state with the given weather data
    setWeather(weatherInput);
  }, []);

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
