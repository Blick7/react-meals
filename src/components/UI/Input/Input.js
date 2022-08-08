import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id} className={classes.label}>
        Amount
      </label>
      <input id={props.id} type="number" defaultValue="1" min="1" />
    </div>
  );
};

export default Input;
