
function Usuario (id,nombre,contraseña,numCuenta,saldo){
    this.id=parseInt(id);
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.numCuenta= parseInt(numCuenta)
    this.saldo= parseFloat(saldo)
}

let usuarios = []
usuarios.push(new Usuario(1,'Pedro','PedroCapo123',65487841,150))
usuarios.push(new Usuario ( 9,'Ana','Ana4444',65487846,8999))

let formulario=$('.login-form');
const usuario=$('.login-username')
const contraseña=$('.login-password')
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


const URLGET = "script/data.json"

 $.get(URLGET, function (respuesta, estado) {


    
    if(estado=="success"){
        let datos = respuesta;
        console.log(datos)
        console.log(estado)
        localStorage.setItem('usuarios',JSON.stringify(datos))

            }
            
    
    })

formulario.on('submit',validarformulario)
function validarformulario(e){
    e.preventDefault();

let getUsuarios= JSON.parse( localStorage.getItem("usuarios"))
let usuarioActual = getUsuarios.find(x=>x.nombre==usuario.val())
sessionStorage.setItem('usuarioActual',JSON.stringify(usuarioActual))
let contraseñaActual= getUsuarios.find(x=>x.contraseña==contraseña.val())

console.log(usuarioActual)
console.log(usuario.val())
if((usuario.val())== usuarioActual.nombre && contraseña.val()== contraseñaActual.contraseña ){
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        width: 600,
        height: 600,
        title: (`Bienvenido ${usuarioActual.nombre} `),
        showConfirmButton: false,
        timer: 80000
      })

    window.location = './html/operaciones.html'
}
else{ 
    Swal.fire({
    icon: 'error',
    title: 'Solo un error o andas queriendo hacer algo raro?',
    text: 'El usuario/Contraseña ingresado es incorrecto!',
    
  })
}

}   

