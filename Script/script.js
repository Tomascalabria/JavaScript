function Usuario (id,nombre,contraseña,numCuenta,saldo){
    this.id=parseInt(id);
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.numCuenta= parseInt(numCuenta)
    this.saldo= parseFloat(saldo)
}
let usuarios = []


let darkMode = $('.screen__mode-dark')
let lightMode=$('.screen__mode-light')
let body=$('body')
let contenedorform = $('.contenedor-form')
let box = $('.box')
box.hide()

darkMode.on('click',dark)
lightMode.on('click',light )

function dark(){

    body.removeClass()
}
function light (e){
    e.preventDefault();
    
    body.attr('class','body')
    
}
// setTimeout(() => {
//     contenedorform.css('display','none')
//     box.fadeIn('slow');
    
    
         
//     setTimeout(() => {
        
//         contenedorform.css('display','block')
//         box.hide('slow')
    
    
//     },5000 );


// }, 2000);





let formulario=$('.login-form');
 formulario.on('submit',validarformulario)
function validarformulario(e){
    e.preventDefault()

var datos = localStorage.getItem('usuarios')

console.log(datos)
console.log(usuarios);


var userName = $('.login-username').value
var userPassword = $('.login-password').value


const URLGET = "script/data.json"

$.get(URLGET, function (respuesta, estado) {


    console.log(respuesta)
    console.log(estado)
    if(estado=="success"){
        let datos = respuesta;
        console.log(datos)
        for (const data of datos){
       

         
        }
    }


 
   

})
}