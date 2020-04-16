import React from "react";

import Temperature from "../Temperature/Temperature";
import SetTempUnit from '../SetTempUnit/SetTempUnit';

import styles from './styles.module.css';


function MainTemperatureDisplay (props){
    const { city, temp, tempUnit, icon, handleSetTempUnitSubmit } = props;

    return (
        <div className="mainTemperatureDisplay">
            <h1 className={styles.h1}>{city}</h1>
            <h2 className={styles.h2}>
                <Temperature temp={temp} tempUnit={tempUnit} />
            </h2>
            <SetTempUnit 
                tempUnit={tempUnit}
                handleSetTempUnitSubmit={handleSetTempUnitSubmit}
            />
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
                className="icon"
            />
        </div>
    )
}

export default MainTemperatureDisplay;