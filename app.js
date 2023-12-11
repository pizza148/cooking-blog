require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db.js');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');



const app = express();
const port = process.env.PORT || 3000
connectDB();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(expressLayout);
app.set('view engine','ejs');
app.set('layout','./layouts/main');

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
    secret:'CookingBlogSecrectss',
    saveUninitialized:true,
    resave:true,
}));
app.use(flash());
app.use(fileUpload());

const routes = require('./server/routes/recipeRoutes.js');

app.use('/',routes);


//listen
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})