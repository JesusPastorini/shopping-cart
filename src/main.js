import { saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

const products = document.querySelector('.products');
const exibeErro = () => {
  const err = document.createElement('span');
  err.className = 'error';
  products.appendChild(err);
  err.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
};

const adicionaCar = () => {
  const botaoCar = document.querySelectorAll('.product__add');
  const carProducts = document.querySelector('.cart__products');
  botaoCar.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const idBtn = event.target.parentNode.firstChild.innerHTML;
      const exibeItemCar = createCartProductElement(await fetchProduct(idBtn));
      carProducts.appendChild(exibeItemCar);
      saveCartID(idBtn);
    });
  });
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
    fetchProduct('MLB1405519561');
    adicionaCar();
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
