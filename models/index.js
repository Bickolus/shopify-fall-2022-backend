// import models
const Product = require('./Product');
const Location = require('./Location');

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
