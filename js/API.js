
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