const path = require('path');
const express = require('express');
const helment = require('helmet');
const app = express();
app.use(helment());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    res.render('index', { heading: 'Headline', content: 'Some Content' });

});

app.get('/about', function (req, res) {
    res.render('about', {});

});

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));