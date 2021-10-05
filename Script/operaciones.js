

let usuarios = []
usuarios= JSON.parse( localStorage.getItem('usuarios'))

let titloH2 = document.querySelector('.title')
let bannerTransferencias = document.querySelector('.link-two')
let bannerDepositos = document.querySelector('.link-three')
let bannerSaldo = document.querySelector('.link-one ')
let contenedorBanners = document.querySelector('.contenedor')
let contenedorOperaciones =document.querySelector('.contenedor-operaciones')


let btnAtras=document.querySelector('.boton-atras')

let usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"))
console.log(usuarioActual)
let saldo = (usuarioActual.saldo)
console.log(saldo)




function consultaSaldo (e){
    
    e.preventDefault();
    
    contenedorBanners.remove()
    titloH2.remove()
    
    let h2Saldo= document.createElement('h2')
    h2Saldo.setAttribute('class','title')
    h2Saldo.textContent='CONSULTA SALDO'
    document.querySelector('header').appendChild(h2Saldo)

    let contenedorOperacionSaldo =document.createElement('div')
    contenedorOperacionSaldo.setAttribute('class','contenedor-saldo')
    contenedorOperaciones.appendChild(contenedorOperacionSaldo)

    let operacionSaldo1=document.createElement('p')
    operacionSaldo1.setAttribute('class','operacion-saldo-1')
    operacionSaldo1.textContent=`Cuenta N° ${usuarioActual.numCuenta} saldo es:   `

    
    contenedorOperacionSaldo.appendChild(operacionSaldo1)
    if (saldo<0){
        operacionSaldo1.textContent=" "
        operacionSaldo1.style.background="white"
  
        
        
    }
    
    let operacionSaldo2=document.createElement('p')
    operacionSaldo2.setAttribute('class','operacion-saldo-2')
    if (saldo<0){
        operacionSaldo2.textContent= 'Error. No tiene fondos en su cuentas'
        operacionSaldo2.style.color = 'red';
        operacionSaldo2.style.background="white"
    

    }
    else if (saldo>=0){
    operacionSaldo2.textContent=  ( `$${saldo} Pesos  `);
    
    }
    // operacionSaldo2.textContent=`${window.localStorage.getItem.toString(usuarios.id)} PESOS` la idea seria obtener el dinero desde LocalStorage
    operacionSaldo1.appendChild(operacionSaldo2)
    





 

   
    function irAtras(e){
        document.location.reload()
        }
        
        btnAtras.addEventListener('click',irAtras)
        

   
    }
function menuTransferencia(){  // borrar el banner de opciones y generar el formulario
    
    contenedorBanners.remove()
    titloH2.remove()
    let h2Transferencia= document.createElement('h2')
    h2Transferencia.setAttribute('class','title')
    h2Transferencia.textContent='Realizar Transferencia'
    document.querySelector('header').appendChild(h2Transferencia)

    let contenedorOperacionTransferencia =document.createElement('div')
    contenedorOperacionTransferencia.setAttribute('class','contenedor-transferencia')
    contenedorOperaciones.appendChild(contenedorOperacionTransferencia)
    // contenedor del formulario transferencias
    let formContainer = document.createElement('div')
    formContainer.setAttribute('class','container')
    contenedorOperacionTransferencia.appendChild(formContainer)
    formContainer.addEventListener('submit',transferir)
    formContainer.addEventListener('submit',validarTransferencia)

    let h2Formulario =document.createElement('h2')
    h2Formulario.setAttribute('class','form-h2')
    formContainer.appendChild(h2Formulario)

    let aFormulario =document.createElement('a')
    aFormulario.textContent="Transferencias"
    aFormulario.setAttribute('class','a-formulario')
    h2Formulario.appendChild(aFormulario)

    let divFormulario = document.createElement('form')
    divFormulario.setAttribute('class','form')
    formContainer.appendChild(divFormulario)

// Palabra clave para realizar la diferencia
    let inputUsuario = document.createElement('input')
    inputUsuario.setAttribute('type','text')
    inputUsuario.setAttribute('class','input')
    inputUsuario.setAttribute('placeholder','Palabra Clave')
    divFormulario.appendChild(inputUsuario)

    let inputMonto=document.createElement('input')
    inputMonto.setAttribute('type','number')
    inputMonto.setAttribute('class','input input-monto')

    inputMonto.setAttribute('placeholder','Monto a transferir' )
    divFormulario.appendChild(inputMonto)

    let divOpciones =document.createElement('div')
    divOpciones.setAttribute('class','form-group')
    divFormulario.appendChild(divOpciones)

    let labelFormulario=document.createElement('div')
    labelFormulario.setAttribute('for','motivo')
    labelFormulario.textContent=('Elija un motivo de transferencia')
    divOpciones.appendChild(labelFormulario)

    let selectFormulario =document.createElement('select')
    selectFormulario.setAttribute('id','form_motivo')
    selectFormulario.setAttribute('name','motivo')
    selectFormulario.setAttribute('class','form_motivo')
    selectFormulario.setAttribute('required','required')
    selectFormulario.setAttribute('data-error','Especifique el motivo ')
    divOpciones.appendChild(selectFormulario)
    
    let opcionesLabel=document.createElement('option')
    opcionesLabel.setAttribute('id',"")
    opcionesLabel.setAttribute('selected','disabled')
    opcionesLabel.textContent='--Seleccione motivo --'
    selectFormulario.appendChild(opcionesLabel)

    let opciones2=document.createElement('option')
    opciones2.setAttribute('id',"option")
    opciones2.textContent="Haberes"
    selectFormulario.appendChild(opciones2)

    let opciones3=document.createElement('option')
    opciones3.setAttribute('id',"option")
    opciones3.textContent="Honorarios"
    selectFormulario.appendChild(opciones3)

    let opciones4=document.createElement('option')
    opciones4.setAttribute('id',"option")
    opciones4.textContent="Gastos"
    selectFormulario.appendChild(opciones4)


    let inputSubmit =document.createElement('input')
    inputSubmit.setAttribute('type','submit')
    inputSubmit.setAttribute('value','Transferir' )
    divFormulario.appendChild(inputSubmit)


    function transferir (e){
      
        e.preventDefault()

        saldo
        
      let saldo= saldo-=(inputMonto.value)
      saldo;
        
            Swal.fire({
                position: 'center',
                icon: 'success',
                width: 600,
                height: 600,
                title: (`Gracias ${usuarioActual.nombre} ha transferido $ ${inputMonto.value}PESOS, su saldo restante es $${saldo}PESOS`),
                showConfirmButton: false,
                timer: 6000
              })
    }
    
    
    function validarTransferencia(e){
        e.preventDefault();
        if (localStorage<0){
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo sentimos no cuenta con los fondos suficientes',
            
          })
           if (saldo<=0){
              transferir();
          }
       

        else (inputMonto == null || inputMonto== NaN || inputMonto==" "); {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El monto a transferir esta en blanco!',
                
              })

        }
        
    }
}
    function irAtras(){
        document.location.reload()
        }
        
        btnAtras.addEventListener('click',irAtras)
}


function menuDepositos(){  // borrar el banner de opciones y generar el formulario
  
    contenedorBanners.remove()
    titloH2.remove()
    let h2Deposito= document.createElement('h2')
    h2Deposito.setAttribute('class','title')
    h2Deposito.textContent='Realizar Deposito'
    document.querySelector('header').appendChild(h2Deposito)

    let contenedorOperacionDeposito =document.createElement('div')
    contenedorOperacionDeposito.setAttribute('class','contenedor-deposito')
    contenedorOperaciones.appendChild(contenedorOperacionDeposito)
    // contenedor del formulario transferencias
    let formContainer = document.createElement('div')
    formContainer.setAttribute('class','container')
    contenedorOperacionDeposito.appendChild(formContainer)
    formContainer.addEventListener('submit',depositar)
     
    let h2Formulario =document.createElement('h2')
    h2Formulario.setAttribute('class','form-h2')
    formContainer.appendChild(h2Formulario)

    let aFormulario =document.createElement('a')
    aFormulario.textContent="Depositos"
    aFormulario.setAttribute('class','a-formulario')
    h2Formulario.appendChild(aFormulario)

    let divFormulario = document.createElement('form')
    divFormulario.setAttribute('class','form')
    formContainer.appendChild(divFormulario)

// Palabra clave para realizar la diferencia
    let inputUsuario = document.createElement('input')
    inputUsuario.setAttribute('type','text')
    inputUsuario.setAttribute('class','input')
    inputUsuario.setAttribute('placeholder','Palabra Clave')
    divFormulario.appendChild(inputUsuario)

    let inputDeposito=document.createElement('input')
    inputDeposito.setAttribute('type','number')
    inputDeposito.setAttribute('class','input input-monto')

    inputDeposito.setAttribute('placeholder','Monto a depositar' )
    divFormulario.appendChild(inputDeposito)

    let divOpciones =document.createElement('div')
    divOpciones.setAttribute('class','form-group')
    divFormulario.appendChild(divOpciones)



    let inputSubmit =document.createElement('input')
    inputSubmit.setAttribute('type','submit')
    inputSubmit.setAttribute('value','depositar' )
    divFormulario.appendChild(inputSubmit)
  
    

    function depositar (e){
        e.preventDefault()

        
        
        let nuevoSaldo= parseFloat( saldo)+parseFloat(inputDeposito.value)
         Swal.fire({
            position: 'center',
            icon: 'success',
            width: 600,
            height: 600,
            title: (`Gracias ${usuarioActual.nombre} ha depositado ${inputDeposito.value}, su saldo es ${nuevoSaldo }`),
            showConfirmButton: false,
            timer: 6000
          })
          saldo = nuevoSaldo
          
          
         
    }
    

    
    function irAtras(e){
        document.location.reload()
        bannerDepositos
        bannerTransferencias
        bannerSaldo
        }
        
        btnAtras.addEventListener('click',irAtras)
}   
      
function sumar (a,b){
    x = parseInt(a)+ parseInt(b)
    return x
    
}
function irAtras(e){
    window.location("./index.html")
    }  


    
    btnAtras.addEventListener('click',irAtras)

    bannerDepositos.addEventListener('click',menuDepositos)
    bannerTransferencias.addEventListener('click',menuTransferencia);
    bannerSaldo.addEventListener('click',consultaSaldo);
 
    
