const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


// connecting to data base
mongoose.connect('mongodb://localhost/crud-db', { useNewUrlParser: true })
    .then(db => console.log("DB connected"))
    .catch(err => console.log(err));

// import routes
const indexRoutes = require('./routes/index');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

// middlewares
app.use(express.urlencoded({extended: false})); // coded data from form to JSON


// routes
app.use('/', indexRoutes);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server up on port ${app.get('port')}!`);
})