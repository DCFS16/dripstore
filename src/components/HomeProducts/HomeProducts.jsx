import { useProducts } from "../../hooks/useProducts"
import { HomeProductsItem } from "./HomeProductsItem"

export const HomeProducts = () => {
    const {products, loading} = useProducts(12)

    return(
        <div className="container">
            {products.map(product => 
                <HomeProductsItem key={product.id} {...product}  />
            )}
        </div>
    )
}
