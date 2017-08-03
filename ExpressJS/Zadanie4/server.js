var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('login-page');
});

app.use('/profile', function(req, res, next){
    if (req.query.login === 'user' && req.query.password === 'pwd') {
        next();
    } else {
        res.render('unauthorized');
    }
});

app.get('/profile', function (req, res) {
    res.render('profile-page');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('404 Not Found');
});