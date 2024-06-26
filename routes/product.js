require('dotenv').config();
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

//registro de nuevos productos
router.post('/register', productController.register);

//cargar todos los productos
router.get('/getAll', productController.getAll);

module.exports = router;