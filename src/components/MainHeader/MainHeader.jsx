import { useState } from 'react'

import Search from './assets/Search.png'
import Logo from './assets/logo.png'
import Stroke from './assets/Stroke.png'
import LoginButton from './LoginButton'
import Navigator from './Navigator'
import CartModal from './CartModal'
import './MainHeader.css'
import { useEffect } from 'react'


const MainHeader = () => {
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
        setShowCart(!showCart)
    }

    return (
        <header className="main-header">
                <div className="container">
                    <div id="logoWrap">
                        <img className="logo" src={Logo}/>
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
                            <img src={Search}/>
                        </button>
                    </div>
                    <a className="register" href="">Cadastre-se</a>
                    <LoginButton/>
                    <div className="purchase" onClick={handleClickCart}>
                        <a className="carPurchase">
                            <img src={Stroke} />
                        </a>
                        <a className="numberProduct">2</a>
                    </div>
                </div>
                <Navigator/>
                {showCart ? <CartModal /> : null}
        </header>
    )
}


export default MainHeader
