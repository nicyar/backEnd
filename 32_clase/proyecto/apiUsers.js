const mongoose = require('mongoose');

class Users{
    constructor(DB,model){
        this.DB=DB;
        this.model=model;
    }

    async save(person){
        const newDocument = new this.model(person);
        return await newDocument.save()
    }
}

module.exports=Users;