import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const exibeProdutos = async () => {
    const products = document.querySelector('.products');
    const api = await fetchProductsList('computador');
    api.forEach((element) => { 
        products.appendChild(createProductElement(element));
    });
}; 
exibeProdutos();
document.querySelector('.cep-button').addEventListener('click', searchCep);
