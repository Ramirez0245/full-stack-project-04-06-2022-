const express = require('express');
const Register_User = require('../../controllers/api/RegisterUser.controller');

const router = express.Router();

router.post('/', Register_User.checkNotAuthenticated, Register_User.Register_user_post);

module.exports = router;