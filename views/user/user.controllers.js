const db = require('../../config/db');

const informationStaff = db.get('informationStaff');

module.exports.index = (req, res) => {
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

module.exports.search = (req, res) => {
    let query = req.query.searchStaff;
    let arrStaff = informationStaff.value().filter(staff => {
        return staff.nameStaff.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
    res.render('user/index_user', {
        _informationStaff: '',
        _listStaff: arrStaff
    });
}

module.exports.viewCreate = (req, res) => {
    res.render('user/create_user');
}

module.exports.getID = (req, res) => {
    // sử dụng địa chỉ có tên là 'Router parameters'
    let userID = parseInt(req.params.userID);
    let user = informationStaff.find({ id: userID }).value();
    res.render('user/index_user', {
        _informationStaff: user,
        _listStaff: informationStaff.value()
    });
}

module.exports.postCreate = (req, res) => {
    let newStaff = req.body;
    newStaff.id = informationStaff.value().length + 1;
    newStaff.img = req.file.path.slice(10);
    informationStaff.push(newStaff).write();
    res.redirect('/user');
}