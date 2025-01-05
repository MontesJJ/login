export const generatePass = async () => {     

    let _datos = {
        "length": 12,
        "includeNumbers": true,
        "includeSymbols": true,
        "includeUppercase": true,
        "excludeSimilar": false
    }

    const apiUrl = 'http://localhost:4000/api/passwords/generate';
    
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }) 
        
        if(!response.ok) {
            throw new Error ('Se ha producido un error de conexión')
        }
        
        const data = await response.json();
        return data;
     
    } catch (error) {
        console.error("Error:", error);
        return null;
    }

}