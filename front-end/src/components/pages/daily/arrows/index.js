import React from 'react';
import styles from './index.module.css';

const Arrows = () => {
  return (
    <section className={styles.arrows}>
      <span className="lnr lnr-chevron-right"></span>
      <span className="lnr lnr-chevron-left"></span>
      <span className="lnr lnr-chevron-left"></span>
      <span className="lnr lnr-chevron-left"></span>
      <span className="lnr lnr-chevron-right"></span>
      <span className="lnr lnr-chevron-right"></span>
    </section>
  );
};

export default Arrows;