export const getAddress = async () => {
  const cep = document.querySelector('.cep-input').value;
  
  const url = [`https://cep.awesomeapi.com.br/json/${cep}`];
  const url1 = [`https://brasilapi.com.br/api/cep/v2/${cep}`];
  const aux = await Promise.any(url, url1);
  const res = await fetch(aux).catch ((err) => 'CEP não encontrado');
  const data = await res.json();
  //console.log(data.code);
  if (data.code === 'invalid' || data.name === 'CepPromiseError') {
    endereco.innerHTML = 'CEP não encontrado';
    throw new Error('CEP não encontrado');
  }
  return data;
  
};
const endereco = document.querySelector('.cart__address');
export const searchCep = async () => {
  
  const getAdd = await getAddress();

  endereco.innerHTML = `${getAdd.address||getAdd.street} - ${getAdd.district||getAdd.neighborhood} - ${getAdd.city} - ${getAdd.state}`;
};
