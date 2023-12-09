const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL;

const connectDB = async()=>{
    try {
        const coon = await mongoose.connect(URL);
        console.log(coon.connection.host);
    } catch (error) {
       console.log(error); 
    }
};

module.exports = connectDB;