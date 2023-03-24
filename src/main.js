import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const products = document.querySelector('.products');
const exibeErro = () => {
  const err = document.createElement('span');
  err.className = 'error';
  products.appendChild(err);
  err.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
};

const exibeProdutos = async () => {
  try {
    const api = await fetchProductsList('computador');
    const load = document.querySelector('.loading');
    const erro = document.querySelector('.error');
    api.forEach((element) => {
      products.appendChild(createProductElement(element));
    });
    load.remove();
    erro.remove();
    if (!api) ;
  } catch (e) {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }
};

const carregando = () => {
  const loading = document.createElement('span');
  loading.className = 'loading';
  products.appendChild(loading);
  loading.innerHTML = 'Carregando...';
};
window.onload = function onload() {
  exibeProdutos();
};
exibeErro();
carregando();
document.querySelector('.cep-button').addEventListener('click', searchCep);
