import React from 'react';

function Forecast(props) {
  const { weatherData, tempUnit } = props.state;
  console.log(weatherData);
  let dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className='forecast'>
      <h2>Forecast</h2>
      <div className='fiveDayList'>
        {weatherData.list.map((weatherData) => (
          <div className='row' key={weatherData.dt}>
            <span>
              {Intl.DateTimeFormat('sv-SE', dateOptions).format(
                weatherData.dt * 1000
              )}{' '}
            </span>
            <span>
              {weatherData.main.temp}
              {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
            </span>
            {/* <span>{weatherData.dt_txt}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
