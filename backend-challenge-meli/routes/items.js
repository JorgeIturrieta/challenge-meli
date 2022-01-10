const express = require('express');
const {getItemById} = require('../controllers/getItembyId');
const {search} = require('../controllers/search');
const router = express.Router();

router.get('/', search);
router.get('/:id', getItemById);
module.exports = router;
