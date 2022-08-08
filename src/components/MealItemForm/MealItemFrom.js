import React from 'react';
import Input from '../UI/Input/Input';

import classes from './MealItemFrom.module.css';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input id={props.id} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
