const express = require('express');
const controllerProduct = require('./product.controllers');

const router = express.Router();

router.get('/', controllerProduct.index);

module.exports = router;