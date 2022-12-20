const firebaseContainer = require('./firebase.container') 

const collection = "users";

class UsersFirebaseDao extends firebaseContainer{
    constructor(){
        super(collection)
    }
}