const autocannon = require('autocannon');

const {PassThrough}= require('stream');

function run (url){
    const buf =[]
    const outputStream = new PassThrough()

    const inst = autocannon({
        url,
        connections:100,
        duration:20
    })
    autocannon.track(inst,{outputStream})

    outputStream.on('data',data => buf.push(data))
    inst.on('done',function(){
        process.stdout.write(Buffer.concat(buf))
    })

}

console.log('Running all benchmarks in parallel ..... ')


//y creouna ruta a la cual le paso por req.query los casos de prueba
// suponiendo que registra usuarios
// comando run('http://localhost:8080/auth-nobloq?username=dani&passwwword=qwertty123')

// y pongo el test con node benchmark.js
// // y el start "0x server.js"


// para que funcione le damos a start 
// luego en otra terminal el comando curl -X GET "http://localhost:8080/newUser?username=dani&password=asdwe123"
// npm test