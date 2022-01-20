import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/:contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header'); //null en caso de no encontrar la página
    const content = null || document.getElementById('content');

    header.innerHTML= await Header(); //Espera a que la función Header se rendirice y la muestra.
}

export default router;