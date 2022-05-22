const router = require('express').Router();
const productRoutes = require('./product-routes');
const locationRoutes = require('./location-routes');

router.use('/products', productRoutes);
router.use('/locations', locationRoutes);

// Default API route
router.get('/', (req, res) => {
    res.json({ message: 'Connection to Inventory API Successful!' });
});

module.exports = router;
