import React from 'react';

// Functions
import convertTime from '../../functions/ConvertTime.jsx';

// imports global styles used on top level div
import '../../App.css'


function SunAndMoon(props) {
  const { sunrise, sunset } = props.time;

  const dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
  }

  const sunriseTime = convertTime(sunrise, dateOptions);
  const sunsetTime = convertTime(sunset, dateOptions);

  return (
    <div className="componentContainer">
      <h3>Sun & Moon</h3>
      <p>
        Sunrise: {sunriseTime} <br />
        Sunset: {sunsetTime}
      </p>
    </div>
  )
}

export default SunAndMoon;
