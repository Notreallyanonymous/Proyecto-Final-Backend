require('dotenv').config();
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

//crear nuevos productos
router.post('/create', productController.create);

//actualizar de productos
router.put('/update/:id', productController.update);

//eliminar productos
router.delete('/delete/:id', productController.delete);

//cargar un producto
router.get('/get/:id', productController.getOne);

//cargar todos los productos
router.get('/getAll', productController.getAll);

module.exports = router;