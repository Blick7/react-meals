import React from 'react';
import Input from '../UI/Input/Input';

import classes from './MealItemFrom.module.css';

const MealItemForm = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(props);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input id={props.id} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
