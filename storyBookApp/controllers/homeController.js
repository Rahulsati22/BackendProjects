const User = require("../model/User");
const Story = require("../model/Story");
module.exports.createUser = function (request, response) {
  User.create(request.body, function (error, user) {
    if (error) {
      console.log("error");
    }
    console.log(user);
    return response.redirect("/login");
  });
};

module.exports.putStory = function (request, response) {
  Story.create(
    {
      title: request.body.title,
      description: request.body.description,
      status: request.body.status,
      user: request.user.id,
    },
    function (error, user) {
      if (error) {
        console.log(error);
        return;
      }
      return response.redirect("/dashboard");
    }
  );
};

module.exports.update = function (request, response) {
  console.log(request.query.id);
  Story.findById(request.query.id, function (error, story) {
    if (error) {
      console.log("error");
      return;
    }
    return response.render("update", { story });
  });
};

module.exports.changeStory = function (request, response) {
  Story.findByIdAndUpdate(
    request.query.id,
    request.body,
    function (error, user) {
      if (error) {
        console.log("error");
        return;
      }
      return response.redirect("/dashboard");
    }
  );
};


module.exports.publicStory = function(request, response){
  Story.find({}, function(error, story){
    if (error){
      console.log('error');
      return;
    }
    return response.render('public',{ story});
  })
}


module.exports.readMore = function(request, response){
  Story.findById(request.query.id, function(error,story){
    if (error){
      console.log('error');
      return;
    }
    return response.render('readMore', {story});
  })
}
