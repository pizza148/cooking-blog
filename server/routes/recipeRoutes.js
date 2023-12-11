const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

/**
 * App Routes
 */
router.get('/',recipeController.homePage);
router.get('/categories',recipeController.exploreCategoreies);
router.get('/categories/:id',recipeController.exploreCategoreiesById);
router.get('/recipe/:id',recipeController.recipe);
router.post('/search',recipeController.searchRecipe);
router.get('/explore-latest',recipeController.exploreLatest);
router.get('/explore-random',recipeController.exploreRandom);
router.get('/submit-recipe',recipeController.submitRecipe);
router.post('/submit-recipe',recipeController.submitRecipePost);
router.get('/edit/:id',recipeController.editRecipe);
module.exports = router