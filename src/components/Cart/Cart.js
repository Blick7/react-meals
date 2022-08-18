import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

import classes from './Cart.module.css';
// const dummy = [
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
// ];

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.amount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartAddItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 }); // add just 1 item
  };
  const orderIsActive = ctx.items.length > 0;
  console.log(orderIsActive);
  return (
    <React.Fragment>
      <div className={classes['cart-items']}>
        {ctx.items.map((item) => {
          return (
            <CartItem
              name={item.name}
              summary={item.summary}
              amount={item.amount}
              price={item.price}
              key={item.id}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartAddItemHandler.bind(null, item)}
            />
          );
        })}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>
          Close
        </button>
        {orderIsActive && <button className={classes.button}>Order</button>}
      </div>
    </React.Fragment>
  );
};

export default Cart;
