import { createContext, useReducer } from "react";

const cartContextState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "addToCart": {
      const existingItemIndex = state.items.findIndex(
        (stateItem) => stateItem.id === payload.id
      );

      const existingItem = state.items[existingItemIndex];
      let updatedItems = state.items;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        console.log("Concatenate");
        updatedItems = state.items.concat(payload);
      }

      console.log(payload.amount);

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + payload.price,
      };
    }
    case "removeFromCart": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === payload
      );

      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - existingItem.price,
      };
    }
    case "clearCart": {
      return defaultCartState;
    }
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

  const clearCartContent = () => {
    dispatch({ type: "clearCart" });
  };

  const value = {
    ...state,
    addItem: addToCart,
    removeItem: removeCartItem,
    clearCart: clearCartContent,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
