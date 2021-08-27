


function Usuario (id,nombre,contraseña,saldo){
    this.id=parseInt(id);
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.saldo=parseFloat(saldo)
}





let usuarios = [] 



    usuarios.push(new Usuario(1,'pedro',65487841,78900))





let bannerTransferencias = document.querySelector('.link-two')
let bannerDepositos = document.querySelector('.link-three')
let bannerSaldo = document.querySelector('.link-one ')
let contenedorBanners = document.querySelector('.contenedor')
let contenedorOperaciones =document.querySelector('.contenedor-operaciones')


function consultaSaldo (e){
    usuarios.forEach((dato)=>{
    e.preventDefault();
    contenedorBanners.remove()
    let contenedorOperacionSaldo =document.createElement('div')
    contenedorOperacionSaldo.setAttribute('class','contenedor-saldo')
    contenedorOperaciones.appendChild(contenedorOperacionSaldo)

    let operacionSaldo1=document.createElement('p')
    operacionSaldo1.setAttribute('class','operacion-saldo-1')
    operacionSaldo1.textContent="Su saldo es:"
    contenedorOperacionSaldo.appendChild(operacionSaldo1)

    let operacionSaldo2=document.createElement('p')
    operacionSaldo2.setAttribute('class','operacion-saldo-2')
    operacionSaldo2.textContent=  ( `${dato.saldo} Pesos`);
    // operacionSaldo2.textContent=`${window.localStorage.getItem.toString(usuarios.id)} PESOS` la idea seria obtener el dinero desde LocalStorage
    operacionSaldo1.appendChild(operacionSaldo2)
    });
    }

   

       
function menuTransferencia(){  // borrar el banner de opciones y generar el formulario
    usuarios.forEach((dato)=>{
    contenedorBanners.remove()
    let contenedorOperacionTransferencia =document.createElement('div')
    contenedorOperacionTransferencia.setAttribute('class','contenedor-transferencia')
    contenedorOperaciones.appendChild(contenedorOperacionTransferencia)
    // contenedor del formulario transferencias
    let formContainer = document.createElement('div')
    formContainer.setAttribute('class','container')
    contenedorOperacionTransferencia.appendChild(formContainer)
    formContainer.addEventListener('submit',transferir)

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


    let inputUsuario = document.createElement('input')
    inputUsuario.setAttribute('type','text')
    inputUsuario.setAttribute('class','input')
    inputUsuario.setAttribute('placeholder','usuario')
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





    function transferir (){
        let transferencia= restar(dato.saldo ,inputMonto.value) 
        Swal.fire({
            position: 'center',
            icon: 'success',
            width: 600,
            height: 600,
            title: (`ud ha transferido ${inputMonto.value}, su saldo restante es ${transferencia}`),
            showConfirmButton: false,
            timer: 6000
          })
        
       
              
                     
        }
        
    });
}
function restar(a,b){
    let resta = a-b
   return resta
}



    bannerTransferencias.addEventListener('click',menuTransferencia);
    bannerSaldo.addEventListener('click',consultaSaldo);

    