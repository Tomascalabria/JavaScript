

function Usuario (id,nombre,contraseña,saldo){
    this.id=parseInt(id);
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.saldo=parseFloat(saldo)
}

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
setTimeout(() => {
    contenedorform.css('display','none')
    box.fadeIn('slow');
    
    
         
    setTimeout(() => {
        
        contenedorform.css('display','block')
        box.hide('slow')
    
    
    },5000 );


}, 2000);



let usuarios = []


let formulario=$('.login-form');
 formulario.on
function validarformulario(e){
    e.preventDefault()
let userName = $('.login-username').value
let userPassword = $('.login-password').value
 


usuarios.push(new Usuario(1,userName,userPassword,0))
window.localStorage.setItem('usuario',JSON.stringify(usuarios))



var datos = localStorage.getItem('usuarios')

console.log(datos)
console.log(usuarios);



}