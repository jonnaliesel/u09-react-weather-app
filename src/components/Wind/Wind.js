import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// imports global styles used on top level div
import '../../App.css'

function Wind(props) {
    return (
        <div className="componentContainer">
            <h3>Wind</h3>
            <p>Speed: {`${props.wind.speed} ${props.speedUnit === 'metric' ? 'km/h' : 'mPh'} NW`} <FontAwesomeIcon icon={faArrowUp} transform={{ rotate: props.wind.deg }} /></p>
            
        </div>
    )
}

export default Wind;
