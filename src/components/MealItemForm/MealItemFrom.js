import React, { useContext } from 'react';
import Input from '../UI/Input/Input';
import CartContext from '../store/cart-context';

import classes from './MealItemFrom.module.css';

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    ctx.addItem(props.item);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input id={props.id} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
