import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import moment from 'moment';
import styles from './index.module.css';
import { cities, genIconURL, kToCels, weatherTranslations } from '../../../utils/constants';
import WeekDay from '../../pages/current/week-day';
import { apiKey, baseURL } from '../../../config/config';
import AtTheMoment from '../../pages/current/at-the-moment';
import Header from '../../common/header';

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
  const [windSpeed, setWindSpeed] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [week, setWeek] = useState([]);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [cityPath, setCityPath] = useState('');

  const current = cities.find(({ val }) => city === val);

  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`${baseURL}?lat=${current.lat}&lon=${current.lon}&appid=${apiKey}`);
      const data = await res.json();
      setWeather(genIconURL(data.current.weather[0].icon));
      setTemperature(kToCels(data.current.temp));
      setDescription(weatherTranslations[data.current.weather[0].description]);
      setFeelsLike(kToCels(data.current.feels_like));
      setHumidity(data.current.humidity);
      setWindSpeed(Math.round(data.current.wind_speed));
      setSunrise(moment(data.current.sunrise).format('hh:mm'));
      setSunset(moment(data.current.sunset).format('HH:mm'));
      let weekData = data.daily.slice(0, 7).map((day, i) => {
        return (
          <WeekDay key={i} {...day} />
        );
      });
      setWeek(weekData);
      setCityName(current.name);
      setCountry(current.country);
      setCityPath(current.val);
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

  const stateData = {
    weather,
    temperature,
    description,
    feelsLike,
    humidity,
    windSpeed,
    sunrise,
    sunset,
    week,
    cityName,
    country,
    cityPath
  };

  return (
    <div className={styles["current-container"]}>
      <Header {...stateData} />
      <div className={styles["content-container"]}>
        <AtTheMoment {...stateData} />
        <section className={styles["future-forecast"]}>
          <div className={styles["week-days-list"]}>
            {week}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentForecast;