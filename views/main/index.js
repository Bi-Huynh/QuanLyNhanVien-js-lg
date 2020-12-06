const express = require('express');
const user = require('../user/user');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('main/index');
});

app.use('/user', user);

app.listen(port, () => {
    console.log(`start ${port}`);
})