
const url = 'http://localhost:4000/clientes';

//criar novo cliente
export const novoCliente = async cliente => {
  
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href = 'index.html';
    
  } catch (error) {
    console.log(error);
  }
}

//obter todos os clientes
export const obterClientes = async () => {
  try {
    const resposta = await fetch(url);
    const clientes = resposta.json();
    return clientes;
    
  } catch (error) {
    console.log(error)
  }
}

//eliminar un cliente
export const eliminarCliente = async id => {

    try {
      await fetch(`${url}/${id}`, {
        method: 'DELETE'
      })
    } catch (error) {
      console.log(error)
    }
}

//obter um cliente pelo seu id
export const obterClientePeloId = async id => {
  try {
    const resposta = await fetch(`${url}/${id}`);
    const resultado = await resposta.json();
    return resultado;
  } catch (error) {
    console.log(error)
  }
}

//atualizar um registro
export const editarCliente = async cliente => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-type': 'application/json'
      }
    });

    window.location.href = 'index.html'
    
  } catch (error) {
    console.log(error)
  }
}