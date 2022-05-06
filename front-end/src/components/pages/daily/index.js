import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ServerError from '../../common/serverError';
import ErrorBoundary from '../../common/ErrorBoundary';
import Header from '../../common/header';
import AddMetrics from './addMetrics';
import HourValues from './hourValues';
import HoursListKeys from './hoursListKeys';
import Arrows from '../../pages/daily/arrows';
import { cities } from '../../../utils/constants';
import { fetchFullWeatherInfo, fetchPreviousDayInfo } from '../../../redux/actions/forecastActions';
import styles from './index.module.css';

const DailyForecast = () => {
  const { city } = useParams();
  const { lat, lon } = cities.find(({ val }) => city === val);
  const [clickCounter, setClickCounter] = useState(0);
  const dispatch = useDispatch();

  const showPreviousDay = () => {
    setClickCounter(clickCounter + 1);
  };

  useEffect(() => {
    if (lat && lon) {
      if (clickCounter % 6 === 0) {
        dispatch(fetchFullWeatherInfo(lat, lon));
      } else {
        dispatch(fetchPreviousDayInfo(lat, lon, clickCounter))
      }
    }
  }, [dispatch, lat, lon, clickCounter]);

  return (
    <div className={styles["daily-container"]}>
      <ServerError />
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <section className={styles["hourly-forecast"]}>
        <ErrorBoundary>
          <HoursListKeys />
        </ErrorBoundary>
        <ErrorBoundary>
          <HourValues />
        </ErrorBoundary>
      </section>
      <ErrorBoundary>
        <Arrows />
      </ErrorBoundary>
      <button className={styles["history-btn"]} onClick={showPreviousDay}>
        {clickCounter % 6 !== 5 ? 'Предишен ден' : 'Днес'}
      </button>
      <ErrorBoundary>
        <AddMetrics />
      </ErrorBoundary>
    </div>
  );
};

export default DailyForecast;
