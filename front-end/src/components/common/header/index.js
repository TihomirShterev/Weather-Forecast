import React, { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const Header = ({ cityName, country, cityPath }) => {
  const location = useLocation();
  const [currentClass, setCurrentClass] = useState('');
  const [dailyClass, setDailyClass] = useState('');

  useLayoutEffect(() => {
    if (location.pathname === `/${cityPath}/current`) {
      setCurrentClass('highlighted');
    } else if (location.pathname === `/${cityPath}/daily`) {
      setDailyClass('highlighted');
    }
  }, [location.pathname, cityPath]);


  return (
    <header className={styles.header}>
      <div className={styles.location}>
        <h1>{cityName}</h1>
        <h2>{country}</h2>
      </div>
      <ul>
        <li className={styles[`${currentClass}`]}>
          <Link to={`/${cityPath}/current`}>В момента</Link>
        </li>
        <li className={styles[`${dailyClass}`]}>
          <Link to={`/${cityPath}/daily`}>24 часа</Link>
        </li>
        <li>
          <Link to={`/${cityPath}/ten-day`}>10 дни</Link>
        </li>
        <li>
          <Link to={`/${cityPath}/weekend`}>Уикенд</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;