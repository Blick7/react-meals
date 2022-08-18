import React, { useContext, useState } from 'react';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import CartForm from './CartForm';

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
  const [orderFormIsActive, setOrderFormIsActive] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartAddItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 }); // add just 1 item
  };
  const orderIsActive = ctx.items.length > 0;

  const orderHandler = () => {
    setOrderFormIsActive(true);
  };

  const confirmOrderHandler = async (order) => {
    const response = await fetch(
      'https://react-http-67f2d-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          order,
          orderedItems: ctx.items,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('ERROR: ' + response.message);
    }
    setOrderSubmitted(true);
    ctx.clearCart();
  };

  const modalContent = (
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
      {!orderFormIsActive && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClick}>
            Close
          </button>
          {orderIsActive && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
      {orderFormIsActive && (
        <CartForm
          onClose={props.onClick}
          onConfirmOrder={confirmOrderHandler}
        />
      )}
    </React.Fragment>
  );

  const orderSubmittetContent = (
    <React.Fragment>
      <p>Your order is submitted</p>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {!orderSubmitted ? modalContent : orderSubmittetContent}
    </React.Fragment>
  );
};

export default Cart;
