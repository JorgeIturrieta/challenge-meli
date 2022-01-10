const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    version: '1.0',
    titulo: 'Backend Challenge Mercado Libre',
    descripcion: 'Backend Challenge Mercado Libre',
    autor: 'Iturrieta Jorge',
  });
});

module.exports = router;
