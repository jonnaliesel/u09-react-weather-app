import React, { Component } from 'react';
// import Api from './Api';
import Detail from './components/Detail';
import Forecast from './components/Forecast';
import Temperature from './components/Temperature';
import Wind from './components/Wind';
import SunAndMoon from './components/SunAndMoon';

import './App.css';

class App extends Component {
  apiKey = '47191cd2411b39bd47c91b1dfe204dd6';

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      currentCity: 'Stockholm',
      tempUnit: 'metric',
      speedUnit: 'metric',
      forecast: {},
      today: {},
    };
  }
  /* tempUnit
    For temperature in Fahrenheit use units=imperial
    For temperature in Celsius use units=metric
    Temperature in Kelvin is used by default,
    no need to use units parameter in API call
  */

  componentDidMount() {
    // When components mount run both fetches and wait for response
    this.getForecastAndWeather().then(
      // load the results.json into state
      ([forecast, weather]) => {
        this.setState({
          forecast: forecast,
          today: weather,
          isLoaded: true,
        });
        // console.log('Forecast: ', forecast);
        // console.log('weather: ', weather);

        console.log('Fetched 5-day forecast for:', this.state.currentCity);
      },
      // catch error
      (err) => this.setState({ error: err, isLoaded: true })
    );
  }

  // Wait until both fetches return a response
  getForecastAndWeather() {
    return Promise.all([this.getForecast(), this.getWeather()]);
  }

  getForecast() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentCity}&units=${this.state.tempUnit}&appid=${this.apiKey}`
    ).then((res) => {
      // check if we get an ok response else throw an error
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    });
    /* .then(
        // load the results.json into state
        (res) => {
          this.setState({
            forecast: res.list,
            isLoaded: true,
          });
          // console.log("Forecast state: ",res.list);

          console.log('Fetched 5-day forecast for:', this.state.currentCity);
        },
        // catch error
        (err) => this.setState({ error: err, isLoaded: true })
      ); */
  }

  getWeather() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&units=${this.state.tempUnit}&appid=${this.apiKey}`
    ).then((res) => {
      // check if we get an ok response else throw an error
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    });
    /*       .then(
        // load the results.json into state
        (res) => {
          this.setState({
            today: res,
            isLoaded: true,
          });
          console.log('Fetched todays weather for:', this.state.currentCity);
        },
        // catch error
        (err) => this.setState({ error: err, isLoaded: true })
      ); */
  }

  render() {
    const { forecast, today, tempUnit, speedUnit } = this.state;
    const { error, isLoaded /*weatherData*/ } = this.state;
    // console.log(this.state);

    if (error) {
      return <div>Something went wrong: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='App'>
          {/* <Detail temp={temp} /> */}
          <Forecast forecast={forecast} tempUnit={tempUnit} />
          <Temperature temp={today.main.temp} tempUnit={tempUnit} />
          <Detail weather={today} tempUnit={tempUnit} />
          <Wind wind={today.wind} speedUnit={speedUnit} />
          <SunAndMoon time={today.sys} />
        </div>
      );
    }
  }
}

export default App;
