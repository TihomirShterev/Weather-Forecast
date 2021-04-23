import React, { useCallback, useEffect } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import { Link } from 'react-router-dom';

const DailyForecast = ({
  match: {
    params: { city },
  },
}) => {
  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${current.lat}&lon=${current.lon}&appid=5ca3ed725d503a2eb0ab2b0af055061d`);
      const data = await res.json();
      console.log(data);
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
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
          <article className={styles["hour-value"]}>
            <div className={styles.time}>
              <span>15:00</span>
              <span>19.04.2021</span>
            </div>
            <div className={styles.weather}>
              <div className={styles.icon}>
                <img src="" alt="weather" />
              </div>
              <div className={styles.temp}>
                <span>6</span>
                <span>&deg;C</span>
              </div>
            </div>
            <div className={styles["wind-speed-icon"]}>
              <div className={styles.icon}>
                <img src="" alt="wind" />
              </div>
              <div className={styles.value}>
                <span>4</span>
                <span> м/с</span>
              </div>
            </div>
            <div className={styles["feels-like"]}>
              <span>4</span>
              <span> &deg;C</span>
            </div>
            <div className={styles["wind-speed"]}>
              <span>4</span>
              <span> м/с</span>
            </div>
            <div className={styles["wind-direction"]}>
              <span>Североизток</span>
            </div>
            <div className={styles["atm-pressure"]}>
              <span>1012</span>
              <span>hPa</span>
            </div>
            <div className={styles.humidity}>
              <span>85</span>
              <span>%</span>
            </div>
          </article>
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