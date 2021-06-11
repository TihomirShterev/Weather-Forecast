import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './index.module.css';
import { compass, genIconURL, kToCels } from '../../../../utils/constants';

const HourValues = () => {
  let hoursData;
  const res = useSelector(state => state.weatherReducer.daysData.hourly);
  if (res) {
    hoursData = res.slice(0, 24).map((hour, i) => {
      const { dt, weather, temp, wind_speed, feels_like, wind_deg, pressure, humidity } = hour;
      const dateInMs = dt * 1000;
      const dateTime = moment(dateInMs).format('HH:mm');
      const date = moment(dateInMs).format('DD.MM.YYYY');
      const weatherIcon = genIconURL(weather[0].icon);
      const temperature = kToCels(temp);
      const windSpeed = Math.round(wind_speed);
      const feelsLike = kToCels(feels_like);
      const windDirection = compass(wind_deg);

      return (
        <article key={i} className={styles["hour-values"]}>
          <div className={styles.time}>
            <span>{dateTime}</span>
            <span>{date}</span>
          </div>
          <div className={styles.weather}>
            <div className={styles.icon}>
              <img src={weatherIcon} alt="weather" />
            </div>
            <div className={styles.temp}>
              <span>{temperature}</span>
              <span>&deg;C</span>
            </div>
          </div>
          <div className={styles["wind-speed-icon"]}>
            <div className={styles.icon}>
              <i className="fas fa-wind"></i>
            </div>
            <div className={styles.value}>
              <span>{windSpeed} м/с</span>
            </div>
          </div>
          <div className={styles["feels-like"]}>
            <span>{feelsLike} &deg;C</span>
          </div>
          <div className={styles["wind-speed"]}>
            <span>{windSpeed} м/с</span>
          </div>
          <div className={styles["wind-direction"]}>
            <span>{windDirection}</span>
          </div>
          <div className={styles["atm-pressure"]}>
            <span>{pressure} hPa</span>
          </div>
          <div className={styles.humidity}>
            <span>{humidity}%</span>
          </div>
        </article>
      );
    });
  }

  return (
    <div className={styles["hour-values-container"]}>
      {hoursData}
    </div>
  );
};

export default HourValues;