// import models
const Product = require('./Product');
const Location = require('./Location');

// For simplicity, we can make the assumption that a certain type of product is only found in one location at a time, which means that Products and Locations have a many-to-one relationship.

// Products belongs to Location
Product.belongsTo(Location, {
  foreign_key: 'location_id',
});

// Location have many Products
Location.hasMany(Product, {
  foreign_key: 'location_id',
});

module.exports = {
  Product,
  Location,
};
