const express = require("express");
const router = express.Router();
const passport = require("passport");
const hC = require("../controllers/homeController");
const Story = require("../model/Story");
//login and signUp page
router.get("/", function (request, response) {
  if (request.isAuthenticated()) {
    return response.redirect("/dashboard");
  }
  return response.render("home");
});
//dashboard page
router.get(
  "/dashboard",
  passport.checkAuthenticatedUser,
  async function (request, response) {
    const stories = await Story.find({ user: request.user.id }).lean();
    return response.render("dashboard", { stories });
  }
);

//route for signUp page
router.get("/signUp", function (request, response) {
  if (request.isAuthenticated()) {
    return response.redirect("/dashboard");
  }
  return response.render("signup");
});

//route for signIn page
router.get("/login", function (request, response) {
  if (request.isAuthenticated()) {
    return response.redirect("/dashboard");
  }
  return response.render("login");
});

//creating the user in the database
router.post("/createUser", hC.createUser);

//redirecting to dashboard after successfull login
router.post(
  "/createSession",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (request, response) {
    return response.redirect("/dashboard");
  }
);

router.get("/logout", function (request, response) {
  request.logout(function (err) {
    if (err) {
      return next(err);
    }
    response.redirect("/");
  });
});

router.get("/addStoryForm", function (request, response) {
  return response.render("storyForm");
});

router.post("/putStory", hC.putStory);

router.get("/update", hC.update);

router.post("/changeStory", hC.changeStory);


router.get('/public', hC.publicStory);


router.get('/readMore', hC.readMore);
module.exports = router;
