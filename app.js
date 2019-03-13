const express = require('express');

const app = express();

app.use('/favicon.ico', (req, res) => res.status(204));

app.use('/two-middleware', (req, res, next) => {
    console.log('hello 1');
    next();
});

app.use('/two-middleware', (req, res, next) => {
    console.log('hello 2');
    res.send('<h1>Hello, there</h1>');
})

app.use('/users', (req, res, next) => {
    console.log(req.baseUrl);
    res.send('<h1>/users</h1>');
});

app.use('/', (req, res, next) => {
    console.log(req.baseUrl);
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);

