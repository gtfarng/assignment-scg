var express = require('express');
var app = express();

app.get('/API/scg', (req, res)=>{
    res.send(`<html><body><div align="center"><h1>Called SCG</h1></div></body></html>`)

});

app.listen(8000);
console.log('Server is running!!! :8000');
console.log(' Local:   http://localhost:8000/API/scg');