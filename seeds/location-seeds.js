const { Location } = require('../models');

const locationData = [
  {
    location_name: 'Toronto Warehouse',
  },
  {
    location_name: 'Durham Storage Area',
  },
  {
    location_name: 'Halton Warehouse',
  },
  {
    location_name: 'Peel Storage Area',
  },
  {
    location_name: 'York Warehouse',
  },
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
