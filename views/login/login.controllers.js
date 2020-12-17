const db = require('../../config/db');

const informationStaff = db.get('informationStaff');

module.exports.index = (req, res) => {
    res.render('login/index_login');
}

module.exports.postLogin = (req, res) => {
    res.cookie('userID', req.account.idStaff);
    res.render('main/index');
}

module.exports.viewSignUp = (req, res) => {
    res.render('signUp/index_signup');
}

module.exports.requireAuth = (req, res, next) => {
    let errors = [];

    if (!req.cookies.userID) {
        res.render('login/index_login');
        // khi chưa đăng nhập thì cho nó quay sang trang login
        return;
    }

    let user = informationStaff.find({ id: parseInt(req.cookies.userID) }).value();

    if (!user) {
        errors.push('account not found');
        res.render('login/index_login', { _errors: errors });
        return;
    }

    next();
}