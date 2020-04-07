import React from 'react';

const fiveDayStyle = {
  display: 'flex',
  // justifyContent: 'space-between',
  width: '45vw',
  flexWrap: 'wrap',
  flexDirection: 'column',
  position: 'relative',
  margin: '0 auto',
  textTransform: 'capitalize',
  border: '1px solid gray',
  borderRadius: '10px',
  padding: '1rem',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderBottom: '1px solid lightgray',
};

const minTempStyle = {
  color: 'blue',
};

const maxTempStyle = {
  color: 'red',
};

const FiveDayForecast = (props) => {
  const { weatherData, tempUnit } = props;

  let dateOptions = {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <div className='fiveDayList' style={fiveDayStyle}>
      <h2>Five day Forecast</h2>
      {weatherData.list.map((weatherData) => (
        <div key={weatherData.dt} className='row' style={rowStyle}>
          {/* Timestamp into readable date */}
          <span>
            {/* För svenska 'sv-SE' */}
            {Intl.DateTimeFormat('en-US', dateOptions).format(
              weatherData.dt * 1000
            )}
          </span>

          {/* Weather Icon */}
          {/* <div> */}
          {weatherData.weather.map((weatherType) => (
            <div key={Math.random() * 99999}>
              <img
                className='dayWeatherIcon'
                src={`http://openweathermap.org/img/wn/${weatherType.icon}@2x.png`}
                alt={weatherType.description}
                title={weatherType.description}
              />
              {/* <div>{weatherType.description}</div> */}
            </div>
          ))}
          {/* </div> */}

          {/* Temperature */}
          {/* Min Temperature */}
          <span className='minTemp' style={minTempStyle}>
            {'⬇' + Math.round(weatherData.main.temp_min)}
            {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}

            {/* Max Temperature */}
            <span className='maxTemp' style={maxTempStyle}>
              &nbsp; {'⬆' + Math.round(weatherData.main.temp_max)}
              {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
