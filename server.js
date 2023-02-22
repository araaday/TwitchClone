var express = require('express');
const path = require('path')

var app = express();

app.use('/public', express.static(__dirname + "/public"));

app.get(['/', "public/index.html"], (req, res) => {
    res.sendFile(__dirname, 'index.html');
});

app.listen(8080, '127.0.0.1')
console.log('runing sever on 8080')


