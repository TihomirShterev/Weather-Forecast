import React from 'react';
import styles from './index.module.css';

const AtTheMoment = ({
  weather,
  temperature,
  description,
  feelsLike,
  humidity,
  windSpeed,
  sunrise,
  sunset
}) => {

  return (
    <section className={styles["current-forecast"]}>
      <div className={styles["weather-icon-and-temp"]}>
        <div className={styles.icon}>
          <img src={weather} alt="weather" />
        </div>
        <div className={styles.temp}>
          <span>{temperature}</span><span>&deg;C</span>
        </div>
      </div>
      <h2>{description}</h2>
      <h3>Усеща се като {feelsLike} &deg;C</h3>
      <div className={styles["mini-icons"]}>
        <div className={styles.humidity}>
          <i className="fas fa-tint"></i>
          <div className={styles.percentage}>
            <span>{humidity}</span><span>%</span>
          </div>
        </div>
        <div className={styles.wind}>
          <i className="fas fa-wind"></i>
          <div className={styles.speed}>
            <span>{windSpeed}</span><span>м/с</span>
          </div>
        </div>
        <div className={styles.sunrise}>
          <i className="fas fa-sun"></i>
          <div className={styles.time}>
            <span>Изгрев {sunrise}</span>
          </div>
        </div>
        <div className={styles.sunset}>
          <i className="fas fa-moon"></i>
          <div className={styles.time}>
            <span>Залез {sunset}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtTheMoment;