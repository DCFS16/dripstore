import { useState } from 'react'

import Search from './assets/Search.png'
import Logo from './assets/logo.png'
import Stroke from './assets/Stroke.png'
import LoginButton from './LoginButton'
import Navigator from './Navigator'
import CartModal from './CartModal'
import './MainHeader.css'
import { useEffect } from 'react'


const MainHeader = ({cartItems,handleRemoveCartItem}) => {
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        if (showCart) {
            alert('Carrinho vai abrir!')
        }
    }, [])

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
            {showCart ? <CartModal items={cartItems} removeItem={handleRemoveCartItem} /> : null}
        </header>
    )

}

export default MainHeader
