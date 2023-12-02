import "./ProductList.css";
import Shoesimage from "../ProductList/assets/ProductListShoe.png";

export const CardProduct = ({ category, name, price, discount,onClick }) => {
  
  

  return (
    <div className="shoes-image-wrapper">
      <div className="shoes">
        <img className="shoes-image" src={Shoesimage} />
      </div>

      <div className="product-info">
        <h4 className="tipe">{category}</h4>
        <h2 className="title">{name}</h2>
        <h3 className="price">
          {discount ? (
            <>
              <s>R$200</s> R${price}
            </>
          ) : (
            `R$${price}`
          )}
        </h3>
      </div>
      <button onClick={onClick}>add cart</button>
    </div>
  );
};
