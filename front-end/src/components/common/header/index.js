import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const Header = ({ cityName, country, cityPath }) => {
  const location = useLocation();
  let currentClass;
  let dailyClass;

  if (location.pathname === `/${cityPath}/current`) {
    currentClass = 'highlighted';
    dailyClass = 'normal'
  } else if (location.pathname === `/${cityPath}/daily`) {
    currentClass = 'normal';
    dailyClass = 'highlighted';
  }

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
        <li className={styles.normal}>
          <Link to={`/${cityPath}/ten-day`}>10 дни</Link>
        </li>
        <li className={styles.normal}>
          <Link to={`/${cityPath}/weekend`}>Уикенд</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;