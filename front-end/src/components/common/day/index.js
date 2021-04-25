import moment from 'moment';
import React from 'react';
import { dayTranslations, genIconURL, kToCels, weatherTranslations } from '../../../utils/constants';
import styles from './index.module.css';

const Day = ({ dt, temp, weather, humidity, wind_speed, sunrise, sunset, i }) => {
  const dateInMs = dt * 1000;
  const dateDay = i === 0 ? 'Днес' : i === 1 ? 'Утре' : dayTranslations[moment(dateInMs).format('dddd')];
  const date = moment(dateInMs).format('DD.MM.YYYY');
  const sunriseTime = moment(sunrise).format('hh:mm');
  const sunsetTime = moment(sunset).format('HH:mm');

  return (
    <article key={i} className={styles["day-info"]}>
      <h3>{dateDay}</h3>
      <h5>{date}</h5>
      <div className={styles["info-icon"]}>
        <i className="fas fa-info-circle"></i>
        <div className={styles["hidden-info"]}>
          <span className={styles.humidity}>
            <i className="fas fa-tint"></i>
            <div className={styles.percentage}>
              <span>{humidity}</span><span>%</span>
            </div>
          </span>
          <span className={styles.wind}>
            <i className="fas fa-wind"></i>
            <div className={styles.speed}>
              <span>{Math.round(wind_speed)}</span><span>м/с</span>
            </div>
          </span>
          <span className={styles.sunrise}>
            <i className="fas fa-sun"></i>
            <div className={styles.time}>
              <span>{sunriseTime}</span>
            </div>
          </span>
          <span className={styles.sunset}>
            <i className="fas fa-moon"></i>
            <div className={styles.time}>
              <span>{sunsetTime}</span>
            </div>
          </span>
        </div>
      </div>
      <div className={styles["weather-icon"]}>
        <img src={genIconURL(weather[0].icon)} alt="weather" />
      </div>
      <div className={styles.temperature}>
        <span>{kToCels(temp.min)}&deg;</span><span>/</span><span>{kToCels(temp.max)}&deg;</span>
      </div>
      <h4>{weatherTranslations[weather[0].description]}</h4>
    </article>
  );
};

export default Day;