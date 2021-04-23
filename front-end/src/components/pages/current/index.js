import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities, genIconURL, kToCels } from '../../../utils/constants';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CurrentForecast = ({
  match: {
    params: { city },
  },
}) => {
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [humidity, setHumidity] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [week, setWeek] = useState('');

  const current = cities.find(({ val }) => city === val);

  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${current.lat}&lon=${current.lon}&appid=5ca3ed725d503a2eb0ab2b0af055061d`);
      const data = await res.json();
      console.log(data);
      setWeather(genIconURL(data.current.weather[0].icon));
      setTemperature(kToCels(data.current.temp));

      switch (data.current.weather[0].description) {
        case 'few clouds':
          setDescription('Предимно облачно');
          break;
        default:
          break;
      }

      setFeelsLike(kToCels(data.current.feels_like));
      setHumidity(data.current.humidity);
      let sunriseTime = moment(data.current.sunrise).format('LT');
      sunriseTime = '0' + sunriseTime.substring(0, sunriseTime.length - 3);
      setSunrise(sunriseTime);
      let sunsetTime = moment(data.current.sunset).format('LT');
      sunsetTime = Number(sunsetTime.substring(0, 1)) + 12 + sunsetTime.substring(1, sunsetTime.length - 3);
      setSunset(sunsetTime);
      setWeek(data.daily);

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
                  <span>4</span><span>м/с</span>
                </div>
              </div>
              <div className={styles.sunrise}>
                <span>rise</span>
                <div className={styles.time}>
                  <span>Изгрев {sunrise}</span>
                </div>
              </div>
              <div className={styles.sunset}>
                <span>set</span>
                <div className={styles.time}>
                  <span>Залез {sunset}</span>
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