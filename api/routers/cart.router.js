const express = require('express');
const controllerCart = require('../controllers/cart.controller');

const router = express.Router();

// trang chủ, thông tin nhân viên
router.get('/add/:productID', controllerCart.addToCart);

module.exports = router;