require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');





const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(expressLayout);
app.set('view engine','ejs');
app.set('layout','./layouts/main');



const routes = require('./server/routes/recipeRoutes.js');

app.use('/',routes);


//listen
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})