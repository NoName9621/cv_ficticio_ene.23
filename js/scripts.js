const btnEnviar = document.querySelector('.btn-enviar');
// const mensaje = document.querySelector('.mensaje');


btnEnviar.addEventListener('click', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector('.nombre').value;
    const correo = document.querySelector('.correo').value;
    const mensaje = document.querySelector('.mensaje').value;

    if(nombre == '' || correo == '' || mensaje == ''){
        alert('Todos los campos son obligatorios');
    }else {
        return confirmacion();
    }
}
function confirmacion(){
    var respuesta = confirm("¿Deseas enviar este mensaje?");
    if(respuesta){
        return mensajeEnviado();
    }else{
        return false;
    }
}
function resetearFormulario(){
    document.querySelector('.formulario').reset();
}

function mensajeEnviado(){
    alert('¡Mensaje enviado exitosamente!');
    resetearFormulario();
}