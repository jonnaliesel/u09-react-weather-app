import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css';

const LocationInput = (props) => {
    return (
        <div className={styles.locationInput}>
            <form className={styles.form} onSubmit={props.handleCitySubmit}>
                <input className={styles.input} placeholder="Search city" onChange={props.handleCityChange} type="text"></input>
                <button className={`${styles.buttonSubmit} ${styles.btn}`} type="Submit">Search</button>

                {/*  <p>{props.error === null ? '': props.error.message }</p> */}
            </form>
            <button className={`${styles.button} ${styles.btn}`} onClick={props.getLocation}>Use your position <FontAwesomeIcon icon={faMapPin} /></button>
        </div>
    );
}

export default LocationInput
