import { useState, useEffect } from 'react'

export const GeneratePass = () => {

    const [password, setPassword] = useState(null);

    useEffect(() => {

        let _datos = {
            "length": 12,
            "includeNumbers": true,
            "includeSymbols": true,
            "includeUppercase": true,
            "excludeSimilar": false
        }

        const apiUrl = 'http://localhost:4000/api/generate';

        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }) 
            .then(response => {
                if(!response.ok) {
                    throw new Error ('Se ha producido un error de conexión')
                }
                return response.json()
            })
            .then(json => {
                setPassword(json);
                console.log(json)
            })
            .catch (error => {
                error.log("Error: ", error)
            })

        }, []);

    return (
        <h1>Pass:</h1>
    )

}