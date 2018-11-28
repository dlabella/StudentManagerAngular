'use strict';
 
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
require('./routes/studentRoutes')(app);
 
app.listen(3000, () => {
    console.log('Server up!');
});