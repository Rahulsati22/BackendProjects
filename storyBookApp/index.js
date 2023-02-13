const express = require('express');
const app = express();
const port = 8000;
var expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const LocalStrategy = require('./config/passport');
const connection = require('./config/mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const cookieParser = require('cookie-parser');
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('./static'));
app.use(expressLayouts);
app.use(cookieParser());
app.use(session({
    name : 'storyBook',
    //Todo --> to change the secret before deployment in production mode
    secret : 'blah',

    saveUninitialized : false,

    resave : false,

    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/storyTellingApp' })
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes/index'))
app.listen(port, function(err){
    if (err){
        console.log('error in connecting');
        return;
    }
    console.log(`successfully running on the port ${port}`);
})