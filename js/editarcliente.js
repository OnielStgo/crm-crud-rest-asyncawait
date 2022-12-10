import { obterClientePeloId } from './API.js'

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
    
  })

  function mostrarCliente(cliente){
    const { nombre, email, telefono, empresa, id } = cliente;

    nomeInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
  }
})()