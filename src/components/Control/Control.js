import React from 'react';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Control/Control.module.css';
const Control = ({ onIncrement }) => {
  return (
    <div>
      <Button
        className={s.button}
        name="good"
        variant="outline-warning"
        onClick={onIncrement}
      >
        Good
      </Button>
      <Button
        className={s.button}
        name="neutral"
        variant="outline-warning"
        onClick={onIncrement}
      >
        Neutral
      </Button>
      <Button
        className={s.button}
        name="bad"
        variant="outline-warning"
        onClick={onIncrement}
      >
        Bad
      </Button>
    </div>
  );
};
export default Control;
