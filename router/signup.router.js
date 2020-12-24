const express = require('express');
const controllerSignUp = require('../controller/signup.controllers');
const validateSignUp = require('../validate/signup.validate');

const router = express.Router();

router.get('/', controllerSignUp.index);

router.post('/', validateSignUp.checkSignUp, controllerSignUp.postSignUp);

module.exports = router;