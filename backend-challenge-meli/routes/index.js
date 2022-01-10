const express = require('express');
const router = express.Router();
const rootRoutes = require('./root');
const itemsRoutes = require('./items');

// Definición de routes.
router.use('/', rootRoutes);
router.use('/items', itemsRoutes);
module.exports = router;
