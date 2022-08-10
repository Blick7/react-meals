import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';
import { HiShoppingCart } from 'react-icons/hi';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  ctx.amount = ctx.items.length;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <HiShoppingCart className={classes.cart} />
      <span>Your Cart</span>
      <span className={classes['goods-amount']}>{ctx.amount}</span>
    </button>
  );
};

export default HeaderCartButton;
