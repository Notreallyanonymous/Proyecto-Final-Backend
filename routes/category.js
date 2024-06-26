require('dotenv').config();
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

//crear categorias
router.post('/create', categoryController.create)

//actualizar categorias
router.put('/update', categoryController.update)

//eliminar categorias
router.delete('/delete', categoryController.delete)

//mostrar categorias
router.get('/getAll', categoryController.getAll)

module.exports = router;