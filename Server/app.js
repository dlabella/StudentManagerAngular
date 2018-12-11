'use strict';
 
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
require('./routes/hobbyRoutes')(app);
require('./routes/sexoRoutes')(app);
require('./routes/studentRoutes')(app);
 
app.listen(3000, () => {
    console.log('Server up!');
});