import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const exibeProdutos = async () => {
    const products = document.querySelector('.products');
    const api = await fetchProductsList('computador');
    const load = document.querySelector('.loading');
    api.forEach((element) => { 
        products.appendChild(createProductElement(element));
    });  
    load.parentElement.removeChild(load);
}; 

const carregando = () => {
    const products = document.querySelector('.products');
    const loading = document.createElement('span');
    loading.className = 'loading';
    products.appendChild(loading);
    loading.innerHTML = 'Carregando...';
};
carregando();
window.onload = function onload() {
    exibeProdutos()
};
document.querySelector('.cep-button').addEventListener('click', searchCep);
