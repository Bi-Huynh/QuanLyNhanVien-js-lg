const express = require('express');

const controllerUser = require('../../controllers/user.controllers');

const router = express.Router();

// trang chủ, thông tin nhân viên
router.get('/', controllerUser.indexUser);

// tìm kiếm nhân viên theo tên
router.get('/search', controllerUser.searchUser);


router.get('/create_user', controllerUser.viewCreateUser);

// bấm vô 1 nhân viên để xem thông tin nhân viên đó
router.get('/:userID', controllerUser.getUserID);

// lưu thông tin nhân viên mới
router.post('/create_user', controllerUser.postCreateUser);

module.exports = router;