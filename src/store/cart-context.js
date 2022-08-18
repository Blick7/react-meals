import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'Add_ITEM') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    const totalAmount = state.amount + action.item.price * action.item.amount;

    let cartItems;

    if (existingItem) {
      const cartItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      cartItems = [...state.items];
      cartItems[existingItemIndex] = cartItem;
    } else {
      cartItems = state.items.concat(action.item);
    }

    return { items: cartItems, amount: totalAmount };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    const totalAmount = state.amount - existingItem.price;

    let cartItems;

    if (existingItem.amount === 1) {
      cartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const cartItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      cartItems = [...state.items];
      cartItems[existingItemIndex] = cartItem;
    }

    return { items: cartItems, amount: totalAmount };
  }

  if (action.type === 'CLEAR_CART') {
    return { items: [], amount: 0 };
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
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: 'REMOVE_ITEM', id });
  };

  const clearCartHandler = () => {
    dispatchCartState({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        amount: cartState.amount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
