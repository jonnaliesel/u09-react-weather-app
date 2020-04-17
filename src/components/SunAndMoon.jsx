import React from 'react';
import convertTime from './ConvertTime';

function SunAndMoon(props) {
  const { sunrise, sunset } = props.time;

//   console.log('sun and moon', props);

  const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const sunriseTime = convertTime(sunrise, dateOptions);
  const sunsetTime = convertTime(sunset, dateOptions);

  return (
    <div>
      <h3>Sun & Moon</h3>
      <ul>
        <li>Sunrise: {sunriseTime} <img src="./../public/assets/dawn.svg" alt="Dawn" /></li>
        
        <li>Sunset: {sunsetTime}</li>
      </ul>
    </div>
  );
}

export default SunAndMoon;