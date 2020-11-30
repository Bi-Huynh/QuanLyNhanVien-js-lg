const express = require('express');
const app = express();
const port = 3000;
const infomationStaff = [
    { id: 1, name: 'Duc' },
    { id: 2, name: 'Hung' }
]

app.set('view engine', 'pug');
app.set("views", "./views");

// trang chủ, thông tin nhân viên
app.get('/', (req, res) => {
    res.render('index', { infomationStaff: infomationStaff });
});

app.get('/search', (req, res) => {
    let query = req.query.searchStaff;
    let arrStaff = infomationStaff.filter(staff => staff.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    res.render('index', { infomationStaff: arrStaff });
})

app.post('/')

app.listen(port, () => {
    console.log(`start ${port}`);
})