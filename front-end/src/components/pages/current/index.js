import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities, genIconURL, kToCels, weatherTranslations, dayTranslations } from '../../../utils/constants';
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
  const [week, setWeek] = useState([]);

  const current = cities.find(({ val }) => city === val);

  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${current.lat}&lon=${current.lon}&appid=5ca3ed725d503a2eb0ab2b0af055061d`);
      const data = await res.json();
      // console.log(data);
      setWeather(genIconURL(data.current.weather[0].icon));
      setTemperature(kToCels(data.current.temp));
      setDescription(weatherTranslations[data.current.weather[0].description]);
      setFeelsLike(kToCels(data.current.feels_like));
      setHumidity(data.current.humidity);
      setSunrise(moment(data.current.sunrise).format('hh:mm'));
      setSunset(moment(data.current.sunset).format('HH:mm'));
      // console.log(data.daily[4].weather[0].description);
      let weekData = data.daily.slice(0, 7).map((day, i) => {
        const { dt, temp, weather } = day;
        const dateInMs = dt * 1000;
        const dateDay = i === 0 ? 'Днес' : i === 1 ? 'Утре' : dayTranslations[moment(dateInMs).format('dddd')];
        const date = moment(dateInMs).format('DD/MM/YYYY').replaceAll('/', '.');
        return (
          <article key={i} className={styles["day-info"]}>
            <h3>{dateDay}</h3>
            <h5>{date}</h5>
            <span className={styles["info-icon"]}><i class="fas fa-info-circle"></i></span>
            <div className={styles["weather-icon"]}>
              <img src={genIconURL(weather[0].icon)} alt="weather" />
            </div>
            <div className={styles.temperature}>
              <span>{kToCels(temp.min)}&deg;</span><span>/</span><span>{kToCels(temp.max)}&deg;</span>
            </div>
            <h4>{weatherTranslations[weather[0].description]}</h4>
          </article>
        );
      });
      setWeek(weekData);
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
            {week}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentForecast;