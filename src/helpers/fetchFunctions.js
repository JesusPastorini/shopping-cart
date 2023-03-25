export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  const url = `https://api.mercadolibre.com/items/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const fetchProductsList = async (parame) => {
  try {
    if (!parame) throw new Error('Termo de busca não informado');
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${parame}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (e) {
    throw new Error('Termo de busca não informado');
  }
};
