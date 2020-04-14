import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css';

const LocationInput = (props) => {
    console.log(styles);

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={props.handleCitySubmit}>
                <input className={styles.input} placeholder="Search city" onChange={props.handleCityChange} type="text"></input>
                <button className={styles.buttonSubmit} type="Submit">Search</button>
                <button className={styles.button}><FontAwesomeIcon icon={faMapPin} /></button>
                {/*  <p>{props.error === null ? '': props.error.message }</p> */}
            </form>

        </div>
    );
}


export default LocationInput