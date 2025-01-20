export const generateUser = async () => {
    const url = 'http://localhost:4000/api/users/generate-user';
    
    try {
        const response = await fetch(url, {
            method:'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        if(!response.ok) {
            throw new Error ('Se ha producido un error en la conexión');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}