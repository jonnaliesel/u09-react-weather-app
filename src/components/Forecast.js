import React from 'react';
import DayForecast from './DayForecast';
import FiveDayForecast from './FiveDayForecast';


function Forecast(props) {
  const { weatherData, tempUnit } = props.state;
  console.log(weatherData);


  return (
    <div className='forecast'>
      <h2>Forecast</h2>

      <DayForecast weatherData={weatherData} tempUnit={tempUnit}/>
      <FiveDayForecast weatherData={weatherData} tempUnit={tempUnit}/>


    </div>
  );
}

export default Forecast;
