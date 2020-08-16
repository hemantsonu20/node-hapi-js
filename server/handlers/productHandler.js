const Boom = require('@hapi/boom');

// dummy dataStore
const products = [
  {
    id: 1,
    name: 'Apple',
    category: 'Fruits',
  },
  {
    id: 2,
    name: 'Potato',
    category: 'Vegetables',
  },
  {
    id: 3,
    name: 'Banana',
    category: 'Fruits',
  },
  {
    id: 4,
    name: 'Tomato',
    category: 'Vegetables',
  },
];

const addProduct = async (product) => {
  const {id} = product;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    products.push(product);
    return product;
  } else {
    throw Boom.conflict('Product with given id already exists');
  }
};

const getProductById = async (id) => {
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw Boom.notFound();
  }
  return product;
};

const updateProductById = async (product, id) => {
  const index = products.findIndex((p) => p.id === id);
  if (index != -1) {
    products.splice(index, 1, product);
    return product;
  } else {
    throw Boom.notFound();
  }
};

const deleteProductById = async (id) => {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    return products.splice(index, 1);
  } else {
    throw Boom.notFound();
  }
};

const getProducts = () => products;

module.exports = {
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getProducts,
};
