import React from 'react';
import Temperature from './Temperature';

function Detail(props) {
//   console.log('Detail props', props);

  const { main, weather } = props.weather;

  return (
    <div>
      <ul>
        <li>Humidity: {main.humidity}%</li>
        <li>
          Feels like: <Temperature temp={main.feels_like} tempUnit={props.tempUnit} />
        </li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather.description}
            title={weather.description}
          />
        </li>
      </ul>
    </div>
  );
}

export default Detail;
