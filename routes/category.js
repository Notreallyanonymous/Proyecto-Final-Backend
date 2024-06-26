require('dotenv').config();
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const categoryController = require('../controllers/categoryController')

//crear categorias
router.post('/crear', authController, categoryController.crear)
//actualizar categorias
router.put('/update', authController, categoryController.update)
//eliminar categorias
router.delete('/delete', authController, categoryController.delete)
//mostrar categorias
router.get('/getAll', authController, categoryController.getAll)
module.exports = router;