const passport = require('passport');

const Login_user_passport_post = passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/fail',
    failureFlash: true 
})

function checkAuthenticated(req, res, next) {
    console.log('checkAuthenticated ran')
    if(req.isAuthenticated()) {
        return res.send('Already logged in')
    }
    return next() 
}

exports.Login_user_passport_post = Login_user_passport_post;
exports.checkAuthenticated = checkAuthenticated;