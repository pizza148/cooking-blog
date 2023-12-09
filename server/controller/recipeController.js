
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