import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMetrics, setMetricsFormData } from '../../../../redux/actions/forecastActions';
import styles from './index.module.css';

const AddMetrics = () => {
  const formData = useSelector(state => state.metrics);
  const {
    username,
    email,
    temperature,
    windSpeed,
    humidity,
    pressure,
    rain,
    usernameError,
    emailError,
    temperatureError,
    windSpeedError,
    humidityError,
    pressureError,
    rainError,
    emptyFieldsError,
    isVisible
  } = formData;
  const dispatch = useDispatch();

  const showForm = () => {
    dispatch(setMetricsFormData({ isVisible: true }));
  };

  const closeForm = () => {
    dispatch(setMetricsFormData({ isVisible: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (0 < username.length && username.length < 6) {
      dispatch(setMetricsFormData({ userNameError: true }));
    } else {
      dispatch(setMetricsFormData({ userNameError: false }));
    }

    if (0 < email.length && /^[a-zA-Z0-9.-]{6,}@\w+.\w+$/.test(email) === false) {
      dispatch(setMetricsFormData({ emailError: true }));
    } else {
      dispatch(setMetricsFormData({ emailError: false }));
    }

    if (temperature < -20 || 60 < temperature) {
      dispatch(setMetricsFormData({ temperatureError: true }));
    } else {
      dispatch(setMetricsFormData({ temperatureError: false }));
    }

    if (windSpeed < 0 || 200 < windSpeed) {
      dispatch(setMetricsFormData({ windSpeedError: true }));
    } else {
      dispatch(setMetricsFormData({ windSpeedError: false }));
    }

    if (humidity < 0 || 100 < humidity) {
      dispatch(setMetricsFormData({ humidityError: true }));
    } else {
      dispatch(setMetricsFormData({ humidityError: false }));
    }

    if (pressure < 0 || 3000 < pressure) {
      dispatch(setMetricsFormData({ pressureError: true }));
    } else {
      dispatch(setMetricsFormData({ pressureError: false }));
    }

    if (rain < 0 || 1000 < rain) {
      dispatch(setMetricsFormData({ rainError: true }));
    } else {
      dispatch(setMetricsFormData({ rainError: false }));
    }

    if (!username || !email) {
      dispatch(setMetricsFormData({ emptyFieldsError: true }));
    } else {
      dispatch(setMetricsFormData({ emptyFieldsError: false }));
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
      dispatch(setMetricsFormData({ isVisible: false }));
      dispatch(addMetrics({ username, email, temperature, windSpeed, humidity, pressure, rain }));
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
                    onChange={(e) => dispatch(setMetricsFormData({ username: e.target.value }))}
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
                    onChange={(e) => dispatch(setMetricsFormData({ email: e.target.value }))}
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
                    onChange={(e) => dispatch(setMetricsFormData({ temperature: e.target.value }))}
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
                    onChange={(e) => dispatch(setMetricsFormData({ windSpeed: e.target.value }))}
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
                    onChange={(e) => dispatch(setMetricsFormData({ humidity: e.target.value }))}
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
                    onChange={(e) => dispatch(setMetricsFormData({ pressure: e.target.value }))}
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
                    onChange={(e) => dispatch(setMetricsFormData({ rain: e.target.value }))}
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

          : <div className={styles["show-form-btn-container"]}>
            <button className={styles["show-form-btn"]} onClick={showForm}>Добави измервания ръчно</button>
          </div>
      }
    </>
  );
};

export default AddMetrics;