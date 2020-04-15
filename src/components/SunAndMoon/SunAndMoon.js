import React from 'react';
import convertTime from '../../functions/ConvertTime.jsx';

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
    <div className="sunAndMoon">
      <h3>Sun & Moon</h3>
      <p>Sunrise: {sunriseTime} <br />
        Sunset: {sunsetTime}</p>
    </div>
  );
}

export default SunAndMoon;
