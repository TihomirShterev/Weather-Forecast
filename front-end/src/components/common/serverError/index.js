import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.css';

const ServerError = () => {
  const { errorMessage } = useSelector(state => state.forecast);

  return (
    <p className={styles.errorMessage}>
      {errorMessage ? 'Sorry, there\'s a server error. Please, try again later.' : null}
    </p>
  );
};

export default ServerError;
