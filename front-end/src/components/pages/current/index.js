import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './index.module.css';
import WeekDays from './weekDays';
import AtTheMoment from './atTheMoment';
import Header from '../../common/header';
import ErrorBoundary from '../../common/ErrorBoundary';
import { useForecastData } from '../../../utils/hooks';
import { fetchFullWeatherInfo } from '../../../redux/actions/forecastActions';

const CurrentForecast = () => {
  const dispatch = useDispatch();
  const { lat, lon } = useForecastData();

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchFullWeatherInfo(lat, lon));
    }
  }, [dispatch, lat, lon]);

  return (
    <div className={styles["current-container"]}>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <div className={styles["content-container"]}>
        <ErrorBoundary>
          <AtTheMoment />
        </ErrorBoundary>
        <section className={styles["future-forecast"]}>
          <ErrorBoundary>
            <WeekDays />
          </ErrorBoundary>
        </section>
      </div>
    </div>
  );
};

export default CurrentForecast;