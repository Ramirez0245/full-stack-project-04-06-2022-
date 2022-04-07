const express = require('express')
const User_name_get = require('../../controllers/api/UserInfo/GetUserName.controller')

const router = express.Router();

router.get('/', User_name_get.User_name_get);

module.exports =router