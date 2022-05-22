const router = require('express').Router();
const { Product, Location } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      // including its associated Products data
      include: [{ model: Location, attributes: ['id', 'location_name'] }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single product by id
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      // including its associated Products data
      include: [{ model: Location, attributes: ['id', 'location_name'] }],
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with that ID!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST (create) a new product
router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT (edit) a product using the product's id
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.update(
      {
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        location_id: req.body.location_id,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );

    if (!updatedProduct) {
      res.status(404).json({ message: 'No product found with that ID!' });
      return;
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a product by its id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedProduct) {
      res.status(404).json({ message: 'No product found with that ID!' });
      return;
    }

    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;