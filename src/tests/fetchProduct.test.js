import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('O retorno de fetchProduct é igual ao retorno de computadorSearch', async () => {
    const fet = await fetchProduct('MLB1405519561');
    expect(fet).toMatchObject(product);
  });

  it('O retorno vazio de fetchProduct reproduz o erro: ID não informado', async () => {
    await expect(fetchProduct()).rejects.toThrow(
    new Error('ID não informado'),
  );
  });   
});
