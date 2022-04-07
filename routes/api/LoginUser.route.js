const express = require('express');
const Login_user_post = require('../../controllers/api/LoginUser.controller')

const router = express.Router();

router.post('/', Login_user_post.checkAuthenticated, Login_user_post.Login_user_passport_post);

module.exports = router; 