const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/User");
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      User.findOne({ email: email }, function (error, user) {
        if (error) {
          console.log("error in finding the user in database");
          return done(error);
        }
        if (!user || user.password != password) {
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

//serializing user to check which key should be kept in the cookies
passport.serializeUser(function (user, done) {
  return done(null, user.id);
});

//deserializing the user using user id in the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (error, user) {
    if (error) {
      return done(error);
    }
    return done(null, user);
  });
});

//now checking authentication
  passport.checkAuthenticatedUser = function(request, response, next){
    if (request.isAuthenticated()){
        return next();
    }
    return response.redirect('/login');
  }
  passport.setAuthenticatedUser = function(request, response, next){
    if (request.isAuthenticated()){
      //request.user contains the 
      response.locals.user = request.user;
    }
    return next();
  }

module.exports = passport;
