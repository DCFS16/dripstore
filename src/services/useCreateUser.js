import { useState } from "react";


export const useCreateUser = () => {
    const [errors, setErrors] = useState(null)
    const [result, setResult] = useState(null)


    const createUser = async (userData) => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
          
        try {
            const response = await fetch('http://localhost:3000/api/users', options)
            const result = await response.json()
            setResult(result)
        } catch (err) {
            setErrors(err)
        }

    }


    return { createUser, result, errors } 
}