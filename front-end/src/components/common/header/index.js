import React, { useLayoutEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './index.module.css';
import { cities } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setClassAtr } from '../../../redux/actions/forecastActions';

const Header = () => {
  const { city } = useParams();
  const { name, country, val } = cities.find(({ val }) => city === val);
  const location = useLocation();
  const { currentClassAtr, dailyClassAtr } = useSelector(state => state.headerData);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (location.pathname === `/${val}/current`) {
      dispatch(setClassAtr({ currentClassAtr: 'highlighted', dailyClassAtr: '' }));
    } else if (location.pathname === `/${val}/daily`) {
      dispatch(setClassAtr({ currentClassAtr: '', dailyClassAtr: 'highlighted' }));
    }
  }, [location.pathname, val]);


  return (
    <header className={styles.header}>
      <div className={styles.location}>
        <h1>{name}</h1>
        <h2>{country}</h2>
      </div>
      <ul>
        <li className={styles[`${currentClassAtr}`]}>
          <Link to={`/${val}/current`}>В момента</Link>
        </li>
        <li className={styles[`${dailyClassAtr}`]}>
          <Link to={`/${val}/daily`}>24 часа</Link>
        </li>
        <li>
          <Link to={`/${val}/ten-day`}>10 дни</Link>
        </li>
        <li>
          <Link to={`/${val}/weekend`}>Уикенд</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;