import { useState } from 'react';
import './Navigator.css';
import { Link } from 'react-router-dom';

const Navigator = () => {
  
    const [active, setActive] = useState('home');
  
  return(
  <nav className="navigator">
    <ul>
      <li>
        <Link
         onClick={() => {setActive('home')}} 
        className={active === 'home' ? 'active-link' : 'default-link'} to="/"
        >Home</Link>
      </li>
      <li>
        <Link 
         onClick={() => {setActive('products')}}
        className={active === 'products' ? 'active-link' : 'default-link'} to="/produtos"
        >Produtos</Link>
      </li>
      <li>
        <Link
         onClick={() => {setActive('categories')}} 
        className={active === 'categories' ? 'active-link' : 'default-link'} to="/categorias"
        >Categorias</Link>
      </li>
      <li>
        <Link 
        onClick={() => {setActive('orders')}}
        className={active === 'orders' ? 'active-link' : 'default-link'} to="/minhas-compras"
        >Meus pedidos</Link>
      </li>
    </ul>
  </nav>
);
}
export default Navigator;