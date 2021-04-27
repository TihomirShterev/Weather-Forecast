import React from 'react';
import styles from './index.module.css';

const HoursListKeys = () => {
  return (
    <article className={styles["hours-list-keys"]}>
      <div>
        <span>Час</span>
        <span>Дата</span>
      </div>
      <div>
        <p>Скорост на вятъра</p>
      </div>
      <div>
        <p>Усеща се</p>
        <p>Скорост на вятъра</p>
        <p>Посока на вятъра</p>
        <p>Атм. налягане</p>
        <p>Влажност</p>
      </div>
    </article>
  );
};

export default HoursListKeys;