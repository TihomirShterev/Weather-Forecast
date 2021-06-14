import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import AddMetrics from './addMetrics';
import HourValues from './hourValues';
import Arrows from '../../pages/daily/arrows';
import HoursListKeys from './hoursListKeys';
import Header from '../../common/header';
import { incrementCounter } from '../../../redux/actions/forecastActions';
import ErrorBoundary from '../../common/ErrorBoundary';
import { useForecastData } from '../../../utils/hooks';

const DailyForecast = () => {
  const clickCounter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const showPreviousDay = () => {
    dispatch(incrementCounter(clickCounter));
  };

  useForecastData();

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