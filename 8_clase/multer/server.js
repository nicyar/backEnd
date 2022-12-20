const express = require('express');
const {Router} = express;
const multer = require('multer');
const { dirname } = require('path');

const path = require('path')//lo uso para rutas relativas *

const app = express();
const router = Router();
const PORT = 8080 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)//aca cambie el fieldname por originalname

        /* otra configuracion por si queremos cambiar el nombre 
        const extension = file.mimetype.split("/")[1]
        cb(null,file.filedname+Date.now()+'.'extension); usar template string 
    
        */
    }
})
let upload = multer({storage:storage})
/*  upload.array('files')
    const files = req.files
cambiarian los nombres y la validacion de files
                      */

app.post('/api/file',upload.single('myFile'),(req,res,next)=>{
    const file = req.file
    if(!file){
        const error = new Error('please upload a file');
        return next(error)
    }
     //res.sendFile(path.resolve(__dirname,`./public/uploads${file.filename}`)) * ruta del archivo relativa
    res.send(file)
})

app.use('/',express.static(__dirname + '/public'));

const server = app.listen(PORT,()=>{console.log(`listening the port: ${PORT}`)})

