import './HomeProductsItem.css'

export const HomeProductsItem = ({ name, price, discount, catogory }) => (
    <div className="product-card-item">
        <p>{catogory}</p>
        <h3>{name}</h3>
        <p>R$ {price}</p>
        <p>{discount} %</p>
        <img src="https://user-images.githubusercontent.com/126329008/260232285-88b1a4f0-c554-419e-97f9-e56ae8dd32ca.png" alt="" />
    </div>
)
