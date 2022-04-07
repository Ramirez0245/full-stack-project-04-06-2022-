if ( process.env.NODE_ENV == 'production') {
    console.log('Hello from process.env if statment');
    
    require('dotenv').config();
    console.log(process.env.SESSION_SECRET);
}

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

// ROUTES
const RegisterUser_Route = require('./routes/api/RegisterUser.route')
const LoginUser_Route = require('./routes/api/LoginUser.route')
const LogoutUser_Route = require('./routes/api/LogoutUser.route')
const Success_Route = require('./routes/Success.route')
const Fail_Route = require('./routes/Fail.route')
const Home_get = require('./routes/Home.route')
const CheckLogin_Route = require('./routes/api/CheckLogin.route')
const Get_UserName_Route = require('./routes/api/GetUserName.route');

// MODEL
const User_Model = require('./models/User.model');

// AUTH IMPORTS
const passport = require('passport');
const initializePassport = require('./passport-config');
const flash = require('express-flash');
const session = require('express-session');
const methodOveride = require('method-override');

// MONGOOSE DATABASE CONNECTION
const mongoose = require('mongoose');
connectToHostDatabase().catch(err => console.log(err));
async function connectToHostDatabase() {
    mongoose.connection.close();
    await mongoose.connect(process.env.DATABASE_CONNECTION);
    console.log('After await mongoose.connect');
}

// USE
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// USE PASSPORT AUTH
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOveride('_method'))


//AUTH
initializePassport(passport, 
    async email  => { 
        const queryEmail = await User_Model.findOne({Email: email})
        if(queryEmail == null) {
            const queryUsername = await User_Model.findOne({UserName: email})
            return queryUsername;
        }
        return queryEmail;
    },
    async id => { 
        const query = await User_Model.find({_id: id})
        return query[0].UserName;
    }
);

//ROUTES
app.use('/register', RegisterUser_Route);
app.use('/login', LoginUser_Route);
app.use('/fail', Fail_Route);
app.use('/success', Success_Route);
app.use('/', Home_get);
app.use('/logout', LogoutUser_Route);
app.use('/checklogin', CheckLogin_Route)
app.use('/api/getusername', Get_UserName_Route)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

