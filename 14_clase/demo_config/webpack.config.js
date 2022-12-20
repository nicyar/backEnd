const path = require('path')
const nodeExternals = require('webopack-node-externals');//para que sean compatibles el webpack con express *
//aca se pone toda la configuracion de los 7 puntos mas importantes
module.exports = {
    mode: 'production',
    entry: './index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),//la ruta aca tiene que ser absoluta
        filename: 'app.bundle.js'//este es el archivo que se va a generar de salida
    },
    externals:[nodeExternals()],//* con esto empaqueta sikanebte kis archivos de nuestro proyecto el index y el file sin el node_modules
    module:{
    rules: [
        {
            test: /\.txt$/ //aca lo que vamos a configurar es podes abrir archivos con la extension txt/ lo archivos que debe transformar y instalamos raw-loader 
            /* aqui ragex--> expresiones regulares:  para la expresiones que terminen en txt usamos el loader de abajo  */
            , use: 'raw-loader'      //los loader que debe usar
        },

        //{},loader 1
        //{},loader 2
        //{},loader 3
    ]
}   

}