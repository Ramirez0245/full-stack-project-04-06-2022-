const express = require('express');
const Success_page = require('../controllers/Success.controller');

const router = express.Router();

router.get('/', Success_page.Success_page_get);

module.exports = router;