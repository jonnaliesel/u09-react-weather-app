import React from 'react';

import SetTempUnit from '../SetTempUnit/SetTempUnit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

const LocationInput = (props) => {
    const { tempUnit, handleSetTempUnitSubmit, getLocation, handleCityChange, handleCitySubmit } = props;

    return (
        <div className={styles.locationInput}>
            <form className={styles.form} onSubmit={handleCitySubmit}>
                <input className={styles.input} placeholder="Search city" onChange={handleCityChange} type="text"></input>
                <button className={`${styles.buttonSubmit} ${styles.btn}`} type="Submit">Search</button>

                {/*  <p>{props.error === null ? '': props.error.message }</p> */}
            </form>
            <button
                className={`${styles.button} ${styles.btn}`}
                onClick={getLocation}>Use your position
                <FontAwesomeIcon icon={faMapPin} />
            </button>
            <SetTempUnit
                tempUnit={tempUnit}
                handleSetTempUnitSubmit={handleSetTempUnitSubmit}
            />
        </div>
    )
}

export default LocationInput
