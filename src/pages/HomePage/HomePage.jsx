import { useState } from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import { useProducts } from '../../hooks/useProducts'
import './HomePage.css'

const HomePage = () => {
    const {items, loading} = useProducts()
    
    const [cartItems, setCartItems] = useState([])

    console.log({ cartItems })

    const handleRemoveCartItem = (id) => {
        const itemOnCart = cartItems.find(cartItem => cartItem.id === id)

        if (itemOnCart.amount === 1) {
            setCartItems(cartItems.filter(item => item.id !== id))
        } else {
            setCartItems([
                ...cartItems.map(cartItem => cartItem.id === id
                    ? ({...cartItem, amount: itemOnCart.amount - 1})
                    : cartItem
                )
            ])
        }
    }


    const handleAddCartItem = (item) => {
        const itemOnCart = cartItems.find(cartItem => cartItem.id === item.id) 

        console.log({itemOnCart})

        if (itemOnCart) {
            setCartItems([
                ...cartItems.map(cartItem => cartItem.id === item.id
                    ? ({...cartItem, amount: itemOnCart.amount + 1})
                    : cartItem
                )
            ])
        } else {
            setCartItems([
                ...cartItems,
                ({...item, amount: 1 }) 
            ])
        }
    }

    return(
    <>
        <MainHeader cartItems={cartItems} handleRemoveCartItem={handleRemoveCartItem} />
        <h1 className="title"></h1>
        <div className="container">
        {items.map((item) => (
            <div className="product-card">
                <h4>{item.name}</h4> 
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button onClick={() => handleAddCartItem(item)}>
                    Adicionar
                </button>
            </div>            
        )
        )}   
        </div>
    </>
    )

}


export default HomePage
