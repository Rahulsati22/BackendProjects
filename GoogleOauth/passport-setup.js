// importing the passport so that we can use it
const passport = require("passport");
// telling which strategy the passport will use
const googleStrategy = require("passport-google-oauth20").Strategy;
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new googleStrategy(
    {
      // all three information we have to get it from google
      clientID:
        "772674124555-b1tfpeoimfr7kct4slhs0v0j0a55k058.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);
