export const GeneratePass = () => {

    let _datos = {
        "length": 12,
        "includeNumbers": true,
        "includeSymbols": true,
        "includeUppercase": true,
        "excludeSimilar": false
    }

    fetch('http://localhost:4000/api/generate', {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }) 
        .then(response => response.json())
        .then(json => console.log(json))

    return (
        <h1>HOLA</h1>
    )

}