const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", "./views");



// trang chủ, thông tin nhân viên
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`start ${port}`);
})