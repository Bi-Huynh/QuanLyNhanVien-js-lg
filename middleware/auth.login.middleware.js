// const db = require('../config/db');

// const informationStaff = db.get('informationStaff');

const Staff = require('../model/staff.model');

module.exports.requireAuth = async (req, res, next) => {
    let errors = [];

    if (!req.signedCookies.userID) {
        res.render('login/index_login');
        // khi chưa đăng nhập thì cho nó quay sang trang login
        return;
    }

    // let user = informationStaff.find({
    //     id: parseInt(req.signedCookies.userID)
    // }).value();

    // if (!user) {
    //     errors.push('account not found');
    //     res.render('login/index_login', { _errors: errors });
    //     return;
    // }

    await Staff.findById(req.signedCookies.userID)
        .exec((err, staff) => {
            if (err) {
                errors.push('account not found');
                res.render('login/index_login', { _errors: errors });
                return;
            }

            if (!staff) {
                errors.push('staff not found');
                res.render('login/index_login', { _errors: errors });
                return;
            }

            next();
        });
}