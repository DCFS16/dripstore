import { useEffect, useState } from 'react'
import './CartModal.css'
import {useProducts} from '../../hooks/useProducts'

const CartModalItem = ({id, image, name, price, amount, remove }) => (
    <div>
        <img
            src={image}
            alt={name}
            width={80}
        />
        <p>{name}</p>
        <p>{price}</p>
        <p>x {amount}</p>
        <button onClick={(event) => {
            event.stopPropagation()
            remove(id)
        }}>REMOVER</button>
    </div>
)

const CartModal = ({items,removeItem}) => {
    return (
        <div className="cart-modal">
            <h4>Carrinho</h4>
            
            {items.length === 0 && <p>Sem items no carrinho 😢</p>}
            {items.map(item => (
                <CartModalItem
                    {...item}
                    remove={removeItem}
                />
            ))}
        </div>
    )
}

export default CartModal
