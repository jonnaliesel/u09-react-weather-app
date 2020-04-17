import React from 'react';
import Temperature from '../Temperature/Temperature';
import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regHeart } from '@fortawesome/free-regular-svg-icons';

class MainTemperatureDisplay extends React.Component {

  constructor(props) {
    super(props);
    // get places from localStorage
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    this.isFavorite = this.checkIfFavorite(props.city);
  }

  checkIfFavorite(city) {
    return this.favorites.find((place) => place === city.toLowerCase());
  }

  addFavorite(favoritesArray) {
    favoritesArray.push(this.props.city.toLowerCase());
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  removeExistingItem(array, value) {
    console.log('array: ', array);
    let newFavorites = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== value) {
        newFavorites.push(array[i]);
        console.log(newFavorites);
      }
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  handleFavorite = (event) => {
    console.log("isFavorite", this.isFavorite);
    if (this.isFavorite) {
      this.favorites.find((place) => place === this.props.city.toLowerCase());
      this.removeExistingItem(this.favorites, this.isFavorite);
    } else {
      this.addFavorite(this.favorites);
    }
    this.isFavorite = this.checkIfFavorite(this.props.city);
  };

  render() {
    const { city, temp, icon } = this.props;

    return (
      <div className='mainTemperatureDisplay'>
        <div className={styles.h1AndHeart}>
          <h1 className={styles.h1}>{city}</h1>
          <button className={styles.heartButton}>
            <FontAwesomeIcon
              className={this.isFavorite === city.toLowerCase() ? styles.favoriteIcon : styles.heartIcon}
              icon={this.isFavorite === city.toLowerCase() ? solidHeart : regHeart}
              onClick={this.handleFavorite}
            />
          </button>
        </div>

        <h2 className={styles.h2}>
          <Temperature temp={temp} tempUnit={this.props.tempUnit} />
        </h2>

        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=''
          className='icon'
        />
      </div>
    );
  }
}

export default MainTemperatureDisplay;
