import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import AddMetrics from '../../pages/daily/add-metrics';
import { apiKey, baseURL, mapsKey, mapsURL } from '../../../config/config';
import HourValues from '../../pages/daily/hour-values';
import Arrows from '../../pages/daily/arrows';
import HoursListKeys from '../../pages/daily/hours-list-keys';
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
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const current = cities.find(({ val }) => city === val);

  const getCoordinates = useCallback(async () => {
    try {
      const res = await fetch(`${mapsURL}${current.val}+${current.isoCode}&key=${mapsKey}`);
      const data = await res.json();
      setLatitude(data.results[0].geometry.location.lat);
      setLongitude(data.results[0].geometry.location.lng);
    } catch (err) {
      console.log(err);
    }
  }, [current]);

  const getInfo = useCallback(async () => {
    try {
      // const res = await fetch(`${baseURL}?lat=${current.lat}&lon=${current.lon}&appid=${apiKey}`); // static coordinates
      const res = await fetch(`${baseURL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`); // coordinates from Google Maps API 
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

  }, [current, latitude, longitude]);

  useEffect(() => {
    getCoordinates();
    getInfo();
  }, [getCoordinates, getInfo]);

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