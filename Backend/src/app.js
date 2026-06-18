const express = require('express');
const app = express();
const  registerRoutes  = require('./routes/registerRoute');

app.use(express.json());

app.use('/api/auth', registerRoutes);


module.exports = app;