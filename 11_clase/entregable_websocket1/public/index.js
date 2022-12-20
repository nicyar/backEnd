const socket = io()

const form = document.querySelector('#form-chat');
const prod = document.getElementById("productos");


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const mensaje= document.querySelector('#mensaje').value
    const nombre = document.querySelector('#nombre').value
    socket.emit('new-message',{nombre,mensaje});
    mensaje.value="";
})

socket.on('chat-message',mensaje =>{
    const html = mensaje.map((element) => {
        return`
        ${element.nombre} => ${element.mensaje} -[<span class="success">${element.hora}</span>]
        <br>`;
    }).join("\n");
    document.querySelector('#chat-box-message').innerHTML=html;
})
socket.on('products',products=>{
    console.log(products)
    fetch('productos.hbs')
    .then((data) =>data.text())
    .then((serverTemplate) =>{
        const template = Handlebars.compile(serverTemplate);
        const html = template({products});
        prod.innerHTML = html;
    })  
})