import { createContext, useReducer } from "react";

const cartContextState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "addToCart":
      const existingItemIndex = state.items.findIndex(
        (stateItem) => stateItem.id === payload.id
      );

      const existingItem = state.items[existingItemIndex];
      let updatedItems = state.items;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        console.log("Concatenate");
        updatedItems = state.items.concat(payload);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + payload.price * payload.amount,
      };
    case "removeFromCart":
      return { ...state, items: [...state.items] };
    default:
      return state;
  }
};

const CartContext = createContext(cartContextState);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  const addToCart = (item) => {
    dispatch({ type: "addToCart", payload: item });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "removeFromCart", payload: id });
  };

  const value = {
    ...state,
    addItem: addToCart,
    removeCartItem: removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
