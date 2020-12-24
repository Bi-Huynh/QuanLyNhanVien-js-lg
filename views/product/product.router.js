const express = require('express');
const controllerProduct = require('./product.controllers');

const router = express.Router();

router.get('/', controllerProduct.index);
router.get('/:page', controllerProduct.index);
// sử dụng router kiểu này thì muốn lấy giá trị ra phải dùng params
// còn sử dụng ? trên router thì phải sử dụng query

module.exports = router;