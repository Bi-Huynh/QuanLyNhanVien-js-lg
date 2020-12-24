const express = require('express');
var multer = require('multer');

const controllerUser = require('./user.controllers');
const validateUser = require('./user.validate');

var upload = multer({ dest: './views/img-staff/' });
const router = express.Router();

// trang chủ, thông tin nhân viên
router.get('/', controllerUser.index);

// tìm kiếm nhân viên theo tên
router.get('/search', controllerUser.search);

router.get('/create_user', controllerUser.viewCreate);

// bấm vô 1 nhân viên để xem thông tin nhân viên đó
router.get('/:userID', controllerUser.getID);

// lưu thông tin nhân viên mới
router.post('/create_user',
    upload.single('img'),
    validateUser.postCreate,
    controllerUser.postCreate
);

module.exports = router;