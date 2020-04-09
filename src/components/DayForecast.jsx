import React from 'react';

const dayTempContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const dayContainerStyle = {
  border: '1px solid',
  borderRadius: '10px',
  margin: '.5rem .25rem',
  padding: '.6rem',
  textTransform: 'capitalize',
};

const weekdayStyle = {
  // padding: '.5rem',
};

const DayForecast = (props) => {
 /*  console.log("DayForecast props: ",props); */

  const { weatherData, tempUnit } = props;

  let dayDateOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  const dayTempList = [];
  // for (let [index, value] of weatherData.list.entries()) {
  for(let i = 0; i <= 8 ; i++){
    dayTempList.push(weatherData[i]);

  }
  console.log(dayTempList);

    /*  */
    //   console.log(dayTempList[index].value.dt_txt);
    // if (index > 7) {
    //   break;
    // }

/* console.log("daytemp: ",dayTempList); */

  return (
    <div>
      <h3>24h Forecast</h3>

      <div className='dayTempContainer' style={dayTempContainerStyle}>
        {dayTempList.forEach((day) => (
          <li>banan</li>

        ))}
{/*          {dayTempList.map((temp) => (
          <div>{temp.dt}</div>

          <div key={temp.dt} style={dayContainerStyle}>
            Weekday
            <div className='weekday' style={weekdayStyle}>
              För svenska 'sv-SE'
              {Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
                temp.value.dt * 1000
              )}
            </div>
            Timestamp
            <div className='dayTime'>
              {Intl.DateTimeFormat('sv-SE', dayDateOptions).format(
                temp.value.dt * 1000
              )}
            </div>

             Weather Icon
            {temp.value.weather.map((weatherType) => (
              <div key={Math.random() * 99999}>
                <img
                  className='dayWeatherIcon'
                  src={`http://openweathermap.org/img/wn/${weatherType.icon}@2x.png`}
                  alt={weatherType.description}
                />
                <div>{weatherType.description}</div>
              </div>
            ))}

             <div className='dayTemp'>
              {Math.round(temp.value.main.temp)}
              {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
            </div>
          </div>
        ))} */}
      </div>

    </div>
  );
};

export default DayForecast;
