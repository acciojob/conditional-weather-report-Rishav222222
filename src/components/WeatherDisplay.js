// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Inline styling for temperature based on the value
  const tempStyle = {
    color: temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p style={tempStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
      <span style={tempStyle}>Color Indicator</span>
    </div>
  );
};

export default WeatherDisplay;
