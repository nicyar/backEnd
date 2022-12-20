const admin = require("firebase-admin");
const {getFirestore}=require('firebase-admin/firestore')
const serviceAccount = require("./db/firebase/firebase.config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
console.log('conectado a la base de datos')

const makeRequest =async()=>{
    try {
        let id = 5;
        const db = getFirestore();//con esta constante podemos hacer nuestra query
        const query = db.collection("ecommerce");//la base que vamos a usar

        //create
        let doc = query.doc(`${id}`);
        await doc.create(
           {algo:"telefono",algo:"tablet",algo1:"tele"}
        )
        console.log('datos insertados')

    } catch (error) {
        console.log(error)
    }
}
makeRequest();
//antes de poder insertar datos en firebase tambien hay que crear el cloud firestore