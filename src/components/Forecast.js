import React from 'react';
import DayForecast from './DayForecast';
// import FiveDayForecast from './FiveDayForecast';


function Forecast(props) {
  // console.log("Forecast props: ", props);


  return (
    <div className='forecast'>
      <h2>Forecast</h2>

      <DayForecast weatherData={props.forecast} tempUnit={props.tempUnit}/>
      {/* <FiveDayForecast weatherData={forecast} tempUnit={tempUnit}/> */}


    </div>
  );
}

export default Forecast;
