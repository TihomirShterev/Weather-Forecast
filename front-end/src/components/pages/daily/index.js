import React from 'react';
import styles from './index.module.css';
import Header from '../../common/header';

const DailyForecast = () => {
  return (
    <div>
      <Header />
      <div className={styles["daily-container"]}>
        <section className={styles["sub-header"]}>
          <div className={styles.location}>
            <h1>София</h1>
            <h2>България</h2>
          </div>
          <ul>
            <li>
              <a href="/">В момента</a>
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