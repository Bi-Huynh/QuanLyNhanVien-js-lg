const express = require('express');
const bodyParser = require('body-parser');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
const app = express();
const port = 3000;
const db = lowdb(adapters);
db.defaults({ informationStaff: [] }).write();

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('css'));


// trang chủ, thông tin nhân viên
app.get('/', (req, res) => {
    if (db.get('informationStaff').value().length == 0) {
        res.render('index', { _informationStaff: {} });
    } else {
        res.render('index', { _informationStaff: db.get('informationStaff').value() });
    }
});

app.get('/search', (req, res) => {
    let query = req.query.searchStaff;
    let arrStaff = infomationStaff.filter(staff => staff.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    res.render('index', { infomationStaff: arrStaff });
})

app.get('/create', (req, res) => {
    res.render('create');
})

app.post('/create', (req, res) => {
    db.get('informationStaff').push(req.body.nameStaff);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`start ${port}`);
})