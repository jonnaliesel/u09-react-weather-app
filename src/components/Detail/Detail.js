import React from 'react';

// Components
import Temperature from '../Temperature/Temperature';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'

// imports global styles used on top level div
import '../../App.css'

function Detail(props) {
  const { humidity, feels_like } = props.weather.main;
  const { tempUnit } = props

  return (
    <div className="componentContainer">
    <h3>Details</h3>
      <p>
        Humidity {humidity} % 
        <FontAwesomeIcon icon={faTint} />
      </p>
      <p>
        Feels like <Temperature temp={feels_like} tempUnit={tempUnit} />
      </p>
    </div>
  );
}

export default Detail;
