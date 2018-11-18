const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require('./app/routing/apiRoutes')(app, path, fs);
const htmlRoutes = require('./app/routing/htmlRoutes')(app, path);

app.listen(PORT);