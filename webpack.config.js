const path = require('path'); //Nos permite acceder a dónde estamos en las carpetas, ya sea local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Necesario para copiar los archivos HTMl del proyecto.

module.exports = {  //Toda la configuración de lo que va a suceder. Módulo para exportar.
    entry: './src/index.js', //Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte el desarrollo.
    output: { //A donde se envía el proyecto estructurado y compilado listo para producción.
        path: path.resolve(__dirname, 'dist'), // A donde se exportará el proyecto.
        filename: 'main.js', //Nombre del archivo final para producción.
    },
    resolve: {
        extensions: ['.js'], //Extensiones que vamos a utilizar.
    },
    module: { //Se crea un módulo con las reglas necesarias que vamos a utilizar
        rules: [
            {//Estructura de babel
                test: /\.js$/,
                exclude: /node_modules/, //Excluimos la carpeta node_modules.
                use: {
                    loader: 'babel-loader', //Loader de babel
                },
            },
        ],
    },
    plugins: [ //Los plugins que usaremos.
        new HtmlWebpackPlugin([
            {
                inject: true, //Como vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html', //Donde se encuentra el template principal.
                filename: './index.html', //El nombre que tendrá el archivo.
            },
        ]),
    ],
};