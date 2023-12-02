import React from "react";

import "./ProductList.css";
import { CardProduct } from "./cardProduct";

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const ProductList = () => (
  <>
    <section className="product-list">
      <div className="products-page">
        <h1 className="section-name">Produtos em alta</h1>
        <a className="products-list-all" href="">
          Ver Todos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="19"
            fill="none"
          >
            <path
              stroke="#C92071"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M15.5 7.5 20 12m0 0-4.5 4.5M20 12H4"
            />
          </svg>
        </a>
      </div>
      <div className="image-wrapper">
        {myArray.map((item) => (
          <CardProduct />
        ))}
      </div>
    </section>
  </>
);

export default ProductList;
