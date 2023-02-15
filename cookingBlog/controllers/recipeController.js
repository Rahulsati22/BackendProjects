const cate = require("../models/Category");
const recipe = require("../models/recipe");
module.exports.home = async function (request, response) {
  const recipee = await recipe.find({}).sort({ _id: -1 });
  const indian = await recipe.find({ category: "Indian" }).sort({ _id: -1 });
  const chinese = await recipe.find({ category: "Chinese" }).sort({ _id: -1 });
  const american = await recipe
    .find({ category: "American" })
    .sort({ _id: -1 });
  const thai = await recipe.find({ category: "Thai" }).sort({ _id: -1 });
  const mexican = await recipe.find({ category: "Mexican" }).sort({ _id: -1 });

  cate.find({}, function (error, category) {
    if (error) {
      console.log("error");
      return;
    } else return response.render("./layouts/home", { title: "Cooking Blog - Homepage", category, recipee, indian, chinese, american, thai, mexican });
  });
};
module.exports.categories = function (request, response) {
  cate.find({}, function (error, categoryy) {
    if (error) {
      console.log("error");
      return;
    } else return response.render("./layouts/categories", { title: "Cooking Blog - Categories", categoryy });
  });
};

module.exports.recipe = async function (request, response) {
  const recipee = await recipe.findById(request.params.id);
  return response.render("./layouts/recipe", { recipee });
};

module.exports.categoryCountry = function (request, response) {
  console.log(request.params.country);
  recipe.find({ category: request.params.country }, function (error, food) {
    if (error) {
      console.log("error");
      return;
    }
    return response.render("./layouts/ca", { food });
  });
};

module.exports.search = async function (request, response) {
  let searchTerm = request.body.searchTerm;
  let recipeee = await recipe.find({
    $text: { $search: searchTerm, $diacriticSensitive: true },
  });
  response.render("./layouts/search", {
    title: "Cooking-Blog Search",
    recipe: recipeee,
  });
};

module.exports.searchLatest = async function(request, response){
    const latest = await recipe.find({}).sort({_id:"-1"});
    response.render('./layouts/latest', {title : 'Cooking-Blog Latest Recipes', latest});
}

module.exports.findRandom = async function(request, response){
    const Random = await recipe.find({});
    let max = Random.length-1;
    let min = 0;
    let num = Math.floor(Math.random() * (max - min + 1) + min);

    let randomRecipe = Random[num];

    return response.render('./layouts/random',{title : 'Cooking Blog - Random Recipe', randomRecipe});
}


module.exports.submitForm = function(request, response){
  return response.render('./layouts/submitRecipe', {title : 'Cooking Blog - Submit Recipe'});
}


module.exports.addRecipe = function(request, response){
    recipe.create(request.body, function(error,user){
       if (error){
        console.log('error');
        return;
       }
       console.log(user);
       return response.redirect('./layouts/submitRecipe');
    })
}


module.exports.contact = function(request, response){
  return response.render('./layouts/contact', {title : 'Cooking-Blog Contact Page'});
}