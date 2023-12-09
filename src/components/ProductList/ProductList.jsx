import React from "react";

import "./ProductList.css";
import { CardProduct } from "./ProductCard";
import { useProducts } from "../../services/useProducts";

const ProductList = () => {
  const { items }  =  useProducts()

  const getCategory = (product) => {
    if (product.Categories.length > 0) {
      return product.Categories[0].name
    }

    return ''
  }
  
  return (
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M15.5 7.5 20 12m0 0-4.5 4.5M20 12H4"
              />
            </svg>
          </a>
        </div>
        <div className="image-wrapper">
          {items.map((item) => (
            <CardProduct
              category={getCategory(item)}
              name={item.name}
              price={item.price}
              discount={item.discount}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductList;
