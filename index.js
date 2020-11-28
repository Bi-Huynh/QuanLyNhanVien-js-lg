const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set("views", "./views");

var staff = [
    { url: 'http://', fristName: 'Huynh Trung', lastName: 'Duc' }
];

app.get('/', (req, res) => {
    res.render('index1');
});


app.listen(port, () => {
    console.log(`start ${port}`);
})