const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name:{
        type:String,
        required:"this field is required"
    },
    description:{
        type:String,
        required:"this field is required "
    },
    email:{
        type:String,
        required:"this field is required"
    },
    ingredients:{
        type:Array,
        required:"this field is required"
    },
    category:{
        type:String,
        enum:['Thai','Chinese','American','Mexican','Indian'],
        required:"this field is required"
    },
    image:{
        type:String,
        required:"this field is required"
    }

});

module.exports = mongoose.model("Recipes",recipeSchema);