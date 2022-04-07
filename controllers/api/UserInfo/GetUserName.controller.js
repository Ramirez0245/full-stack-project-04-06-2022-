const  User_name_get = async (req, res, next)  =>  {
    console.log('user_name_get ran')
    return res.send(req.user)
}

exports.User_name_get = User_name_get