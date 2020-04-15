import React from 'react';
import DayForecast from './DayForecast/DayForecast';
import FiveDayForecast from './FiveDayForecast/FiveDayForecast';


function Forecast(props) {
  // console.log("Forecast props: ", props);


  return (
    <div className='forecast item'>
      <h2>Forecast {props.currentCity}</h2>

      <DayForecast weatherData={props.forecast} tempUnit={props.tempUnit}/>
      <FiveDayForecast weatherData={props.forecast} tempUnit={props.tempUnit}/>


    </div>
  );
}

export default Forecast;
