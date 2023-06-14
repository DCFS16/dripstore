import { products } from './database.js';

function createProductList(products)
{
  const mainElement = document.createElement('div');
  mainElement.classList.add('product-list');
  mainElement.style.display = 'grid';
  mainElement.style.gridTemplateColumns = 'repeat(3, 1fr)';
  mainElement.style.gridGap = '20px';

  products.forEach(product =>
  {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <div class="product__image">
        <div class="product__discount">30% OFF</div>
        <img src="${product.imageUrl}" alt="">
      </div>
      <div class="product__section">
        <div>${product.name}</div>
        <div class="product__price">
          <del>$${product.originalPrice}</del>
          <div class="product__price--discounted">$${product.discountedPrice}</div>
        </div>
      </div>
    `;

    mainElement.appendChild(productElement);
  });

  return mainElement;
}

const productListElement = createProductList(products);
document.body.appendChild(productListElement);

