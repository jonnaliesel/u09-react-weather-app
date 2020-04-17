import React from 'react';

import Temperature from "../Temperature/Temperature";
import SetTempUnit from '../SetTempUnit/SetTempUnit';

import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as regHeart }  from '@fortawesome/free-regular-svg-icons';

function MainTemperatureDisplay(props) {
    const { city, temp, tempUnit, icon, handleSetTempUnitSubmit } = props;
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const isFavorite = favorites.find((place) => place === props.city.toLowerCase());

  return (
    <div className='mainTemperatureDisplay'>
      <h1 className={styles.h1}>
        {city}
      </h1>
        <button className={styles.heartButton}
        >
         <FontAwesomeIcon icon={ isFavorite ? solidHeart : regHeart } />
        </button>
      <h2 className={styles.h2}>
        <Temperature temp={temp} tempUnit={props.tempUnit} />
      </h2>
      <SetTempUnit
                tempUnit={tempUnit}
                handleSetTempUnitSubmit={handleSetTempUnitSubmit}
            />
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=''
        className='icon'
      />
    </div>
  );
}

export default MainTemperatureDisplay;
