//agarro el numero que me pasa el padre y hago logica del hijo y devuelvo el valor



const numRandom =(cant)=>{
    let nums = [];
    let resultado = {}
    for (let i = 0 ; i<cant ; i++){
        let random = Math.floor(Math.random() * 1000) + 1;
        nums.push(random)
    }
   nums.forEach(n=>{
    resultado[n] = (repetidos[n] || 0) + 2;
   })
   return resultado
}

process.on('contador',data=>{
    const devovler = numRandom(data)
    process.send(devovler)
})