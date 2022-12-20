const mongoose = require('mongoose');

class Chat{
    constructor(db,model){
       this.db =db;
       this.model= model;

    }
    async read(filter = {}){
        const documents = await this.model.find(filter, { __v: 0 }).lean();
        return documents;
    }
    async save(item){
        const newDocument = new this.model(item);
        return await newDocument.save();
    }
    async delete(id){
        return await this.model.deleteOne({ _id: id });
    }
}
module.exports=new Chat();