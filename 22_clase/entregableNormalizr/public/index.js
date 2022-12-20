const socket = io();

const nombre = document.getElementById('nombre').value()
const apellido = document.getElementById('apellido').value();
const alias = document.getElementById('alias').value();
const email = document.getElementById('email').value();
const avatar = document.getElementById('avatar').value();
const menssage = document.getElementById('text').value();
const messagesForm = document.getElementById('chatForm').value();

messagesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const  arr = {
        author:{
            id:socket.id,
            alias,
            email,
            avatar,
            nombre,
            apellido
        },
        text:menssage
    }
    console.log(err)
    socket.emit('item', arr); 
    socket.on('msj',msj=>{
        const html = msj.map((e)=>{
            return`
                ${e.author.nombre}=> ${e.menssage}
            `
        }).join("\n")
        document.querySelector('#chat-box-message').innerHTML=html;
    })
  
});
