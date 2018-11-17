const express = require('express');
const path = require('path');
const app = express();
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/:route?', htmlRoutes);
app.get('/api/:route', apiRoutes);
app.post('/api/:route', apiRoutes);

app.listen(8080);