const getHash = () => {
    console.log(location.hash);
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash;

//location: accedemos a un elemento del navegador con ese nombre.
//hash: obtenemos el hash en el que se encuentra.
//location.hash imprimiría algo así #/1/, y nosotros solo necesitamos el número, por lo que usamos slice.
//slice: eliminamos el primer elemento.
//toLacaleLowerCase: regresa el contenido en minúsculas.
//split('/')[1]: convertimos el string en arreglo, y le decimos que elimine los / y que queremos acceder a la posición 1. Obtendríamos esto ['','1','']
// || '/': si no encuentra la ruta, solo manda el /, lo cuál es la raíz del proyecto.