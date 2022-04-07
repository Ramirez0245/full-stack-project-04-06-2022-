const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');

 function initialize(passport, getUserByEmailorUsername, getUserById) {

    //  CHECKS IF EMAIL EXIST AND IF PASSWORD IS CORRECT.
    // EMAIL AND PASSWORD ARE PASS BY or SET BY PASSPORT
    // AND THE ITS VALUES ARE WHAT IS PASSED BY REQ.BODY.EMAIL/PASSWORD 
    // THIS CAN ALSO MEAN THAT THE 'email' VARIABLE IS 'usernameField:'
    // THAT IS SET BY new LocalStragtegy
    const authenticateUser = async (email, password, done) => {
        console.log('AuthenticateUser ran')
        // USER IS ACTUALLY THE EMAIL NAME
        const query = await getUserByEmailorUsername(email)
        if (query == null) {
            return done(null, false, {message: 'That user or email does not exist' })
        }
        try {
            if (await bcrypt.compare(password, query.Password)) {
                const idToString = query._id.toString()
                const user = {  id: idToString,
                                username: query.UserName,
                                email: query.Email,
                                password: query.Password }
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (err) { return done(err) }
    }

    //TAKES IN TWO PARAMENTS - new LocalStragtegy & authenticateUser function
    passport.use(new LocalStrategy({ usernameField: 'email' }, 
    authenticateUser))

    //IN THE FOLLOWING - usernameField == user 
    //I DON'T NEED TO WORRY ABOUT THIS, I THINK. 
    passport.serializeUser((user, done) => {
        console.log("Hello from serializerUser")
        done(null, user.id.toString())
    })
    passport.deserializeUser(async (id, done) => {
        console.log('Hello from deserializerUserrr')
       return done(null, await getUserById(id))
    })
}

module.exports = initialize