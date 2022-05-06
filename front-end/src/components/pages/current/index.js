import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ServerError from '../../common/serverError';
import ErrorBoundary from '../../common/ErrorBoundary';
import Header from '../../common/header';
import AtTheMoment from './atTheMoment';
import WeekDays from './weekDays';
import { cities } from '../../../utils/constants';
import { fetchFullWeatherInfo } from '../../../redux/actions/forecastActions';
import styles from './index.module.css';

const CurrentForecast = () => {
  const { city } = useParams();
  const { lat, lon } = cities.find(({ val }) => city === val);
  const dispatch = useDispatch();

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchFullWeatherInfo(lat, lon));
    }
  }, [dispatch, lat, lon]);

  return (
    <div className={styles["current-container"]}>
      <ServerError />
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
