# u09-react-weather-app
Weather app, built in React. Group-assignment for Chas Academy.

In this assignment, you will create a React app to show the weather in your current location.

Requirements
As a user, you should be able to see:

temperature,
wind force,
humidity,
sunrise and sunset times
choose between Celsius and Fahrenheit
You should also be able to display a 5-day forecast, with temperature intervals of 3 hours

You should use a weather API such as SMHI, yr.no, OpenWeatherMaps, DarkSky, etc (your choice)

The design should be similar to common weather apps such as weather.com or Yahoo weather

Take advantage of geolocation in your browser

Extra Challenge
If you have the time and want to demonstrate deeper understanding of React, you can also add these features:

being able to manually search for the weather in a given location
Saving favourite places
display graphs of the temperature over time, with highest, lowest and average temperature
Grading
The grades are Icke Godkänt, Godkänt and Väl Godkänt

Principles for grading


In order to get the grade Godkänt it is necessary that the student can apply and develop simple solutions with React. The student should also be able to use external APIs in React with good competence.

To get the grade Väl Godkänt, you must:

In addition to the criteria for obtaining the grade, the student should be able to further develop his or her solution to the assignment, without further instructions from the instructor, and cover one or more of the various additional challenge requirements.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
After cloning git hub repository, run "npm install" to install required dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

*** `API KEY`

For this app to work, an API key from open weahter is required.
To get your personal API key, register here at https://home.openweathermap.org/users/sign_up
When you got your key, copy and past it into App.js file (src/App.js) at line 21  "apiKey = '  YOU API KEY ';"
