import Search from './assets/Search.png'
import Logo from './assets/logo.png'
import Stroke from './assets/Stroke.png'
import LoginButton from './LoginButton'
import Navigator from './Navigator'
import './MainHeader.css'


const MainHeader = () => (
    <header className="main-header">
            <div className="container">
                <div id="logo">
                    <img className="logo" src={Logo}/>
                </div>
                <div id="containerPesquisa">
                    <input id="barraPesquisa" type="search" placeholder="Pesquisar produto..."/>
                    <button id="btnPesquisa" type="submit"> <img src={Search}/> </button>
                </div>

                <a className="cadastro" href="">Cadastre-se</a>
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
