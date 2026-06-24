const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello, World!');
    res.status(201).send('Hello, World!');
});

module.exports = app;