const fs = require('fs');

class MensajeApi{
    constructor(){
        this.mensajes=[]
    }
    guardarMsg(data){
            const newMsg={
                ...data,
                hora:new Date().toLocaleString()
            }
            this.mensajes.push(newMsg,);
        fs.writeFileSync('./Mensjes.txt',JSON.stringify(this.mensajes,null,2))
    }
    mostrarMsgs(){
        return [...this.mensajes]
    }
}

module.exports=MensajeApi;
