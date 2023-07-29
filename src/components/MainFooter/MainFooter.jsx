import './MainFooter.css'
import LogoFooter from './assets/logo.svg'
import IconMidia from './assets/icons.svg'

const MainFooter = () => ( 
    <footer className='main-footer'>
        <div className='main-footer-content'>
            <div className='full-column'>
                <img id='logo' src={LogoFooter} />
                <p id='p-footer1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <img  id='icons' src={IconMidia} alt="" />
            </div>
            <div className='colunm'> 
                <h4 id='h-footer2'>Informação</h4>
                <a href="">Sobre Drip Store</a>
                <a href="">Segurança</a>
                <a href="">Wishlist</a>
                <a href="">Blog</a>
                <a href="">Trabalhe conosco</a>
                <a href="">Meus pedidos</a>
            </div>
            <div className='colunm'>
                <h4 id='h-footer3'>Categorias</h4>
                <a href="">Camisetas</a>
                <a href="">Calças</a>
                <a href="">Bonés</a>
                <a href="">Headphones</a>
                <a href="">Tênis</a>
            </div>
            <div className='colunm full-column'>
                <h4 id='h-footer4'>Contato</h4>
                <p id='p-footer4'>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p id='n-footer4'>(85) 3051-3411</p>
            </div>
        </div>
        <hr id='line' />
       <div className='copy'> <span>@ 2022 Digital College</span> </div>
    </footer>
)

export default MainFooter