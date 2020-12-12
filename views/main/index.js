const express = require('express');
const user = require('../user/user');
const login = require('../login/login');

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
app.use('/user', user);
app.use('/login', login);

app.get('/', (req, res) => {
    res.render('login/index_login');
});

app.listen(port, () => {
    console.log(`start ${port}`);
})