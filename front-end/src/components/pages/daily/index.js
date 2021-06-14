import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './index.module.css';
import AddMetrics from './addMetrics';
import HourValues from './hourValues';
import Arrows from '../../pages/daily/arrows';
import HoursListKeys from './hoursListKeys';
import Header from '../../common/header';
import { fetchFullWeatherInfo, fetchPreviousDayInfo } from '../../../redux/actions/forecastActions';
import ErrorBoundary from '../../common/ErrorBoundary';
import { useForecastData } from '../../../utils/hooks';

const DailyForecast = () => {
  const [clickCounter, setClickCounter] = useState(0);
  const dispatch = useDispatch();
  const { lat, lon } = useForecastData();

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