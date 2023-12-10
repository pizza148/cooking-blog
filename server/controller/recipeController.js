
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
/**
 * get homepage
 */
exports.homePage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).limit(limitNumber);
        const thai = await Recipe.find({category:'Thai'}).limit(limitNumber);
        const american = await Recipe.find({category:'American'}).limit(limitNumber);
        const chinese = await Recipe.find({category:'Chinese'}).limit(limitNumber);
        const food = { latest,thai,american,chinese };
        res.render('index', { title: "Cooking Blog - Home",categories,food});
    } catch (error) {
        res.stauts(500).send({message:"error occured" || error});
    }
}

/**
 * get explore Categories
 */
exports.exploreCategoreies = async(req,res)=>{
    try {
        const limitNumber = 20;
        const categories = await Category.find().limit(limitNumber);
        res.render('categories', { title: "Cooking Blog - Categories",categories });
    } catch (error) {
        res.stauts(500).send({message:"error occured" || error});
    }
}

/**
 * get  recipes
 */
exports.recipe = async(req,res)=>{
    try {
        const id = req.params.id;
        const recipes = await Recipe.findById(id);
        res.render('recipes', { title: "Cooking Blog - Recipes",recipes });
    } catch (error) {
        res.stauts(500).send({message:"error occured" || error});
    }
}

/**
 * get explore Categories
 */
exports.exploreCategoreiesById = async(req,res)=>{
    try {
        const id = req.params.id;
        const limitNumber = 20;
        const categoriesById = await Recipe.find({category:id}).limit(limitNumber);
        res.render('categories', { title: "Cooking Blog - Categories",categoriesById });
    } catch (error) {
        res.satus(500).send({message:"error occured" || error});
    }
}
/**
 * Post/Search
 */
exports.searchRecipe = async(req,res)=>{
    try {
        const searchTerm = req.body.searchTerms;
        const recipes = await Recipe.find({ $text:{ $search:searchTerm ,$diacriticSensitive:true }});
        res.render('search',{title:'Cooking Blog - Search',recipes});
    } catch (error) {
    console.log(error);
    }
}
/**
 * Get Explore Latest
 * 
 */
exports.exploreLatest = async (req,res)=>{
    try {
        const limitNumber = 20;
        const recipes = await Recipe.find({}).sort({_id:-1}).limit(limitNumber);
        res.render('explore-latest.ejs',{title:"Cooking Blog - Explore-Latest",recipes})
    } catch (error) {
        res.satus(500).send({message:"Error Occured" || error});
    }
}

/**
 * get explore random
 */
exports.exploreRandom = async (req,res)=>{
    try {
        const count = await Recipe.find().countDocuments();
        const random1 = Math.floor(Math.random() * count);
        const recipes = await Recipe.findOne().skip(random1).exec();
        //res.json(recipes);
        res.render('explore-random',{title:'Cooking Blog - Explore Random',recipes})
    } catch (error) {
        res.satus(500).send({message:"Error Occured" || error})
    }
}
/**
 * get submit recipe
 */
exports.submitRecipe = async (req,res)=>{
    try {
        res.render('submit-recipe',{title:"Cooking Blog-Submit Recipt"})
    } catch (error) {
        res.satus(500).send({message:"Error Occurend" || error})
    }
}