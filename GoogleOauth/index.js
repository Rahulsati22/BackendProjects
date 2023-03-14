const { request } = require("express");
const express = require("express");
const passport = require("passport");
const app = express();
const session = require("express-session");
require("./passport-setup");
app.listen(8000, function () {
  console.log("server is running on port 8000");
});
app.set("view engine", "ejs");
app.use(
  session({
    secret: "blah",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (request, response) => {
  response.render("./pages/index");
});
app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get("/success", (request, response) => {
  console.log(request.user);
  response.render("./pages/success", {
    name: request.user.displayName,
    photo: request.user.photos[0].value,
    email: request.user._json.email,
  });
});
app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (request, response) {
    response.redirect("/success");
  }
);

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
