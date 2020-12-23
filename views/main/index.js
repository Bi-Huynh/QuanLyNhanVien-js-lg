require('dotenv').config();
// để có thể gọi biến trong env: process.env.Tên biến
// process.env : được dùng để gọi biến môi trường

const express = require('express');
const user = require('../user/user');
const login = require('../login/login');
const loginController = require('../login/login.controllers');
const signup = require('../signUp/signup');
const product = require('../product/product');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
// truyền 1 chuỗi ngẫu nhiên vào cookie parser để sử dụng signed cookie
app.use(express.static('views'));
// phải có thằng này để nó có thể đọc các file css img ....
app.use('/user', loginController.requireAuth, user);
// Nếu chưa login lần nào thì phải cho login r mới được thực hiện các thao tác khác
app.use('/login', login);
app.use('/signUp', signup);
app.use('/product', product);

app.get('/', (req, res) => {
    res.render('login/index_login');
});

app.listen(port, () => {
    console.log(`start ${port}`);
})