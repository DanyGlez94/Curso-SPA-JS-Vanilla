import router from './routes'; 

window.addEventListener('load', router); // Una vez la carga de la página sucedió, ejecuta la función router, que trajimos desde otro archivo.
window.addEventListener('hashchange', router); //Ejecuta la funcón router cuando hay un cambio en el hash.