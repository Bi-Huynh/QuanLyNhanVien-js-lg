const express = require('express');
var multer = require('multer');

const controllerUser = require('../controllers/user.controller');
const validateUser = require('../validate/user.validate');

var upload = multer({ dest: './public/img-staff/' });
const router = express.Router();

// trang chủ, thông tin nhân viên
router.get('/', controllerUser.index);

// tìm kiếm nhân viên theo tên
router.get('/search', controllerUser.search);

// chuyển dòng này xuống phía dưới /:userID thì nó sẽ bị lỗi, KHÔNG HIỂU. Tìm hiểu thêm về lỗi này
router.get('/create', controllerUser.viewCreate);

// bấm vô 1 nhân viên để xem thông tin nhân viên đó
router.get('/:userID', controllerUser.getID);

// lưu thông tin nhân viên mới
router.post('/create',
    upload.single('img'),
    validateUser.postCreate,
    controllerUser.postCreate
);

module.exports = router;