/* tipo de datos primitivos --> incluye string,boolean,number
    ""   ""  ""      ""     --> incluye objectos y arrays   */
/* lo ultimo que saco en 2015 let const y clases */
/* 
declarando objetos */

const persona ={
    nombres:"Jorge",
    edad:29,
    saludar : function (){
        return `hola soy ${this.nombres} y tengo ${this.edad}`//el this se refiere a lo que esta a la izquierda del punto/ hace referencia al contexto del mismo ambito
    }
}

persona.saludar()

/* cualquier clase tiene que empezar siempre con mayuscula */

// class Persona{
//     constructor(){
//         this.nombre = "jorge";
//         this.edad = 24
//     }
// }


// const persona1 = new Persona()

// console.log(persona1)


/* para poder pasarle parametros a mis plantillas */

class Persona{
    constructor(name,age){
        this.nombre = name;
        this.edad = age
    }
    saludar(){
        return `hola soy ${this.nombres} y tengo ${this.edad} años`
    }
}


const persona1 = new Persona("Jorge",29)
const persona2 = new Persona("Camilo",20)
persona1.saludar()
console.log(persona1)
