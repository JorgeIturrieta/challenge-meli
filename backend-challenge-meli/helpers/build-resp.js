const buildItems = items => {
  if (Array.isArray(items)) {
    return items
      .map(item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(item.price.toString().split('.')[0], 10),
          decimals: parseInt(item.price.toString().split('.')[1]),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address: item.address.city_name,
      }))
      .splice(0, 4);
  } else
    return {
      id: items.id,
      category_id: items.category_id,
      title: items.title,
      price: {
        currency: items.currency_id,
        amount: parseInt(items.price.toString().split('.')[0], 10),
        decimals: parseInt(items.price.toString().split('.')[1]),
      },
      picture: items.pictures[0].url,
      condition: items.condition,
      free_shipping: items.shipping.free_shipping,
      sold_quantity: items.sold_quantity,
    };
};

module.exports = {buildItems};
