let bannerTransferencias = document.querySelector('.link-two')
let bannerDepositos = document.querySelector('.link-three')
let bannerSaldo = document.querySelector('.link-one ')
let contenedorBanners = document.querySelector('.contenedor')
let contenedorOperaciones =document.querySelector('.contenedor-operaciones')
function consultaSaldo (e){
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
    operacionSaldo2.textContent=  ( "2000 pesos");
    // operacionSaldo2.textContent=`${window.localStorage.getItem.toString(usuarios.id)} PESOS` la idea seria obtener el dinero desde LocalStorage
    operacionSaldo1.appendChild(operacionSaldo2)
    }
bannerSaldo.addEventListener('click',consultaSaldo);

function realizarTransferencia(e){  // borrar el banner de opciones y generar el formulario
    e.preventDefault();
    contenedorBanners.remove()
    let contenedorOperacionTransferencia =document.createElement('div')
    contenedorOperacionTransferencia.setAttribute('class','contenedor-transferencia')
    contenedorOperaciones.appendChild(contenedorOperacionTransferencia)
    // contenedor del formulario transferencias
    let formContainer = document.createElement('div')
    formContainer.setAttribute('class','container')
    contenedorOperacionTransferencia.appendChild(formContainer)

    let h2Formulario =document.createElement('h2')
    h2Formulario.setAttribute('class','form-h2')
    formContainer.appendChild(h2Formulario)

    let aFormulario =document.createElement('a')
    aFormulario.textContent="Transferencias"
    h2Formulario.appendChild(aFormulario)

    let divFormulario = document.createElement('form')
    divFormulario.setAttribute('class','form')
    formContainer.appendChild(divFormulario)

    let inputUsuario = document.createElement('input')
    inputUsuario.setAttribute('type','text')
    inputUsuario.setAttribute('class','input')
    inputUsuario.setAttribute('value','username')
    inputUsuario.setAttribute('placeholder','usuario' )
    divFormulario.appendChild(inputUsuario)

    let inputContraseña=document.createElement('input')
    inputContraseña.setAttribute('type','text')
    inputContraseña.setAttribute('class','input')
    inputContraseña.setAttribute('placeholder','contraseña' )
    inputContraseña.setAttribute('value','usuario')
    divFormulario.appendChild(inputContraseña)
    

    


    document.createElement(`<div class='container'>
    <h2> <a href='#'> Transferencia</a></h2>
    <div class='form'>
      <input type="text" value="username" />
      <input type='text' value='auth code' />
      
      <input type='text' value='password' />
                                          <div  class="form-group"> <label for="motivo">Elija un motivo de transferencia</label> <select id="form_motivo" name="motivo" class="form-motivo" required="required" data-error="Especifique el motivo  ">
                                                  <option value="" selected disabled>--Seleccione motivo --</option>
                                                  <option id="option  "> varios </option>
                                                  <option id="option"> Expensas</option>
                                                  <option id="option">haberes</option>
                                                  <option id="option">Honorarios</option>
                                                  <option id="option">  Gastos </option>
                                              </select> </div>
                                      </div>
                                  </div>
      <input type='submit' value='sign up'/>
    </div>
    
  <div>`)

    // let operacionSaldo1=document.createElement('p')
    // operacionSaldo1.setAttribute('class','operacion-saldo-1')
    // operacionSaldo1.textContent="Su saldo es:"
    // contenedorOperacionSaldo.appendChild(operacionSaldo1)

    // let operacionSaldo2=document.createElement('p')
    // operacionSaldo2.setAttribute('class','operacion-saldo-2')
    // operacionSaldo2.textContent=  ( "2000 pesos");
    // // operacionSaldo2.textContent=`${window.localStorage.getItem.toString(usuarios.id)} PESOS` la idea seria obtener el dinero desde LocalStorage
    // operacionSaldo1.appendChild(operacionSaldo2)
}
bannerTransferencias.addEventListener('click',realizarTransferencia)


