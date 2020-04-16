import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// imports global styles used on top level div
import '../../App.css'

function Wind(props) {
    const {speed, deg} = props.wind;
    const {speedUnit} = props;
    return (
        <div className="componentContainer">
            <h3>Wind</h3>
            <p>Speed: {`
                ${speed} 
                ${speedUnit === 'metric' ? 'km/h' : 'mPh'} NW`
                } <FontAwesomeIcon icon={faArrowUp} transform={{ rotate: deg }} />
            </p>
        </div>
    )
}

export default Wind;
