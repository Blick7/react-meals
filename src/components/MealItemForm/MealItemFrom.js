import React, { useRef, useState } from 'react';
import Input from '../UI/Input/Input';

import classes from './MealItemFrom.module.css';

const MealItemForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const inputAmountRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const inputAmount = +inputAmountRef.current.value;

    if (inputAmount < 1 || inputAmount > 5) {
      setInputIsValid(false);
      return;
    } else {
      setInputIsValid(true);
    }

    props.onAddItemToCart(inputAmount);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input ref={inputAmountRef} id={props.id} />
      <button type="submit">+ Add</button>
      {!inputIsValid && <p>Enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
