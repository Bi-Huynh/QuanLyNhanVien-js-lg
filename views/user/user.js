const express = require('express');
const db = require('../../Database/db');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const informationStaff = db.get('informationStaff');

// trang chủ, thông tin nhân viên
router.get('/', (req, res) => {
    if (informationStaff.value().length == 0) {
        res.render('user/index_user', {
            _informationStaff: '',
            _listStaff: {}
        });
    } else {
        res.render('user/index_user', {
            _informationStaff: '',
            _listStaff: informationStaff.value()
        });
    }
});

// tìm kiếm nhân viên theo ten
router.get('/search', (req, res) => {
    let query = req.query.searchStaff;
    let arrStaff = informationStaff.value().filter(staff => {
        return staff.nameStaff.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
    res.render('user/index_user', { _listStaff: arrStaff });
})

router.get('/create_user', (req, res) => {
    res.render('user/create_user');
})

// bấm vô 1 nhân viên để xem thông tin nhân viên đó
router.get('/:userID', (req, res) => {
    // sử dụng địa chỉ có tên là 'Router parameters'
    let userID = parseInt(req.params.userID);
    let user = informationStaff.find({ id: userID }).value();
    res.render('user/index_user', {
        _informationStaff: user,
        _listStaff: informationStaff.value()
    });
})

// lưu thông tin nhân viên mới
router.post('/create_user', (req, res) => {
    newStaff = req.body;
    informationStaff.push(newStaff).write();
    res.redirect('/');
})

module.exports = router;