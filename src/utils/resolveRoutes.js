const resolveRoutes = (route) => { //Recibe la ruta otenida de getHash
    if (route.length <=3) { //Si la longitud del arreglo es menor o igual a 3, garantizamos que no excede los 999 personajes de la API
        let validRoute = route === '/' ? route : '/:id'; //Si el valor de route === '/' retorna route, sino, retorna un id
        return validRoute;
    }
    return route;
};

export default resolveRoutes;