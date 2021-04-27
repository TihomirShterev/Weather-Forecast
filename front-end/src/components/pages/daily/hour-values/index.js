import React from 'react';
import moment from 'moment';
import styles from './index.module.css';
import { compass, genIconURL, kToCels } from '../../../../utils/constants';

const HourValues = ({ dt, weather, temp, wind_speed, feels_like, wind_deg, pressure, humidity, i }) => {
  const dateInMs = dt * 1000;
  const date = moment(dateInMs).format('DD.MM.YYYY');
  const dateTime = moment(dateInMs).format('HH:mm');

  return (
    <article key={i} className={styles["hour-values"]}>
      <div className={styles.time}>
        <span>{dateTime}</span>
        <span>{date}</span>
      </div>
      <div className={styles.weather}>
        <div className={styles.icon}>
          <img src={genIconURL(weather[0].icon)} alt="weather" />
        </div>
        <div className={styles.temp}>
          <span>{kToCels(temp)}</span>
          <span>&deg;C</span>
        </div>
      </div>
      <div className={styles["wind-speed-icon"]}>
        <div className={styles.icon}>
          <i className="fas fa-wind"></i>
        </div>
        <div className={styles.value}>
          <span>{Math.round(wind_speed)} м/с</span>
        </div>
      </div>
      <div className={styles["feels-like"]}>
        <span>{kToCels(feels_like)} &deg;C</span>
      </div>
      <div className={styles["wind-speed"]}>
        <span>{Math.round(wind_speed)} м/с</span>
      </div>
      <div className={styles["wind-direction"]}>
        <span>{compass(wind_deg)}</span>
      </div>
      <div className={styles["atm-pressure"]}>
        <span>{pressure} hPa</span>
      </div>
      <div className={styles.humidity}>
        <span>{humidity}%</span>
      </div>
    </article>
  );
};

export default HourValues;