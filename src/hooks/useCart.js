import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  if (!CartContext) {
    throw new Error('O contexto CartContext não foi encontrado.');
  }

  return { cartItems, dispatch };
};