import { useState, useEffect } from 'react'
import { API_URL } from '../constants'

export const useHighlights = (limit) => {
    const [highlights, setHighlights] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_URL}/highlights`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setHighlights(data.slice(0, limit))
            })
    }, [])
    console.log(highlights)

    return {
        highlights,
        loading
    }
}
