const express = require("express");
const router = express.Router();

const {login, register} = 
require('../controllers/user');

//login
router.post('/login', login);

//register user
router.post('/register',register);

module.exports = router