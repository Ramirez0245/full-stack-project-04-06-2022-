const express = require('express');
const Home = require('../controllers/Home.controller');

const router = express.Router();
//             checkAuthenticated,
router.get('/',  Home.Home_get);


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticaed()) {
        return next();
    }
    res.redirect('/login')
}

module.exports = router; 