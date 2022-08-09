import React from 'react';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const dummy = [
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
];

const Cart = (props) => {
  return (
    <React.Fragment>
      <div className={classes['cart-items']}>
        {dummy.map((item) => {
          return (
            <CartItem
              name={item.name}
              summary={item.summary}
              amount={item.amount}
              price={item.price}
              key={item.id}
            />
          );
        })}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
