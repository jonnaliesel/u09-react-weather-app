import React from 'react';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentCity: 'Stockholm',
      weatherData: {},
    };
  }

  async fetchForecast() {
    const apiKey = process.env.REACT_APP_API_KEY;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.currentCity}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ weatherData: res, isLoaded: true }))
      .catch((err) => this.setState({ error: err, isLoaded: true }));
  }

  componentDidMount() {
    this.fetchForecast();
  }

  render() {
    const { error, isLoaded, weatherData } = this.state;
    console.log(weatherData);

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
