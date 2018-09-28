const path = require('path');
const express = require('express');
const app = express();

// import routes

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server up on port ${app.get('port')}!`);
})