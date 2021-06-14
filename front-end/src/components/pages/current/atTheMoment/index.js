import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './index.module.css';
import { genIconURL, kToCels, weatherTranslations } from '../../../../utils/constants';

const selectCurrentWeatherInfo = state => state.forecast.current;

const AtTheMoment = () => {
  const current = useSelector(selectCurrentWeatherInfo);
  if (current) {
    const { weather, temp, feels_like, humidity, wind_speed, sunrise, sunset } = current;
    const weatherIcon = genIconURL(weather[0].icon);
    const temperature = kToCels(temp);
    const description = weatherTranslations[weather[0].description];
    const feelsLike = kToCels(feels_like);
    const windSpeed = Math.round(wind_speed);
    const sunriseTime = moment(sunrise).format('hh:mm');
    const sunsetTime = moment(sunset).format('HH:mm');

    return (
      <section className={styles["current-forecast"]}>
        <div className={styles["weather-icon-and-temp"]}>
          <div className={styles.icon}>
            <img src={weatherIcon} alt="weather" />
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
              <span>Изгрев {sunriseTime}</span>
            </div>
          </div>
          <div className={styles.sunset}>
            <i className="fas fa-moon"></i>
            <div className={styles.time}>
              <span>Залез {sunsetTime}</span>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default AtTheMoment;