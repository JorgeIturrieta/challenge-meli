const {response} = require('express');
const {API_MELI} = require('../utils/envConfig');
const {author} = require('../utils/author');
const fetch = require('node-fetch');
const {buildItems} = require('../helpers/build-resp');
const getItemById = async (req, res = response) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error('No se proporcionó un id de item');
    }

    const responseItem = await fetch(`${API_MELI}/items/${id}`);
    if (!responseItem.ok) throw new Error('Recurso no encontrado');

    const dataItem = await responseItem.json();

    const responseDescription = await fetch(
      `${API_MELI}/items/${id}/description`,
    );

    const dataDescription = await responseDescription.json();
    const description = dataDescription.plain_text;

    const items = buildItems(dataItem);

    const categoryResponse = await fetch(
      `${API_MELI}/sites/MLA/search?category=${items.category_id}`,
    );
    const categoryData = await categoryResponse.json();
    const category = categoryData.filters.length
      ? categoryData.filters[0].values[0].path_from_root.map(
          category => category.name,
        )
      : null;

    res.json({
      author,
      category,
      items: {
        ...items,
        description,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getItemById,
};
