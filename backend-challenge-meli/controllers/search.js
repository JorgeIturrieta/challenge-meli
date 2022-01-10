const {response} = require('express');
const {API_MELI} = require('../utils/envConfig');
const {author} = require('../utils/author');
const fetch = require('node-fetch');
const {buildItems} = require('../helpers/build-resp');
const search = async (req, res = response) => {
  try {
    const query = req.query.q;

    if (!query) {
      throw new Error('El parametro de búsqueda no es correcto');
    }

    const response = await fetch(`${API_MELI}/sites/MLA/search?q=${query}`);
    if (!response.ok) throw new Error('Recurso no encontrado');
    const data = await response.json();
    let categories = null;
    let categoryId = null;
    if (data.filters.length) {
      categories = data.filters[0].values[0].path_from_root.map(
        category => category.name,
      );
    } else {
      categories = data.available_filters
        .filter(filter => filter.id === 'category')[0]
        .values.map(category => ({
          name: category.name,
          results: category.results,
          id: category.id,
        }))
        .reduce((prev, curr) => (prev.results > curr.results ? prev : curr));
      categories = [categories].map(category => category.name);
    }

    const items = buildItems(data.results);

    res.json({
      author,
      categories,
      items,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  search,
};
