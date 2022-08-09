import React from 'react';

import classes from './HeaderCartButton.module.css';
import { HiShoppingCart } from 'react-icons/hi';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <HiShoppingCart className={classes.cart} />
      <span>Your Cart</span>
      <span className={classes['goods-amount']}>0</span>
    </button>
  );
};

export default HeaderCartButton;
