import React from 'react';

function Wind(props) {
    return (
        <div>
            <h3>Wind</h3>
            <p>Speed: {`${props.wind.speed} ${props.speedUnit === 'metric' ? 'km/h' : 'mPh'} NW`}</p>
        </div>
    )
}

export default Wind;
