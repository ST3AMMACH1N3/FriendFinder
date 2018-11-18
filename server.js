const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require('./app/routing/apiRoutes')(app, path, fs);
const htmlRoutes = require('./app/routing/htmlRoutes')(app, path);

app.listen(8080);