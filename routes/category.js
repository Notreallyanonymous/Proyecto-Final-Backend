require('dotenv').config();
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const categoryController = require('../controllers/categoryController')

//crear categorias
router.post('/crear', authController, categoryController.crear)
//actualizar categorias
router.post('/update', authController, categoryController.update)

module.exports = router;