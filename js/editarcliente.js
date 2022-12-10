import { obterClientePeloId, editarCliente } from './API.js'
import { mostrarAlerta, validar } from './funciones.js';

(function(){

  //campos do formulário
  const nomeInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const telefonoInput = document.querySelector('#telefono');
  const empresaInput = document.querySelector('#empresa');
  const idInput = document.querySelector('#id');

  document.addEventListener('DOMContentLoaded', async () => {

    const parametrosURL = new URLSearchParams(window.location.search);
    const clienteId = parseInt(parametrosURL.get('id'));
    
    const cliente = await obterClientePeloId(clienteId);

    mostrarCliente(cliente);

    //submit do formulário
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente)
  })

  function mostrarCliente(cliente){
    const { nombre, email, telefono, empresa, id } = cliente;

    nomeInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
  }

  function validarCliente(e){
    e.preventDefault();

    const cliente = {
      nombre: nomeInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: parseInt(idInput.value)
    };

    //console.log(cliente)

    if(validar(cliente)){
      mostrarAlerta('Todos os campos são obrigatórios');
      return;
    }

    //editar cliente
    editarCliente(cliente);

  }
})()