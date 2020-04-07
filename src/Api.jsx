import React from 'react';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentCity: 'Stockholm',
      tempUnit: 'metric',
      weatherData: {},
    };
  }

  async fetchForecast() {
    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentCity}&units=${this.state.tempUnit}&appid=${apiKey}`
    )
      .then((res) => {
        // check if we get an ok response else throw an error
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`${res.status} ${res.statusText}`);
        }
      })
      .then(
        // load the results.json into state
        (res) => {
          this.setState({
            weatherData: res,
            isLoaded: true,
          });
          console.log('Fetched forecast for:', this.state.currentCity);
        },
        // catch error
        (err) => this.setState({ error: err, isLoaded: true })
      );
  }

  componentDidMount() {
    this.fetchForecast();
  }

  render() {
    const { error, isLoaded, weatherData } = this.state;

    if (error) {
      return <div>Something went wrong: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {weatherData.city.name} {weatherData.city.country}
          <div>List data</div>
          {weatherData.list.map((dataTimestamp) => (
            <div key={dataTimestamp.dt}>
              <p>Time: {dataTimestamp.dt}</p>
              {/* <p>{Date.prototype.toLocaleString(dataTimestamp.dt)}</p> */}
              <p>Temp: {dataTimestamp.main.temp}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Api;
