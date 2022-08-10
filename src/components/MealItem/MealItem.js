import React, { useContext } from 'react';
import MealItemForm from '../MealItemForm/MealItemFrom';
import CartContext from '../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
    console.log(ctx);
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price}`}</div>
      </div>
      <MealItemForm
        id={props.id}
        item={props}
        onAddItemToCart={addItemToCartHandler}
      />
    </div>
  );
};

export default MealItem;
