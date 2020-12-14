const express = require('express');
const controllerSignUp = require('./sign-up.controllers');

const router = express.Router();

router.get('/', controllerSignUp.index);

router.post('/', controllerSignUp.postSignUp);