import { useState } from "react";


const UNEXPECTED_ERROR = {
    path: 'general',
    msg: 'Um erro inesperado aconteceu, não foi possível finalizar a operação.'
}

export const useCreateUser = () => {
    const [errors, setErrors] = useState(null)
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)


    const createUser = async (userData) => {
        setLoading(true)

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
          
        try {
            const response = await fetch('http://localhost:3000/api/users', options)
            const result = await response.json()
            if (result.success) {
                setResult(result)
            } else {
                setErrors(result.errors)
            }
        } catch (err) {

            setErrors([UNEXPECTED_ERROR])
        }
        
        setLoading(false)
    }


    return { createUser, result, errors, loading } 
}