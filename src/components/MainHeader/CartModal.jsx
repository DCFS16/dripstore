import { useCart } from "../../hooks/useCart";
import "./CartModal.css";

const CartModalItem = ({ id, image, name, price, amount }) => {
  
  const {dispatch} = useCart()

  const removeCartItem = (id) => {
    dispatch({
      type: 'REMOVE_CART_ITEM',
      id:id
    })
  }

  return(
  <div>
    <img src={image} alt={name} width={80} />
    <p>{name}</p>
    <p>{price}</p>
    <p>x {amount}</p>
    <button
      onClick={(event) => {
        event.stopPropagation();
        removeCartItem(id);
      }}
    >
      REMOVER
    </button>
  </div>
)};

const CartModal = ({ items }) => {
  return (
    <div className="cart-modal">
      <div className="grid-modal">
        <header>
          <h4>Meu Carrinho</h4>
        </header>
        <main>
        {items.length === 0 && <p>Sem items no carrinho 😢</p>}
        {items.map((item) => (
          <CartModalItem {...item}  />
        ))}
        </main>
        <footer>
            <div className="preview-price-container">
                <div>Valor total:</div>
                <h4>R$ 0,00</h4>
            </div>
            <div className="buttons-modal-container">
                <button className="clean-cart-btn" >Esvaziar</button>
                <button className="go-to-cart-btn" >Ver Carrinho</button>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default CartModal;
