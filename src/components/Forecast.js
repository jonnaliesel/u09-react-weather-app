import React from 'react';

function Forecast(props) {
  const { weatherData, tempUnit } = props.state;
  console.log(weatherData);

  let dateOptions = {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  let dayDateOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const dayTempList = [];

  for (let [index, value] of weatherData.list.entries()) {
    dayTempList.push({ index, value });
    //   console.log(dayTempList[index].value.dt_txt);
    if (index > 7) {
      break;
    }
  }

  return (
    <div className='forecast'>
      <h2>Forecast</h2>
      <div className='24hTemp'>
        {dayTempList.map((temp) => (
          <div key='temp.dt' style={{ border: '1px solid' }}>
            <div className='dayTime'>
              {Intl.DateTimeFormat('sv-SE', dayDateOptions).format(
                temp.value.dt * 1000
              )}
            </div>
            <img
              className='dayWeatherIcon'
              src={`http://openweathermap.org/img/wn/${temp.value.weather[0].icon}@2x.png`}
              alt={temp.value.weather[0].description}
            />
            <div className='dayTemp'>
              {Math.round(temp.value.main.temp)}
              {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
            </div>
          </div>
        ))}
      </div>
      <div className='fiveDayList'>
        {weatherData.list.map((weatherData) => (
          <div
            className='row'
            key={weatherData.dt}
            style={{ listStyle: 'none', border: '1px solid' }}
          >
            <div>
              {Intl.DateTimeFormat('sv-SE', dateOptions).format(
                weatherData.dt * 1000
              )}
            </div>
            <div>
              {weatherData.main.temp}
              {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
