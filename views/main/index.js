const express = require('express');
const user = require('../user/user');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('main/index');
});

app.use('/user', user);

app.listen(port, () => {
    console.log(`start ${port}`);
})