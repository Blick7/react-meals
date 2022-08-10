import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'Add_ITEM') {
    return { items: state.items.concat(action.item), amount: state.amount++ };
  }

  return {
    items: [],
    amount: 0,
  };
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    items: [],
    amount: 0,
  });

  const addItemHandler = (item) => {
    dispatchCartState({ type: 'Add_ITEM', item });
    console.log(cartState);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        amount: cartState.amount,
        addItem: addItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
