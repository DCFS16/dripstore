import { products } from './database.js';

function createProductList(products) {
  const mainElement = document.createElement('div');
  mainElement.classList.add('product-list');

  // Define a largura das colunas e a altura das linhas
  mainElement.style.display = 'grid';
  mainElement.style.gridTemplateColumns = 'repeat(3, 1fr)';
  mainElement.style.gridGap = '20px';
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('div');
    imageElement.classList.add('product__image');

    const discountElement = document.createElement('div');
    discountElement.classList.add('product__discount');
    const discountText = document.createTextNode('30% OFF');
    discountElement.appendChild(discountText);
    imageElement.appendChild(discountElement);

    const imgElement = document.createElement('img');
    imgElement.src = product.imageUrl;
    imgElement.alt = '';
    imageElement.appendChild(imgElement);

    productElement.appendChild(imageElement);

    const sectionElement = document.createElement('div');
    sectionElement.classList.add('product__section');

    const nameElement = document.createElement('div');
    nameElement.classList.add('product__name');
    const nameText = document.createTextNode(product.name);
    nameElement.appendChild(nameText);
    sectionElement.appendChild(nameElement);

    const priceElement = document.createElement('div');
    priceElement.classList.add('product__price');
    const originalPriceElement = document.createElement('del');
    originalPriceElement.classList.add('product__price--original');
    const originalPriceText = document.createTextNode(`$${product.originalPrice}`);
    originalPriceElement.appendChild(originalPriceText);
    priceElement.appendChild(originalPriceElement);
    const discountedPriceElement = document.createElement('div');
    discountedPriceElement.classList.add('product__price--discounted');
    const discountedPriceText = document.createTextNode(`$${product.discountedPrice}`);
    discountedPriceElement.appendChild(discountedPriceText);
    priceElement.appendChild(discountedPriceElement);
    sectionElement.appendChild(priceElement);

    productElement.appendChild(sectionElement);

    mainElement.appendChild(productElement);
  });

  return mainElement;
}


const productListElement = createProductList(products);

document.body.appendChild(productListElement);

