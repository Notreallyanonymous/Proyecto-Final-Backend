
const express = require('express');
const router = express.Router();
const coinsController = require('../controllers/coinsController')



//obtener coins
router.get('/getAll', coinsController.getAll)

module.exports = router;