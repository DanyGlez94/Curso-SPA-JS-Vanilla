const API = 'https://rickandmortyapi.com/api/character/'; //Acceso a los personajes de la API

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API; //Si el id existe, traelo y concaténalo, si no existe, trae todos los personajes.
    try {
        const response = await fetch(apiURL); //Hace el llamado a apiURL
        const data = await response.json(); //Convertimos response en JSON para hacerlo un objeto iterable.
        return data;
    } catch (error) { 
        console.log('Fetch Error', error);
    };
};

export default getData;