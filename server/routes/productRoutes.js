const productHandler = require('../handlers/productHandler');
const Joi = require('joi');

const productSchema = Joi.object(
    {
      id: Joi.number().required(),
      name: Joi.string().required(),
      category: Joi.string().valid('fruits', 'vegetables').required(),
    },
);

const productRoutes = [
  {
    method: 'POST',
    path: '/products',
    handler: (request) => productHandler.addProduct(request.payload),
    options: {
      tags: ['api'],
      validate: {
        payload: productSchema,
      },
    },
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: (request) => productHandler.getProductById(request.params.id),
    options: {
      tags: ['api'],
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: 'PUT',
    path: '/products/{id}',
    handler: (request) =>
      productHandler.updateProductById(request.payload, request.params.id),
    options: {
      tags: ['api'],
      validate: {
        payload: productSchema,
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: 'DELETE',
    path: '/products/{id}',
    handler: (request) => productHandler.deleteProductById(request.params.id),
    options: {
      tags: ['api'],
      validate: {
        params: Joi.object({
          id: Joi.number().required(),
        }),
      },
    },
  },
  {
    method: 'GET',
    path: '/products',
    handler: productHandler.getProducts,
    options: {
      tags: ['api'],
    },
  },
];

module.exports = productRoutes;
