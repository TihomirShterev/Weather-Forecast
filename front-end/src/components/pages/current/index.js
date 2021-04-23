import React, { useCallback, useEffect } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import { Link } from 'react-router-dom';

const CurrentForecast = ({
  match: {
    params: { city },
  },
}) => {
  const current = cities.find(({ val }) => city === val);

  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${current.lat}&lon=${current.lon}&appid=5ca3ed725d503a2eb0ab2b0af055061d`);

      console.log(res);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

  }, [current]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  if (!current) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className={styles["current-container"]}>
        <section className={styles["current-forecast"]}>
          <div className={styles.location}>
            <h1>{current.name}</h1>
            <h2>{current.country}</h2>
          </div>
          <article className={styles.info}>
            <h1>В момента</h1>
            <div className={styles["weather-icon-and-temp"]}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span><span>&deg;C</span>
              </div>
            </div>
            <h2>Дъжд</h2>
            <h3>Усеща се като 4<span className={styles.celsius}>&deg;C</span></h3>
            <div className={styles["mini-icons"]}>
              <div className={styles.humidity}>
                <span>hum</span>
                <div className={styles.percentage}>
                  <span>85</span><span>%</span>
                </div>
              </div>
              <div className={styles.wind}>
                <span>wind</span>
                <div className={styles.speed}>
                  <span>4</span><span>м/с</span>
                </div>
              </div>
              <div className={styles.sunrise}>
                <span>rise</span>
                <div className={styles.time}>
                  <span>Изгрев </span><span>06:39</span>
                </div>
              </div>
              <div className={styles.sunset}>
                <span>set</span>
                <div className={styles.time}>
                  <span>Залез </span><span>20:13</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className={styles["future-forecast"]}>
          <div className={styles["sub-header"]}>
            <ul>
              <li>
                <Link to={`/${current.val}/daily`}>24 часа</Link>
              </li>
              <li>
                <a href="/:city/ten-day">10 дни</a>
              </li>
              <li>
                <a href="/:city/weekend">Уикенд</a>
              </li>
            </ul>
          </div>
          <div className={styles["days-list"]}>
            <article className={styles["day-info"]}>
              <h3>Днес</h3>
              <h5>19.04.2021</h5>
              <span className={styles["info-icon"]}>ii</span>
              <div className={styles["weather-icon"]}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temperature}>
                <span>4&deg;</span><span>/</span><span>8&deg;</span>
              </div>
              <h4>Дъжд</h4>
            </article>
            <article className={styles["day-info"]}>
              <h3>Днес</h3>
              <h5>19.04.2021</h5>
              <span className={styles["info-icon"]}>ii</span>
              <div className={styles["weather-icon"]}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temperature}>
                <span>4&deg;</span><span>/</span><span>8&deg;</span>
              </div>
              <h4>Дъжд</h4>
            </article>
            <article className={styles["day-info"]}>
              <h3>Днес</h3>
              <h5>19.04.2021</h5>
              <span className={styles["info-icon"]}>ii</span>
              <div className={styles["weather-icon"]}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temperature}>
                <span>4&deg;</span><span>/</span><span>8&deg;</span>
              </div>
              <h4>Дъжд</h4>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentForecast;