import Search from './assets/Search.png'
import Logo from './assets/logo.png'
import Stroke from './assets/Stroke.png'
import LoginButton from './LoginButton'
import Navigator from './Navigator'
import './MainHeader.css'


const MainHeader = () => (
    <header className="main-header">
            <div className="container">
                <div id="logoWrap">
                    <img className="logo" src={Logo}/>
                </div>
                <div id="researchContainer">
                    <input id="search" type="search" placeholder="Pesquisar produto..."/>
                    <button id="buttonSearch" type="submit"> <img src={Search}/> </button>
                </div>
                <a className="register" href="">Cadastre-se</a>
                <LoginButton/>
                <div className="purchase">
                    <a className="carPurchase" href=""><img src={Stroke} /></a>
                    <a className="numberProduct" href="">2</a>
                </div>
            </div>
            <Navigator/>
    </header>
)


export default MainHeader
