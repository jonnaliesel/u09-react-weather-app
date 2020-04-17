import React from 'react';
import styles from './Loading.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = (props) => {
if(props.show){
  return (
    <div className={`${styles.loadingContainer} Loading`} >
      <FontAwesomeIcon  icon={faSpinner} className={styles.spinner} pulse />
    </div>
  );
}
else {
  return <></>;
}
};

export default Loading;
