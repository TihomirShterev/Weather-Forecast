import React from 'react';
import styles from './index.module.css';
import WeekDays from './weekDays';
import AtTheMoment from './atTheMoment';
import Header from '../../common/header';
import ErrorBoundary from '../../common/ErrorBoundary';
import { useForecastData } from '../../../utils/hooks';

const CurrentForecast = () => {
  useForecastData();

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