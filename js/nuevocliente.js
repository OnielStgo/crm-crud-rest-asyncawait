
import { mostrarAlerta } from './funciones.js';
import { novoCliente } from './API.js';

(function(){

  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarCliente);

  function validarCliente(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa
    };

    if(validar(cliente)){
      mostrarAlerta('Todos os campos são obrigatórios');
      return;
    }

    novoCliente(cliente);
      
  }

  function validar(obj){
    return !Object.values(obj).every(item => item !== '')
  }

})()