import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import WeekDays from './week-days';
import AtTheMoment from '../../pages/current/at-the-moment';
import Header from '../../common/header';
import { fetchCoordinates, fetchFullWeatherInfo } from '../../../redux/actions/forecastActions';

const CurrentForecast = () => {
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
  }, [latitude, longitude, dispatch]);

  if (!current) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles["current-container"]}>
      <Header />
      <div className={styles["content-container"]}>
        <AtTheMoment />
        <section className={styles["future-forecast"]}>
          <WeekDays />
        </section>
      </div>
    </div>
  );
};

export default CurrentForecast;