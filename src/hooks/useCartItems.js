import { useEffect, useState } from "react"
import { BASE_API_URL } from "../contants"

const useCartItems = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_API_URL}/cart`)
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setItems(data)
      })
  }, [])

  return {
    loading,
    items
  }
}

export default useCartItems
