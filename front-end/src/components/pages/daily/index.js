import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import AddMetrics from '../../parts-of-pages/daily/add-metrics';
import { apiKey, baseURL } from '../../../config/config';
import HourValues from '../../parts-of-pages/daily/hour-values';
import Arrows from '../../parts-of-pages/daily/arrows';
import HoursListKeys from '../../parts-of-pages/daily/hours-list-keys';
import Header from '../../common/header';

const DailyForecast = ({
  match: {
    params: { city },
  },
}) => {
  const [hours, setHours] = useState([]);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [cityPath, setCityPath] = useState('');

  const current = cities.find(({ val }) => city === val);

  const getInfo = useCallback(async () => {
    try {
      const res = await fetch(`${baseURL}?lat=${current.lat}&lon=${current.lon}&appid=${apiKey}`);
      const data = await res.json();
      let hoursData = data.hourly.slice(0, 24).map((hour, i) => {
        return (
          <HourValues key={i} {...hour} />
        );
      });
      setHours(hoursData);
      setCityName(current.name);
      setCountry(current.country);
      setCityPath(current.val);
    } catch (err) {
      console.log(err);
    }

  }, [current.lat, current.lon, current.country, current.name, current.val]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  if (!current) {
    return <Redirect to="/" />;
  }

  const stateData = {
    cityName,
    country,
    cityPath
  };

  return (
    <div className={styles["daily-container"]}>
      <Header {...stateData} />
      <section className={styles["hourly-forecast"]}>
        <HoursListKeys />
        <div className={styles["hour-values-container"]}>
          {hours}
        </div>
      </section>
      <Arrows />
      <AddMetrics />
    </div>
  );
};

export default DailyForecast;