const firebaseConfig= require('./firebase.config.js')
const config = require('')
 module.exports={
    mongodb:{
        //uri:'copio la url de conexion de comongo'
    },
    firebase:{
        /* copio la de cuentas de servicio   */
        credentials:firebaseConfig
    }
}