const express = require('express');
const controllerSignUp = require('./signup.controllers');
const validateSignUp = require('./signup.validate');

const router = express.Router();

router.get('/', controllerSignUp.index);

router.post('/', validateSignUp.checkSignUp, controllerSignUp.postSignUp);

module.exports = router;