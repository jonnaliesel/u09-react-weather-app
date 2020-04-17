import React from 'react';

//Functions
import convertTime from '../../functions/ConvertTime';
import convertWeekday from '../../functions/ConvertWeekday';

// Component specific styling
import styles from './styles.module.css';

// imports global styles used on top level div
import '../../App.css'

const DayForecast = (props) => {
  // console.log('DayForecast props: ', props);

  const weatherData = props.weatherData.list;
  const { tempUnit } = props;
  const dayTempList = [];

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  // If the prop has received data push the first nine objects to array
  if (weatherData.length > 1) {
    for (let index = 0; index < 9; index++) {
      dayTempList.push(weatherData[index]);
    }

    return (
      <div className="componentContainer">
        <h3>24h Forecast</h3>

        <div className={styles.daysContainer}>
          {/* Loop each 3hour timestamp */}
          {dayTempList.map((temp) => (
            <div className={styles.dayContainer} key={temp.dt}>
              {/* Weekday String*/}
              <div className='weekday'>
                {convertWeekday(temp.dt, { weekday: 'long' }).slice(0,3)}
              </div>
              {/* Timestamp hh:mm */}
              <div className='dayTime'>{convertTime(temp.dt, timeOptions)}</div>
              {/* Weather Icon */}
              {/* In a loop if there are multiple weather types */}
              {temp.weather.map((weatherType) => (
                <div key={Math.random() * 99999}>
                  <img
                    className={styles.dayWeatherIcon}
                    src={`http://openweathermap.org/img/wn/${weatherType.icon}@2x.png`}
                    alt={weatherType.description}
                    title={weatherType.description}
                  />
                </div>
              ))}
              {/* Temperature */}
              <div className={styles.dayTemp}>
                {Math.round(temp.main.temp)}
                {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default DayForecast;
