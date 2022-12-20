el objectId esta formado por el unix timestamps de 4 bytes  ramdom value 5 y count 3bytes

moetodos para el object id 


objectId().getTimestamp() me devuelve la hora 

objectId().toString()

objectId().valueOf()

db.usuarios.estimatedDocumentCount()

db.usuarios.CountDocuments({edad:32})


db.coll.find({
    clave:{
        $operador:valor
    }
})

db.usuarios.distinct(pais) te muestra solamente los distintos paises que hay




























