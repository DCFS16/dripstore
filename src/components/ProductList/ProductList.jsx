import React from "react";

import "./ProductList.css";
import { CardProduct } from "./ProductCard";
import { useFetch } from "../../hooks/useFetch";
import { useCart } from "../../hooks/useCart";



const myArray = Array.from({ length: 10 }, (_, index) => index);

const ProductList = () => {

  const { items, loading, } = useFetch('/products')
  const {dispatch,cartItems} = useCart()
  console.log(cartItems);

  const addCartItem = (product) => {
    console.log(product);
    dispatch({
      type: 'ADD_CART_ITEM',
      item: product
    })
  }
  
  return(
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
          {items.map((item) => (
            <CardProduct
            onClick={() => addCartItem(item)}
            category={item.category}
            name={item.name}
            price={item.price}
            discount={item.discount}
            key={item.id}
            />
          ))}
        </div>
      
    </section>
  </>
)};

export default ProductList;
