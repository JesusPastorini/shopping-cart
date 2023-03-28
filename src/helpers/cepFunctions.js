export const getAddress = async () => {
  const cep = document.querySelector('.cep-input').value;
  const url = [`https://cep.awesomeapi.com.br/json/${cep}`];
  const url1 = [`https://brasilapi.com.br/api/cep/v2/${cep}`];
  const aux = await Promise.any(url, url1);
  const res = await fetch(aux);
  const data = await res.json();
  return data;
};

export const searchCep = async () => {
  const endereco = document.querySelector('.cart__address');
  try {
    const getAdd = await getAddress();
    const rua = (getAdd.address || getAdd.street);
    const bairro = (getAdd.district || getAdd.neighborhood);
    endereco.innerHTML = `${rua} - ${bairro} - ${getAdd.city} - ${getAdd.state}`;
  } catch {
    endereco.innerHTML = 'CEP não encontrado';
  }
};
