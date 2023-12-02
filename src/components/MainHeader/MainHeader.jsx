import { useState } from 'react'
import Search from './assets/Search.png'
import Logo from './assets/logo.png'
import Stroke from './assets/Stroke.png'
import LoginButton from './LoginButton'
import {Navigator} from './Navigator'
import './MainHeader.css'
import { useEffect } from 'react'
import CartModal from './CartModal'
import { useCart } from '../../hooks/useCart'

const MainHeader = () => {
    const [showCart, setShowCart] = useState(true)
    const { cartItems } = useCart()
    
    
    

    useEffect(() => {
        const handleDocumentClick = () => {
            setShowCart(false)
        }

        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])


    const handleClickCart = (event) => {
        event.stopPropagation()
        event.preventDefault()
        setShowCart(!showCart)
    }

    const handleRemoveCartItem = (id) => {
        dispatch({
            type: 'REMOVE_CART_ITEM',
            id:id
        })
    }

    return (
        <header className="main-header">
            <div className="container">
                <div id="logoWrap">
                    <img className="logo" src={Logo} />
                </div>
                <div id="researchContainer">
                    <input
                        id="search"
                        type="search"
                        placeholder="Pesquisar produto..."
                    />
                    <button
                        id="buttonSearch"
                        type="submit"
                    >
                        <img src={Search} />
                    </button>
                </div>
                <a className="register" href="">Cadastre-se</a>
                <LoginButton />
                <a className="purchase" onClick={handleClickCart}>
                    <span className="carPurchase" >
                        <img src={Stroke} />
                    </span>
                    <span className="numberProduct">{cartItems.length}</span>
                </a>
            </div>
            <Navigator />
            {showCart ? <CartModal items={cartItems}  /> : null}
        </header>
    )

}

export default MainHeader

