const { isBuffer } = require('../../config/db');
const db = require('../../config/db');

const informationStaff = db.get('informationStaff');

module.exports.index = (req, res) => {
    res.render('login/index_login');
}

module.exports.postLogin = (req, res) => {
    res.cookie('userID', req.account.idStaff);
    res.render('main/index');
}

module.exports.requireAuth = (req, res) => {
    if (!req.cookies.userID) {
        res.redirect('/');
        // khi chưa đăng nhập thì cho nó quay sang trang login
        return;
    }

    let user = informationStaff.find({ id: req.cookies.userID }).value();

    if (!user) {
        res.redirect('/');
        return;
    }

    next();
}