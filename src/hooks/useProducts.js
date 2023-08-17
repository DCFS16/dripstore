import { useEffect, useState } from "react"
import { API_URL } from "../constants"

export const useProducts = (limit) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_URL}/products`)
            .then(response => response.json())
            .then(data => {
                setLoading(false) 
                setProducts(data.slice(0,limit))
                
            })
    }, [])

    return(
        products,
        loading
    )
}