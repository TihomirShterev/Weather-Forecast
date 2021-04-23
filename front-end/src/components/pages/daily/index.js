import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities, genIconURL, kToCels, pmTo24h } from '../../../utils/constants';
import { Link } from 'react-router-dom';
import moment from 'moment';

const DailyForecast = ({
  match: {
    params: { city },
  },
}) => {
  const [hours, setHours] = useState([]);

  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${current.lat}&lon=${current.lon}&appid=5ca3ed725d503a2eb0ab2b0af055061d`);
      const data = await res.json();

      let hoursData = data.hourly.slice(0, 24).map((hour, i) => {
        const { dt, weather, temp, wind_speed, feels_like, pressure, humidity } = hour;
        const dateInMs = dt * 1000;
        const date = moment(dateInMs).format('DD/MM/YYYY').replaceAll('/', '.');

        let dateTime = moment(dateInMs).format('LT');

        if (i < 12) {
          if (Number(dateTime.substring(0, 2)) === 12) {
            dateTime = '00' + dateTime.substring(2, dateTime.length - 3);
          } else if (
            Number(dateTime.substring(0, 2)) === 11
            || Number(dateTime.substring(0, 2)) === 10
          ) {
            dateTime = dateTime.substring(0, dateTime.length - 3);
          } else {
            dateTime = '0' + dateTime.substring(0, dateTime.length - 3);
          }
        } else {
          if (Number(dateTime.substring(0, 2)) === 12) {
            dateTime = dateTime.substring(0, dateTime.length - 3);
          } else if (
            Number(dateTime.substring(0, 2)) === 11
            || Number(dateTime.substring(0, 2)) === 10
          ) {
            dateTime = Number(dateTime.substring(0, 2)) + 12 + dateTime.substring(2, dateTime.length - 3);
          } else {
            dateTime = Number(dateTime.substring(0, 1)) + 12 + dateTime.substring(1, dateTime.length - 3);
          }
        }
        return (
          <article key={i} className={styles["hour-value"]}>
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
                <span>{wind_speed} м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>{kToCels(feels_like)} &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>{wind_speed} м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
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
      setHours(hoursData);
    } catch (err) {
      console.log(err);
    }

  }, [city]);

  const current = cities.find(({ val }) => city === val);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  if (!current) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className={styles["daily-container"]}>
        <section className={styles["sub-header"]}>
          <div className={styles.location}>
            <h1>{current.name}</h1>
            <h2>{current.country}</h2>
          </div>
          <ul>
            <li>
              <Link to={`/${current.val}/current`}>В момента</Link>
            </li>
            <li>
              <span>24 часа</span>
            </li>
            <li>
              <a href="/ten-day">10 дни</a>
            </li>
            <li>
              <a href="/weekend">Уикенд</a>
            </li>
          </ul>
        </section>
        <section className={styles["hourly-forecast"]}>
          <article className={styles["hour-keys"]}>
            <div>
              <span>Час</span>
              <span>Дата</span>
            </div>
            <div>
              <p>Скорост на вятъра</p>
            </div>
            <div>
              <p>Усеща се</p>
              <p>Скорост на вятъра</p>
              <p>Посока на вятъра</p>
              <p>Атм. налягане</p>
              <p>Влажност</p>
            </div>
          </article>
          <div className={styles["hour-values-container"]}>
            {hours}
          </div>
        </section>
        <section className={styles.icons}>
          <span className="lnr lnr-chevron-right"></span>
          <span className="lnr lnr-chevron-left"></span>
          <span className="lnr lnr-chevron-left"></span>
          <span className="lnr lnr-chevron-left"></span>
          <span className="lnr lnr-chevron-right"></span>
          <span className="lnr lnr-chevron-right"></span>
        </section>
      </div>
    </div>
  );
};

export default DailyForecast;