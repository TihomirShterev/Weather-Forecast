import React, { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForecastData } from '../../../utils/hooks';
import styles from './index.module.css';

const Header = () => {
  const location = useLocation();
  const { val, name, country } = useForecastData();
  const [currentClass, setCurrentClass] = useState('');
  const [dailyClass, setDailyClass] = useState('');

  useLayoutEffect(() => {
    if (location.pathname === `/${val}/current`) {
      setCurrentClass('highlighted');
    } else if (location.pathname === `/${val}/daily`) {
      setDailyClass('highlighted');
    }
  }, [location.pathname, val]);

  return (
    <header className={styles.header}>
      <div className={styles.location}>
        <h1>{name}</h1>
        <h2>{country}</h2>
      </div>
      {val && (
        <ul>
          <li className={styles[`${currentClass}`]}>
            <Link to={`/${val}/current`}>В момента</Link>
          </li>
          <li className={styles[`${dailyClass}`]}>
            <Link to={`/${val}/daily`}>24 часа</Link>
          </li>
          <li>
            <Link to={`/${val}/ten-day`}>10 дни</Link>
          </li>
          <li>
            <Link to={`/${val}/weekend`}>Уикенд</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
