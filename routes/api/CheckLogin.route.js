const express = require('express');
const Check_Login_get = require('../../controllers/api/CheckLogin.controller')

const router = express.Router()

router.get('/', Check_Login_get.Check_Login_get);

module.exports = router