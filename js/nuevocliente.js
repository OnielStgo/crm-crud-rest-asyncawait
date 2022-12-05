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
      console.log('Todos os campos são obrigatórios');
      return;
    }

    console.log('Campos preenchidos corretamente!');
      
  }

  function validar(obj){
    return !Object.values(obj).every(item => item !== '')
  }

})()