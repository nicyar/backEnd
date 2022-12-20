
const express = require('express');
const app = express();
const os = require('os');
const cluster = require('cluster');
/* const args = require('minimist')(process.argv.slice(2),{
    default:{
        PORT:8080,
        modo:'FORK'
    },
    alias:{
        p:'PORT',
        m:'modo'
    }
}) */

const PORT = process.argv[2] || 8080;
/* const PORT = args.PORT */
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.get('/info',(req,res)=>{
    const workers = os.cpus().length
    res.send(`numeros de procesadores ${workers} --${PORT}`)
})
const modo = process.argv[3] === 'CLUSTER';



if (modo && cluster.isPrimary) {
    const cpus = os.cpus.length;
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    cluster.on('exit',(worker,code)=>{
        console.log('worker',worker.process.pid,'exit - ',new Date().toLocaleString());
        cluster.fork() //si se cae el proceso se vuelve a crear automaticamente
    })
}else{
    const running = app.listen(PORT, () => {
        console.log(`${process.pid} => server is runing in ${PORT} in mod FORK`);
    })
}
