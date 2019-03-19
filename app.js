const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users');
const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/users', usersRoutes);
app.get('/', indexRoutes);

app.listen(3000);

