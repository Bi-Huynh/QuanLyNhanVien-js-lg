const db = require('../Database/db');

const informationStaff = db.get('informationStaff');

module.exports.indexUser = (req, res) => {
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
}

module.exports.searchUser = (req, res) => {
    let query = req.query.searchStaff;
    let arrStaff = informationStaff.value().filter(staff => {
        return staff.nameStaff.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
    res.render('user/index_user', {
        _informationStaff: '',
        _listStaff: arrStaff
    });
}

module.exports.viewCreateUser = (req, res) => {
    res.render('user/create_user');
}

module.exports.getUserID = (req, res) => {
    // sử dụng địa chỉ có tên là 'Router parameters'
    let userID = parseInt(req.params.userID);
    let user = informationStaff.find({ id: userID }).value();
    res.render('user/index_user', {
        _informationStaff: user,
        _listStaff: informationStaff.value()
    });
}

module.exports.postCreateUser = (req, res) => {
    let newStaff = req.body;
    newStaff.id = informationStaff.value().length + 1;
    informationStaff.push(newStaff).write();
    res.redirect('/user');
}