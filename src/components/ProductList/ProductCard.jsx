import "./ProductList.css";
import thumbnail from "../ProductList/assets/ProductListShoe.png";


export const CardProduct = ({ category, name, price, discount, image }) => {

  
  return (
    <div className="shoes-image-wrapper">
      <div className="shoes">
        <img className="shoes-image" src={image || thumbnail} />
      </div>

      <div className="product-info">
        <h4 className="tipe">{category}</h4>
        <h2 className="title">{name}</h2>
        <h3 className="price">
          {discount
            ? <><s>R$ {price}</s>R$ {+price - +discount}</>
            : <>R$ {price}</>
          }
        </h3>
      </div>
    </div>
  );
};
