let admin = (req,res,next) => {

    let valor="true"
    
    let administrador
    if (valor == "true") {
        administrador = true;
        next();
    }
    else {
        administrador = false
        res.send('PERSONA NO AUTORIZADA')
    }
    return administrador
}

module.exports=admin;