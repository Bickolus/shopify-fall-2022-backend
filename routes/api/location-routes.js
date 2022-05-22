const router = require('express').Router();
const { Product, Location } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
      // including its associated Products data
      include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'location_id'] }],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location by id
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      // including its associated Products data
      include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'location_id'] }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location/warehouse found with that ID!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST (create) a new location
router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT (edit) a location using the location's id
router.put('/:id', async (req, res) => {
  try {
    const updatedLocation = await Location.update(
      {
        location_name: req.body.location_name,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );

    if (!updatedLocation) {
      res.status(404).json({ message: 'No location/warehouse found with that ID!' });
      return;
    }

    res.status(200).json(updatedLocation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a location by its id
router.delete('/:id', async (req, res) => {
  try {
    const deletedLocation = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedLocation) {
      res.status(404).json({ message: 'No location/warehouse found with that ID!' });
      return;
    }

    res.status(200).json(deletedLocation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;