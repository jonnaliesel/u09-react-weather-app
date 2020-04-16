import React from "react";

import Temperature from "../Temperature/Temperature";
import SetTempUnit from '../SetTempUnit/SetTempUnit';

import styles from './styles.module.css';


function MainTemperatureDisplay (props){
    const { temp, tempUnit, icon } = props;

    return (
        <div className="mainTemperatureDisplay">
            <h1 className={styles.h1}>{props.city}</h1>
            <h2 className={styles.h2}><Temperature temp={props.temp} tempUnit={props.tempUnit} /></h2>
            <SetTempUnit tempUnit={tempUnit}/>
            <img
                src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
                alt=""
                className="icon"
            />
        </div>
    )
}

export default MainTemperatureDisplay;