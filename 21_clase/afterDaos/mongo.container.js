//lo que no cambia es el schema y la collection

class mongoContainer{
    constructor(collection,schema){
        //logica para cada daos
        this.moddel = mongoose.model(collection,schema)
    }
    static async connect(){
        await mongoose.coonect(dbConfig.mongodb.uri)
    }
    async getAll(filter={}){
        
            const documents = await this.model.find(filter,{__v:0}).lean()
            return documents
    
    }
    async getById(id){
        const document = await this.model.findOne({_id:id},{__V:0})
        if(!document){
            const message=`resource with id ${id} does not exist in our records`
            throw new HttpError(HTTP_STATUS.NOTFOUND,message)
        }
    }
    async save(item){
        const newDocument = new this.model(item);
        return await newDocument.save()
    }

    async update(id,item){
        const updatedDocument=await this.model.updateOne(
            {_id:id},
            {$set:{
                ...item
            }/* si no tiene se crea con esto */ }
        )
        if(updatedDocument.matchCount){
            const message=`resource whit no found`
        }    
    }
    async delete(){
        
    }

}