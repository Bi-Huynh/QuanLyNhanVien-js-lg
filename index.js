require('dotenv').config();
// để có thể gọi biến trong env: process.env.Tên biến
// process.env : được dùng để gọi biến môi trường

const express = require('express');
// const user = require('./router/user.router');
// const login = require('./router/login.router');
const authMiddleware = require('./middleware/auth.login.middleware');
const sessionMiddleware = require('./middleware/session.middleware');
// const signup = require('./router/signup.router');
// const product = require('./router/product.router');
// const cart = require('./router/cart.router');
const loginApi = require('./api/routers/login.router');
const signupApi = require('./api/routers/signup.router');
const productApi = require('./api/routers/product.router');
const userApi = require('./api/routers/user.router');
const cartApi = require('./api/routers/cart.router');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// kết nối tới mongoose
mongoose.connect(process.env.MONGO_URL);
// ép mongoose sử dụng thư viện promise toàn cục
// mongoos.Promise = global.Promise;

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
// truyền 1 chuỗi ngẫu nhiên vào cookie parser để sử dụng signed cookie
app.use(express.static('public'));
// phải có thằng này để nó có thể đọc các file css img ....
app.use(sessionMiddleware);
app.use('/user', authMiddleware.requireAuth, userApi);
// app.use('/user', userApi);
// Nếu chưa login lần nào thì phải cho login r mới được thực hiện các thao tác khác
app.use('/login', loginApi);
app.use('/signUp', signupApi);
// app.use('/product', authMiddleware.requireAuth, product);
// app.use('/product', product);
app.use('/product', authMiddleware.requireAuth, productApi);
app.use('/cart', authMiddleware.requireAuth, cartApi);

app.get('/', (req, res) => {
    res.render('login/index_login');
});

app.listen(port, () => {
    console.log(`start ${port}`);
})