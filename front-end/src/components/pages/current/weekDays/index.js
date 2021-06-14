import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './index.module.css';
import { dayTranslations, genIconURL, kToCels, weatherTranslations } from '../../../../utils/constants';

const selectWeeklyWeatherInfo = state => state.forecast.daily;

const WeekDays = () => {
  let weekData;
  const res = useSelector(selectWeeklyWeatherInfo);
  if (res) {
    weekData = res.slice(0, 7).map((day, i) => {
      const { dt, temp, weather, humidity, wind_speed, sunrise, sunset } = day;
      const dateInMs = dt * 1000;
      const dateDay = i === 0 ? 'Днес' : i === 1 ? 'Утре' : dayTranslations[moment(dateInMs).format('dddd')];
      const date = moment(dateInMs).format('DD.MM.YYYY');
      const windSpeed = Math.round(wind_speed);
      const sunriseTime = moment(sunrise).format('hh:mm');
      const sunsetTime = moment(sunset).format('HH:mm');
      const weatherIcon = genIconURL(weather[0].icon);
      const minTemp = kToCels(temp.min);
      const maxTemp = kToCels(temp.max);
      const description = weatherTranslations[weather[0].description];

      return (
        <article key={i} className={styles["week-day"]}>
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
                  <span>{windSpeed}</span><span>м/с</span>
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
            <img src={weatherIcon} alt="weather" />
          </div>
          <div className={styles.temperature}>
            <span>{minTemp}&deg;</span><span>/</span><span>{maxTemp}&deg;</span>
          </div>
          <h4>{description}</h4>
        </article>
      );
    });
  }

  return (
    <div className={styles["week-days-list"]}>
      {weekData}
    </div>
  );
};

export default WeekDays;