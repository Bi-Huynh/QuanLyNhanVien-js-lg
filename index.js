require('dotenv').config();
// để có thể gọi biến trong env: process.env.Tên biến
// process.env : được dùng để gọi biến môi trường

const express = require('express');
const user = require('./router/user.router');
const login = require('./router/login.router');
const authMiddleware = require('./middleware/auth.login.middleware');
const sessionMiddleware = require('./middleware/session.middleware');
const signup = require('./router/signup.router');
const product = require('./router/product.router');
const cart = require('./router/cart.router');

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
app.use(express.static('public'));
// phải có thằng này để nó có thể đọc các file css img ....
app.use(sessionMiddleware);
app.use('/user', authMiddleware.requireAuth, user);
// Nếu chưa login lần nào thì phải cho login r mới được thực hiện các thao tác khác
app.use('/login', login);
app.use('/signUp', signup);
app.use('/product', authMiddleware.requireAuth, product);
app.use('/cart', cart);

app.get('/', (req, res) => {
    res.render('login/index_login');
});

app.listen(port, () => {
    console.log(`start ${port}`);
})