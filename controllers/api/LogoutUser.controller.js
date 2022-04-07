const Logout_user_delete = async (req, res) => {
    req.logOut();
    res.send('You are logged out')
}

function checkNotAuthenticated(req, res, next) {
    console.log("Hello from checkNotAuthenticated")
    if(req.isAuthenticated()) {
        return next() 
    }
    return res.redirect('/')
}

exports.Logout_user_delete = Logout_user_delete;
exports.checkNotAuthenticated = checkNotAuthenticated;