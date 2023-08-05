import { useEffect, useState } from 'react'
import './CartModal.css'
import useCartItems from '../../hooks/useCartItems'

const CartModalItem = ({ avatar, name, price }) => (
    <div>
        <img
            src={avatar}
            alt={name}
            width={80}
        />
        <p>{name}</p>
        <p>{price}</p>
    </div>
)

const CartModal = () => {
    const { items, loading } = useCartItems()

    return (
        <div className="cart-modal">
            <h4>Carrinho</h4>
            {loading ? 'Loading...' : null}

            {items.map(item => (
                <CartModalItem
                    avatar={item.avatar}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default CartModal
