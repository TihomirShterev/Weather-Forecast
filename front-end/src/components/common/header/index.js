import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className={styles["cities-nav"]}>
        <button className={styles["options-btn"]}>
          <span className="lnr lnr-chevron-right"></span> Град <span className="lnr lnr-chevron-left"></span>
        </button>
        <div className={styles["cities-list"]}>
          <Link to="/:cityId">Берлин</Link>
          <Link to="/:cityId">Брюксел</Link>
          <Link to="/:cityId">Лондон</Link>
          <Link to="/:cityId">Париж</Link>
          <Link to="/:cityId">Рим</Link>
          <Link to="/:cityId">София</Link>
          <Link to="/:cityId">Стокхолм</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;