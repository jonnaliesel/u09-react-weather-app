import React, { Component } from 'react';

// Components
import Detail from './components/Detail/Detail';
import Loading from './components/Loading/Loading';
//import Forecast from './components/Forecast';
import FiveDayForecast from './components/FiveDayForecast/FiveDayForecast';
import DayForecast from './components/DayForecast/DayForecast';
import MainTemperatureDisplay from './components/MainTemperatureDisplay/MainTemperatureDisplay';
import Wind from './components/Wind/Wind';
import SunAndMoon from './components/SunAndMoon/SunAndMoon';
import LocationInput from './components/LocationInput/LocationInput';

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
    this.getLocation = this.getLocation.bind(this);
    this.showLocation = this.showLocation.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      loading: true,
      currentCity: 'Stockholm',
      tempUnit: 'metric',
      speedUnit: 'metric',
      forecast: {},
      today: {},
      latitude: '',
      longitude: '',
      searchMyLocation: false,
      favoritePlaces: [

        "stockholm",
        "göteborg"
      ]
    };

    localStorage.clear()
    localStorage.setItem("favorites", JSON.stringify(this.state.favoritePlaces))
  }
  /* tempUnit
    For temperature in Fahrenheit use units=imperial
    For temperature in Celsius use units=metric
    Temperature in Kelvin is used by default,
    no need to use units parameter in API call
  */

  handleCityChange = (event) => {
    this.city = event.target.value;
  };

  handleCitySubmit = (event) => {
    let prevState = this.state;
    if(prevState.currentCity !== this.city){
      this.setState({currentCity : this.city}, () => {
        this.getForecastAndWeather()
      })

  }
    event.preventDefault();
  }

  showLocation(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    this.setState({
      latitude: latitude,
      longitude: longitude,
      searchMyLocation: true,
    });



    this.getForecastAndWeather();
  }

  locationErrorHandler(err) {
    if (err.code === 1) {
      alert('Error: Access is denied!');
    } else if (err.code === 2) {
      alert('Error: Position is unavailable!');
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = { timeout: 60000, enableHighAccuracy: true };

      navigator.geolocation.getCurrentPosition(
        this.showLocation,
        this.locationErrorHandler,
        options
      );
    } else {
      alert('Sorry, browser does not support geolocation!');
    }
  }

  componentDidMount() {
    // When components mount run both fetches and wait for response
    this.getLocation();
    this.getForecastAndWeather();
  }

  // Wait until both fetches return a response
  getForecastAndWeather() {
    this.setState({
      loading: true,
    });

    Promise.all([this.getForecast(), this.getWeather()])
      .then(
        // load the results.json into state
        ([forecast, weather]) => {

          setTimeout(() => {
            this.setState({
              forecast: forecast,
              today: weather,
              isLoaded: true,
              currentCity: forecast.city.name  !== this.state.currentCity ? forecast.city.name : this.state.currentCity,
              searchMyLocation: false,
              loading: false,
            });

          }, 1500);
        }
      ) // Catch error
      .catch((error) => {
        this.setState({ error: error, isLoaded: true });
        alert('error getForecastAndWeather');
      });
  }

  getForecast() {
    if (this.state.searchMyLocation === true) {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=${this.state.tempUnit}&appid=${this.apiKey}`
      ).then(
        (res) => {
          // check if we get an ok response else throw an error
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        },
        // catch error
        (err) => this.setState({ error: err, isLoaded: true })
      );
    } else {
        return fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentCity}&units=${this.state.tempUnit}&appid=${this.apiKey}`
        ).then(
          (res) => {
            // check if we get an ok response else throw an error
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(`${res.status} ${res.statusText}`);
            }
          },
          // catch error
          (err) => this.setState({ error: err, isLoaded: true })
        );
    }
  }

  getWeather() {
    if (this.state.searchMyLocation === true) {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=${this.state.tempUnit}&appid=${this.apiKey}`
      ).then(
        (res) => {
          // check if we get an ok response else throw an error
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        },
        // catch error
        (err) => this.setState({ error: err, isLoaded: true })
      );
    } else {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&units=${this.state.tempUnit}&appid=${this.apiKey}`
      ).then(
        (res) => {
          // check if we get an ok response else throw an error
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`${res.status} ${res.statusText}`);
          }
        },
        // catch error
        (err) => this.setState({ error: err, isLoaded: true })
      );
    }
  }

  render() {
    const { forecast, today, tempUnit, speedUnit } = this.state;
    const { error, isLoaded, currentCity, loading } = this.state;
    // console.log(this.state);

    if (error) {
      return (
        <div>
          <div>Something went wrong: {error.message}</div>
          <button type='button' onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className='App fullHeight'>
          <Loading show={!isLoaded} />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <LocationInput
            handleCitySubmit={this.handleCitySubmit}
            handleCityChange={this.handleCityChange}
            getLocation={this.getLocation}
            error={this.state.error}
          />

          <Loading show={loading} />

          <MainTemperatureDisplay
            city={currentCity}
            temp={today.main.temp}
            tempUnit={tempUnit}
            icon={today.weather[0].icon}
          />
          <div className='container grid'>
            <Detail weather={today} tempUnit={tempUnit} />
            <Wind wind={today.wind} speedUnit={speedUnit} />
            <SunAndMoon time={today.sys} />
            {/* <Forecast currentCity={currentCity} forecast={forecast} tempUnit={tempUnit} /> */}
            <DayForecast weatherData={forecast} tempUnit={tempUnit} />
            <FiveDayForecast weatherData={forecast} tempUnit={tempUnit} />
          </div>
        </div>
      );
    }
  }
}

export default App;
