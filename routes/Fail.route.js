const express = require('express');
const Fail_page = require('../controllers/Fail.controller');

const router = express.Router();

router.get('/', Fail_page.Fail_page_get);

module.exports = router; 