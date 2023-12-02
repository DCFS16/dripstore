import { useEffect, useState } from "react"
import { BASE_API_URL } from "../services/contants.js"

export const useFetch = (endPoint) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_API_URL}${endPoint}`)
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