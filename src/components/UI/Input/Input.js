import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id} className={classes.label}>
        Amount
      </label>
      <input ref={ref} id={props.id} type="number" defaultValue="1" min="1" />
    </div>
  );
});

export default Input;
