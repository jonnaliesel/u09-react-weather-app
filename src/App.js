import React, { Component } from 'react';

// Components
import Detail from './components/Detail/Detail';

// import Forecast from './components/Forecast';
import FiveDayForecast from './components/FiveDayForecast/FiveDayForecast';
import DayForecast from './components/DayForecast/DayForecast';
import MainTemperatureDisplay from './components/MainTemperatureDisplay/MainTemperatureDisplay';
import Wind from './components/Wind/Wind';
import SunAndMoon from './components/SunAndMoon/SunAndMoon';
import LocationInput from './components/LocationInput/LocationInput'

// Functions
/* import resizeAllGridItems from './functions/resizeAllGridItems'; */

import './App.css';

class App extends Component {
  apiKey = '47191cd2411b39bd47c91b1dfe204dd6';
  city = '';

  constructor() {
    super();
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
    this.handleSetTempUnitSubmit = this.handleSetTempUnitSubmit.bind(this);



    this.state = {
      error: null,
      isLoaded: false,
      currentCity: 'Stockholm',
      tempUnit: 'metric',
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

  handleCityChange = (event) => {
    this.city = event.target.value;

  }

  handleCitySubmit = (event) => {
    let prevState = this.state;
    const temp = 'metric';
    if (prevState.currentCity !== this.city) {
      this.setState({ currentCity: this.city }, () => {
        this.getForecastAndWeather(temp)
      })

    }
    event.preventDefault();
  }

  

  handleSetTempUnitSubmit = (event) => {
    this.setState((prevState) => (
      prevState.tempUnit === 'metric' ? {tempUnit: 'imperial'} : {tempUnit: 'metric'}
    ));

    let temp = '';
    this.state.tempUnit === 'metric' ? temp = 'imperial' : temp = 'metric'

    this.getForecastAndWeather(temp);
  }

  /* componentDidUpdate(prevState) {
    if(prevState.currentCity !== this.state.currentCity){
      this.getForecastAndWeather();
    } 
  } */


  componentDidMount() {
    // When components mount run both fetches and wait for response
    const temp = 'metric';
    this.getForecastAndWeather(temp);
    /* .then(
      // load the results.json into state
      ([forecast, weather]) => {
        this.setState({
          forecast: forecast,
          today: weather,
          isLoaded: true,
        }); */
    // console.log('Forecast: ', forecast);
    // console.log('weather: ', weather);


    // }
    // );
  }

  // Wait until both fetches return a response
  getForecastAndWeather(temp) {
    Promise.all([this.getForecast(temp), this.getWeather(temp)]).then(
      // load the results.json into state
      ([forecast, weather]) => {
        this.setState({
          forecast: forecast,
          today: weather,
          isLoaded: true,
        });
        console.log('Fetched 5-day forecast for:', this.state.currentCity);
      }
    ) // Catch error
      .catch(error => {
        this.setState({ error: error, isLoaded: true });
      }

      )
  }

  getForecast(temp) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentCity}&units=${temp}&appid=${this.apiKey}`
    ).then((res) => {
      // check if we get an ok response else throw an error
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    },
      // catch error
      (err) => this.setState({ error: err, isLoaded: true }));
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

  getWeather(temp) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&units=${temp}&appid=${this.apiKey}`
    ).then((res) => {
      // check if we get an ok response else throw an error
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    },
      // catch error
      (err) => this.setState({ error: err, isLoaded: true }));
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
    const { forecast, today, tempUnit } = this.state;
    const { error, isLoaded, currentCity } = this.state;
    // console.log(this.state);

     if (error) {
      return (
        <div>
        <div>Something went wrong: {error.message}</div>
        <button type="button" onClick={() => window.location.reload()}>Try again</button>
        </div>
        );
      
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='App'>
            <LocationInput handleCitySubmit={this.handleCitySubmit} handleCityChange={this.handleCityChange} error={this.state.error} />
            <MainTemperatureDisplay 
              city={currentCity} 
              temp={today.main.temp} 
              tempUnit={tempUnit} 
              icon={today.weather[0].icon}
              handleSetTempUnitSubmit={this.handleSetTempUnitSubmit}
            />
          <div className="container grid">
            <Detail weather={today} tempUnit={tempUnit} />
            <Wind wind={today.wind} speedUnit={tempUnit} />
            <SunAndMoon time={today.sys} />
            {/* <Forecast currentCity={currentCity} forecast={forecast} tempUnit={tempUnit} /> */}
            <DayForecast weatherData={forecast} tempUnit={tempUnit} />
            <FiveDayForecast weatherData={forecast} tempUnit={tempUnit}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
