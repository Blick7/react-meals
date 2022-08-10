import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';

import classes from './HeaderCartButton.module.css';
import { HiShoppingCart } from 'react-icons/hi';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btnAnimation, setButtonAnimation] = useState(false);
  const buttonClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`;

  const numberOfCartItems = ctx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  useEffect(() => {
    setButtonAnimation(true);

    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <HiShoppingCart className={classes.cart} />
      <span>Your Cart</span>
      <span className={classes['goods-amount']}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
