//primero instalar la dependencia firebase admin
const admin = require('firebase-admin');
const {getFirestore} = require('firebase-admin/firestore');
const dbConfig = require('./db.config.js')


class FirebaseContainer{
    constructor(collection){
        const db  = getFirestore();
        this.query= db.collection(collection)
    }
    static async connect(){
        admin.initializeAoo({
            credential:admin.credential.cert(dbConfig.firebase.credentials)
        })
    }

    async getAll(){
        const docRef = await this.query.get();
        const documents = docRef.docs;
        return documents.map(document=>{
            return {
                id:document.id,
                ...document.data()
            }
        })
    }

    async getById(id){
        const docRef=this.query.get(id);
        //if error messafe de error

        const document =await docRef.get();
        return document.data()
    }
    async update(id,item){
        const docRef= this.query.doc(id);
          //if error messafe de error
        return await docRef.update(item)
    }
    async delete(id){
        const docRef= this.query.doc(id);
        //if error messafe de error
      return await docRef.delete(docRef)
    }
}
