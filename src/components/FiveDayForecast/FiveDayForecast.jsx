import React from 'react';
import styles from './FiveDay.module.css';

const FiveDayForecast = (props) => {
  const weatherData = props.weatherData.list;
  const { tempUnit } = props;

  // console.log('five: ', weatherData);

  let dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className={styles.FiveDayContainer}>
      <h3>Five day Forecast</h3>
      {weatherData.map((weatherData) => (
        <div key={weatherData.dt} className={styles.row}>
          {/* Timestamp into readable date */}
          <span>
            {/* För svenska 'sv-SE' */}
            {Intl.DateTimeFormat('en-US', dateOptions).format(
              weatherData.dt * 1000
            )}
            {/* Timestamp */}
            {', ' +
              Intl.DateTimeFormat('sv-SE', {
                hour: 'numeric',
                // minute: 'numeric'
              }).format(weatherData.dt * 1000)}
            h
          </span>

          {/* Weather Icon */}
          {weatherData.weather.map((weatherType) => (
            <div key={Math.random() * 99999}>
              <img
                className={styles.dayWeatherIcon}
                src={`http://openweathermap.org/img/wn/${weatherType.icon}@2x.png`}
                alt={weatherType.description}
                title={weatherType.description}
              />
              {/* Weather Icon Description */}
              <div>{weatherType.description}</div>
            </div>
          ))}

          {/* Temperature */}
          {/* Min Temperature */}
          <span className={styles.minTemp} >
            {'⬇' + Math.round(weatherData.main.temp_min)}
            {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}

            {/* Max Temperature */}
            <span className={styles.maxTemp} >
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
