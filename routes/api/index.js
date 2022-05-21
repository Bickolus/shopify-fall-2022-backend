const router = require('express').Router();
const productRoutes = require('./product-routes');
const locationRoutes = require('./location-routes');

router.use('/products', productRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
