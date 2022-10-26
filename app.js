const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./middleware');

const colors = require('colors')

const server = app.listen(port, () => console.log('server listening on port '.rainbow + port));

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: 'Home'
    }


    res.status(200).render('home', payload);
})