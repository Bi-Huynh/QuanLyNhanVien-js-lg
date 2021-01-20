const express = require('express');
const controllerLogin = require('../controllers/login.controller');
const validateLogin = require('../validate/login.validate');

const router = express.Router();

// trang chủ, thông tin nhân viên
router.get('/', controllerLogin.index);

router.post('/', validateLogin.checkLogin, controllerLogin.postLogin);

module.exports = router;