import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  

  return (
    <CartContext.Provider value={'teste'}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
