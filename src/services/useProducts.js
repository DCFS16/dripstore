import { useEffect, useState } from "react"

export const useProducts = () => {
    const [loading, setLoading ] = useState(true)
    const [items, setItems ] = useState([])
    const [error, setError ] = useState(null)

    const loadProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products')
            const { products } = await response.json()
            
            console.log(products)
            setItems(products)
        } catch (err) {
            setError(err)
    
        }
    
        setLoading(false)
    }

    useEffect(() => {
        loadProducts()
    }, [])


    return { items, loading, error }
}
