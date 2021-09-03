

function Usuario (id,nombre,contraseña,saldo){
    this.id=parseInt(id);
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.saldo=parseFloat(saldo)
}


let usuarios = []

let div2 = document.querySelector('div-2y')
let formulario=document.querySelector('.login-form');
 formulario.addEventListener('submit',validarformulario)
function validarformulario(e){
    e.preventDefault()
let userName = document.querySelector('.login-username').value
let userPassword = document.querySelector('.login-password').value
 


usuarios.push(new Usuario(1,userName,userPassword,50000))
window.localStorage.setItem('usuario',JSON.stringify(usuarios))



var datos = localStorage.getItem('usuarios')

console.log(datos)
console.log(usuarios);



}