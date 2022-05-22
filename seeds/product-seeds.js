const { Product } = require('../models');

const productData = [
  {
    product_name: 'White DnD Dice Set',
    price: 14.99,
    stock: 14,
    location_id: 1,
  },
  {
    product_name: 'Black DnD Dice Set',
    price: 90.0,
    stock: 25,
    location_id: 5,
  },
  {
    product_name: 'Purple DnD Dice Set',
    price: 22.99,
    stock: 12,
    location_id: 4,
  },
  {
    product_name: 'Original DnD Dice Set',
    price: 12.99,
    stock: 50,
    location_id: 3,
  },
  {
    product_name: 'DnD Player Handbook',
    price: 29.99,
    stock: 22,
    location_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
