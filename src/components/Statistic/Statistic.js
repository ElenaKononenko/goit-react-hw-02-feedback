import React from 'react';
import style from './Statistic/Statistic.module.css';
const Statistic = ({ good, neutral, bad, countTotal, countPositive }) => {
  return (
    <ul className={style.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotal}</li>
      <li>
        Positive feedback:
        {countPositive ? countPositive : 0}%
      </li>
    </ul>
  );
};
export default Statistic;
