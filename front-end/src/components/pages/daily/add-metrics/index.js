import React, { useState } from 'react';
import styles from './index.module.css';

const AddMetrics = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [temperature, setTemperature] = useState(Number);
  const [windSpeed, setWindSpeed] = useState(Number);
  const [humidity, setHumidity] = useState(Number);
  const [pressure, setPressure] = useState(Number);
  const [rain, setRain] = useState(Number);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [temperatureError, setTemperatureError] = useState(false);
  const [windSpeedError, setWindSpeedError] = useState(false);
  const [humidityError, setHumidityError] = useState(false);
  const [pressureError, setPressureError] = useState(false);
  const [rainError, setRainError] = useState(false);
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const showForm = () => {
    setIsVisible(true);
  };

  const closeForm = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (0 < username.length && username.length < 6) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (0 < email.length && /^[a-zA-Z0-9.-]{6,}@\w+.\w+$/.test(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (temperature < -20 || 60 < temperature) {
      setTemperatureError(true);
    } else {
      setTemperatureError(false);
    }

    if (windSpeed < 0 || 200 < windSpeed) {
      setWindSpeedError(true);
    } else {
      setWindSpeedError(false);
    }

    if (humidity < 0 || 100 < humidity) {
      setHumidityError(true);
    } else {
      setHumidityError(false);
    }

    if (pressure < 0 || 3000 < pressure) {
      setPressureError(true);
    } else {
      setPressureError(false);
    }

    if (rain < 0 || 1000 < rain) {
      setRainError(true);
    } else {
      setRainError(false);
    }

    if (!username || !email) {
      setEmptyFieldsError(true);
    } else {
      setEmptyFieldsError(false);
    }

    let hasNoError =
      username.length >= 6
      && /^[a-zA-Z0-9.-]{6,}@\w+.\w+$/.test(email)
      && (-20 <= temperature && temperature <= 60)
      && (0 <= windSpeed && windSpeed <= 200)
      && (0 <= humidity && humidity <= 100)
      && (0 <= pressure && pressure <= 3000)
      && (0 <= rain && rain <= 1000);

    if (hasNoError) {
      setIsVisible(false);
      await fetch('https://openweathermap.org/stations#measurement', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          temperature,
          windSpeed,
          humidity,
          pressure,
          rain
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };

  const emailErrorMessage = emailError ? 'Невалидна електронна поща' : null;
  const usernameErrorMessage = usernameError ? 'Невалидно потрeбителско име' : null;
  const temperatureErrorMessage = temperatureError ? 'от -20 до 60' : null;
  const windSpeedErrorMessage = windSpeedError ? 'от 0 до 200' : null;
  const humidityErrorMessage = humidityError ? '0 до 100' : null;
  const pressureErrorMessage = pressureError ? 'от 0 до 3000' : null;
  const rainErrorMessage = rainError ? 'от 0 до 1000' : null;
  const emptyFieldsErrorMessage = emptyFieldsError ? 'Моля, попълнете всички полета' : null;

  return (
    <>
      {
        isVisible
          ?
          <section className={styles.metrics}>
            <div className={styles.overlay} onClick={closeForm}></div>
            <form className={styles["add-metrics-form"]} onSubmit={handleSubmit}>
              <fieldset>
                <span className={styles.close} onClick={closeForm}>×</span>

                <div className={styles["form-group"]}>
                  <label htmlFor="username">Потребителско име: </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder=""
                  />
                  <p className={styles.error}>
                    {usernameErrorMessage}
                  </p>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="email">Елeктронна поща: </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                  />
                  <p className={styles.error}>
                    {emailErrorMessage}
                  </p>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="temperature">Температура: </label>
                  <input
                    type="number"
                    name="temperature"
                    id="temperature"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    placeholder=""
                  />
                  <span> &deg;C</span>
                  <p className={styles.error}>
                    {temperatureErrorMessage}
                  </p>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="temperature">Скорост на вятъра: </label>
                  <input
                    type="number"
                    name="windSpeed"
                    id="windSpeed"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(e.target.value)}
                    placeholder=""
                  />
                  <span> м/с</span>
                  <div className={styles.error}>
                    {windSpeedErrorMessage}
                  </div>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="humidity">Влажност: </label>
                  <input
                    type="number"
                    name="humidity"
                    id="humidity"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                    placeholder=""
                  />
                  <span> %</span>
                  <p className={styles.error}>
                    {humidityErrorMessage}
                  </p>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="pressure">Атм.налягане: </label>
                  <input
                    type="number"
                    name="pressure"
                    id="pressure"
                    value={pressure}
                    onChange={(e) => setPressure(e.target.value)}
                    placeholder=""
                  />
                  <span> hPa</span>
                  <p className={styles.error}>
                    {pressureErrorMessage}
                  </p>

                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="rain">Валежи: </label>
                  <input
                    type="number"
                    name="rain"
                    id="rain"
                    value={rain}
                    onChange={(e) => setRain(e.target.value)}
                    placeholder=""
                  />
                  <span> мл</span>
                  <p className={styles.error}>
                    {rainErrorMessage}
                  </p>
                </div>

                <button type="submit">Изпрати</button>

                <p className={styles.error}>
                  {emptyFieldsErrorMessage}
                </p>

              </fieldset>
            </form>
          </section>

          : <div className="show-form-btn-container">
            <button className={styles["show-form-btn"]} onClick={showForm}>Добави измервания ръчно</button>
          </div>
      }
    </>
  );
};

export default AddMetrics;