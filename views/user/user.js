const express = require('express');
const bodyParser = require('body-parser');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('config/db.json');
const app = express();
const port = 3000;
const db = lowdb(adapters);
db.defaults({ informationStaff: [] }).write();

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const informationStaff = db.get('informationStaff').value();

// trang chủ, thông tin nhân viên
app.get('/', (req, res) => {
    if (informationStaff.length == 0) {
        res.render('user/index_user', { _informationStaff: '', _listStaff: {} });
    } else {
        res.render('user/index_user', { _informationStaff: '', _listStaff: informationStaff });
    }
});

app.get('/search', (req, res) => {
    let query = req.query.searchStaff;
    let arrStaff = informationStaff.filter(staff => staff.nameStaff.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    res.render('user/index_user', { _listStaff: arrStaff });
})

app.get('/user/create_user', (req, res) => {
    res.render('user/create_user');
})

app.get('/user/:userID', (req, res) => {
    let userID = req.params.userID;
    let user = informationStaff.find((staff) => staff.id == userID);
    res.render('user/index_user', { _informationStaff: user, _listStaff: informationStaff });
})

app.post('/user/create_user', (req, res) => {
    newStaff = req.body;
    db.get('informationStaff').push(newStaff).write();
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`start ${port}`);
})