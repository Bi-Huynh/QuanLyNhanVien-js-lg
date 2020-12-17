const express = require('express');
const user = require('../user/user');
const login = require('../login/login');
const loginController = require('../login/login.controllers');
const signup = require('../signUp/signup');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('views'));
// phải có thằng này để nó có thể đọc các file css img ....
app.use('/user', loginController.requireAuth, user);
// Nếu chưa login lần nào thì phải cho login r mới được thực hiện các thao tác khác
app.use('/login', login);
app.use('/signUp', signup);

app.get('/', (req, res) => {
    res.render('login/index_login');
});

app.listen(port, () => {
    console.log(`start ${port}`);
})