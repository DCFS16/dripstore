import "./ProductList.css";
import Shoesimage from "../ProductList/assets/ProductListShoe.png";


export const cardProduct = () => {
  return (
    <div className="shoes-image-wrapper">
      <div className="shoes">
        <img className="shoes-image" src={Shoesimage} />
      </div>

      <div className="product-info">
        <h4 className="tipe">Tênis</h4>
        <h2 className="title">K-Swiss V8 - Masculino</h2>
        <h3 className="price">
          <s>R$200</s>R$100
        </h3>
      </div>
    </div>
  );
};
