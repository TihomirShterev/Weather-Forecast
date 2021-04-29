import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import AddMetrics from '../../pages/daily/add-metrics';
import HourValues from '../../pages/daily/hour-values';
import Arrows from '../../pages/daily/arrows';
import HoursListKeys from '../../pages/daily/hours-list-keys';
import Header from '../../common/header';
import { getCoordinates } from '../../../services/coordinates';
import { getFullWeatherInfo, getPreviousDayInfo } from '../../../services/weather';

const DailyForecast = ({
  match: {
    params: { city },
  },
}) => {
  const [hours, setHours] = useState([]);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [cityPath, setCityPath] = useState('');
  const [clickCounter, setClickCounter] = useState(0);

  const current = cities.find(({ val }) => city === val);

  const showPreviousDay = () => {
    setClickCounter(clickCounter + 1);
  };

  const getInfo = useCallback(async () => {
    try {
      const [latitude, longitude] = await getCoordinates(current.val, current.isoCode);
      let data;

      if (clickCounter % 6 === 0) {
        data = await getFullWeatherInfo(latitude, longitude);
      } else {
        if (clickCounter % 6 !== 0) {
          data = await getPreviousDayInfo(latitude, longitude, clickCounter);
        }
      }
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

  }, [current, clickCounter]);

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
      <button className={styles["history-btn"]} onClick={showPreviousDay}>
        {clickCounter % 6 !== 5 ? 'Предишен ден' : 'Днес'}
      </button>
      <AddMetrics />
    </div>
  );
};

export default DailyForecast;