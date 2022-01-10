const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
// Lectura y parseo del body
app.use(express.json());

// Cors
app.use(cors());

// Rutas
app.use('/api', routes);

module.exports = app;
