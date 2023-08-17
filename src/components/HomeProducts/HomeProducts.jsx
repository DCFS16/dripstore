import { useProducts } from "../../hooks/useProducts"
import { HomeProductsItem } from "./HomeProductsItem"

export const HomeProducts = () => {
    const {products, loading} = useProducts(20)

    return(
        <div className="container">
            {products.map(product => 
                <HomeProductsItem {...product} />)}
        </div>
    )
}
