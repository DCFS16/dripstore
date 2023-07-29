import React from "react";

import ShoesImage from "../../assets/shoes.png";
import "./SpecialOffer.css";

const SpecialOffer = () => (
  <section className="special-offer">
    <div className="shoes-image-wrapper">
      <div className="shoes">
        <img className="shoes-image" src={ShoesImage} />
      </div>
    </div>

    <div className="special-offer-text">
      <h4 className="title">Oferta especial</h4>
      <h2 className="title">Air Jordan edição de colecionador</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip
      </p>
      <button>Ver Oferta</button>
    </div>
  </section>
);

export default SpecialOffer;
