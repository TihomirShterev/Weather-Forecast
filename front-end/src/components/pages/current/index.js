import React from 'react';
import styles from './index.module.css';
import Header from '../../common/header';

const CurrentForecast = () => {
  return (
    <div>
      <Header />
      <div className={styles["current-container"]}>
        <section className={styles["current-forecast"]}>
          <div className={styles.location}>
            <h1>София</h1>
            <h2>България</h2>
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
                <a href="/daily">24 часа</a>
              </li>
              <li>
                <a href="/ten-day">10 дни</a>
              </li>
              <li>
                <a href="/weekend">Уикенд</a>
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