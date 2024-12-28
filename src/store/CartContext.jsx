/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: [...state.items.filter((item) => item.id != action.payload)],
    };
  }
  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, {
    items: [],
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  });

  function addItemHandler() {}
  function removeItemHandler() {}

  //return <CartContext.Provider>{children}</CartContext.Provider>; // before react 19
  return <CartContext>{children}</CartContext>;
}

export default CartContext;
