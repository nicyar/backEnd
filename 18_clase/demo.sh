db.coll.insertOne({documento})

db.coll.insertMany([
    {documento1},{documento2}
])


##read

db.coll.findOne({} )#devuelve un documento


db.coll.find({})# devuelve un cursor