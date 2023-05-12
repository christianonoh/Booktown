import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Progress.module.css';

const CircularProgress = ({ percentage }) => {
  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.progressCont}>
      <svg className={styles.CircularProgress} viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="#ddd"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="#0290ff"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <span className={styles.progress}>
        <p>60%</p>
        <p>Completed</p>
      </span>
    </div>
  );
};

CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgress;
