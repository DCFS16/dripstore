import { createContext, useReducer } from 'react';
import { cartReducer, initialStateCart } from '../reducers/CartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cartItems, dispatch] = useReducer(cartReducer, initialStateCart);

  return (
    <CartContext.Provider value={{cartItems,dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
