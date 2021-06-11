import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import AddMetrics from '../../pages/daily/add-metrics';
import HourValues from '../../pages/daily/hour-values';
import Arrows from '../../pages/daily/arrows';
import HoursListKeys from '../../pages/daily/hours-list-keys';
import Header from '../../common/header';
import { fetchCoordinates, fetchFullWeatherInfo } from '../../../redux/actions/forecastActions';

const DailyForecast = () => {
  const { city } = useParams();
  const current = cities.find(({ val }) => city === val);
  const dispatch = useDispatch();
  const [latitude, longitude] = useSelector(state => state.coordinatesReducer.coordinates);

  useEffect(() => {
    dispatch(fetchCoordinates(current.val, current.isoCode));
  }, [current.isoCode, current.val, dispatch]);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchFullWeatherInfo(latitude, longitude));
    }
  }, [dispatch, latitude, longitude]);

  if (!current) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles["daily-container"]}>
      <Header />
      <section className={styles["hourly-forecast"]}>
        <HoursListKeys />
        <HourValues />
      </section>
      <Arrows />
      <AddMetrics />
    </div>
  );
};

export default DailyForecast;