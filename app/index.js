var express = require('express');
var app = express(); 
var port = process.env.NODE_LOCAL_PORT || 3000;
var router = require('./routes');

app.use('/api/v1/', router);
app.listen(port);

console.log('API listening on port ' + port);