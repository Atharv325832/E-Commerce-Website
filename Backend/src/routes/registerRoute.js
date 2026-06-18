const express = require('express');

const routes = express.Router();
const authController = require('../controllers/authController');

routes.post('/register', authController.authData);

module.exports = routes;