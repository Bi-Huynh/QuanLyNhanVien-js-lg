const express = require('express');
const bodyParser = require('body-parser');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
const app = express();
const port = 3000;
const db = lowdb(adapters);
db.defaults({ infomationStaff: [] }).write();

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const infomationStaff = [
    { id: 1, name: 'Duc' },
    { id: 2, name: 'Hung' }
]



// trang chủ, thông tin nhân viên
app.get('/', (req, res) => {
    res.render('index', { infomationStaff: infomationStaff });
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
    let newStaff = {};
    newStaff.id = infomationStaff[infomationStaff.length - 1].id + 1;
    newStaff.name = req.body.nameStaff;
    infomationStaff.push(newStaff);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`start ${port}`);
})