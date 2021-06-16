const express = require('express');
const app = express(); 
const port = process.env.NODE_LOCAL_PORT || 3000;
const router = require('./routes');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', router);
app.listen(port);

console.log('API listening on port ' + port);