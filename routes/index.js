const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Hey, there is no front-end for this application, so try making some requests using the URL!</h1>")
});

module.exports = router;