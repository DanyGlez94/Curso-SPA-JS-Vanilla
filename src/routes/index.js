import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header'); //null en caso de no encontrar la página
    const content = null || document.getElementById('content');

    header.innerHTML = await Header(); //Espera a que la función Header se renderice y la muestra.
    let hash = getHash(); //Obtenemos el hash o la seccion donde se está moviendo.
    console.log(hash);
    let route = await resolveRoutes(hash); //Le mandamos el hash
    console.log(route); 
    let render = routes[route] ? routes[route] : Error404; //Routes es la estructura, y route es lo que obtenemos después del hash y luego del resolve, si la ruta no existe, muestra error 404.
    content.innerHTML = await render();
};

export default router;