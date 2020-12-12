const db = require('../../config/db');

const informationStaff = db.get('informationStaff');

module.exports.index = (req, res) => {
    res.render('login/index_login');
}

module.exports.postLogin = (req, res) => {
    res.render('main/index');
}