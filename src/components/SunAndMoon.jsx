import React from 'react';
import convertTime from './ConvertTime';

function SunAndMoon(props) {
  const { sunrise, sunset } = props.time;

  const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const sunriseTime = convertTime(sunrise, dateOptions);
  const sunsetTime = convertTime(sunset, dateOptions);

  return (
    <div>
      <h3>Sun & Moon</h3> 
      <p>Sunrise: {sunriseTime}</p>
      <p>Sunset: {sunsetTime}</p>
    </div>
  );
}

export default SunAndMoon;