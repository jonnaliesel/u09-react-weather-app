import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Wind(props) {
    return (
        <div>
            <h3>Wind</h3>
            <p>Speed: {`${props.wind.speed} ${props.speedUnit === 'metric' ? 'km/h' : 'mPh'} NW`} <FontAwesomeIcon icon={faArrowUp} transform={{ rotate: props.wind.deg }} /></p>
            
        </div>
    )
}

export default Wind;
