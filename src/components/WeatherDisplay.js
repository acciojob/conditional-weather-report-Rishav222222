import React from "react";

function WeatherDisplay({ weather }) {
  // Set the color based on the temperature value
  const temperatureStyle = {
    color: weather.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <h2>Current Weather</h2>
      <p style={temperatureStyle}>Temperature: {weather.temperature}°C</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;