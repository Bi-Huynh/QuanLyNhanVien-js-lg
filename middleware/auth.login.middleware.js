const db = require('../config/db');

const informationStaff = db.get('informationStaff');

module.exports.requireAuth = (req, res, next) => {
    let errors = [];

    if (!req.signedCookies.userID) {
        res.render('login/index_login');
        // khi chưa đăng nhập thì cho nó quay sang trang login
        return;
    }

    let user = informationStaff.find({
        id: parseInt(req.signedCookies.userID)
    }).value();

    if (!user) {
        errors.push('account not found');
        res.render('login/index_login', { _errors: errors });
        return;
    }

    next();
}