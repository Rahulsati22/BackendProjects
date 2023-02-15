const express = require("express");
const router = express.Router();
const rC = require("../controllers/recipeController");
router.get("/", rC.home);

router.get("/categories", rC.categories);

router.get("/recipe/:id", rC.recipe);

router.get("/categoryCountry/:country", rC.categoryCountry);

router.post("/search", rC.search);

router.get("/getLatest", rC.searchLatest);

router.get("/getRandom", rC.findRandom);

router.get('/submit', rC.submitForm);


router.post('/addRecipe', rC.addRecipe);

router.get('/contact', rC.contact);
module.exports = router;
