const express = require('express');
const Logout_user = require('../../controllers/api/LogoutUser.controller')

const router = express.Router();

router.delete('/', Logout_user.checkNotAuthenticated, Logout_user.Logout_user_delete)

module.exports = router