import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { cities } from '../../../utils/constants';

const Selector = ({
  match: {
    params: { city },
  },
}) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (city && city !== selected) {
      setSelected(city);
    }
  }, [city, selected]);

  return (
    <header>
      <nav className={styles["cities-nav"]}>
        <button className={styles["options-btn"]}>
          <span className="lnr lnr-chevron-right"></span>
          {cities.find(({ val }) => selected === val)?.name || 'Град'}
          <span className="lnr lnr-chevron-left"></span>
        </button>
        <div className={styles["cities-list"]}>
          {cities
            .filter(({ val }) => val !== selected)
            .map(({ name, val }) => (
              <Link key={val} to={`/${val}/current`}>
                {name}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Selector;