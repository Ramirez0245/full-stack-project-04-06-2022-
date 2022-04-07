const Check_Login_get = (req, res, next) => {
    console.log('check_log_get ran')
    if(req.isAuthenticated()) { return res.send(true) }
    return res.send(false)
}

exports.Check_Login_get = Check_Login_get;