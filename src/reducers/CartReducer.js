


const initialStateCart = []


const cartReducer = (cartItems, action) => {
    switch (action.type) {
        case 'REMOVE_CART_ITEM':
            const id = action.id;
            const itemToRemove = cartItems.find((cartItem) => cartItem.id === id);

            if (itemToRemove.amount === 1) {
                return cartItems.filter((item) => item.id !== id);
            } else {
                return cartItems.map((cartItem) =>
                    cartItem.id === id
                        ? { ...cartItem, amount: itemToRemove.amount - 1 }
                        : cartItem
                );
            }
        
        case 'ADD_CART_ITEM':
            const itemToAdd = action.item;
            const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

            if (existingItem) {
                return cartItems.map(cartItem => cartItem.id === itemToAdd.id
                    ? ({...cartItem, amount: existingItem.amount + 1})
                    : cartItem
                );
            } else {
                return [
                    ...cartItems,
                    {...itemToAdd, amount: 1 }
                ];
            }

        default:
            return cartItems;
    }
};

export {cartReducer,initialStateCart}

